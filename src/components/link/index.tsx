import * as d3 from 'd3';
import { INodeItem, ILinkItem } from '@/typings/custom-data';
import { DEFAULT_LINK_WIDTH, DEFAULT_LINK_COLOR, DEFAULT_LINK_SELECTED_COLOR, DEFAULT_NODE_SIZE, MAX_ARROW_SIZE } from '@/constants';
import { appendStyle, compileColor, compileColors, decompileColorId } from '@/utils';


const drawLink = (
  g: d3.Selection<SVGElement, unknown, HTMLElement, undefined>,
  data: INodeItem[],
  linkData: ILinkItem[],
  x: d3.ScaleTime<number, number, never>,
  y: d3.ScalePoint<string>,
  onSelectedLinksChange?: <T>(current: T, selectedNodes: T[]) => void,
  linkStyle?: {
    color?: string;
    selectedColor?: string;
  },
  nodeStyle?: {
    color?: string;
    size?: number;
  }
) => {
  const color = linkStyle?.color || DEFAULT_LINK_COLOR;
  const selectedColor = linkStyle?.selectedColor || DEFAULT_LINK_SELECTED_COLOR;
  const nodeSize = nodeStyle?.size || DEFAULT_NODE_SIZE;
  const arrowSize = nodeSize > MAX_ARROW_SIZE ? nodeSize : MAX_ARROW_SIZE;

  const getArrowMarkerId = (color: string) => {
    const colorId = compileColor(color);
    const arrowDefs = g.select('.arrow-markers-defs');
    const arrowId = `arrow-${colorId}`;
    const arrow = arrowDefs.select(`#${arrowId}`);
    if (!arrow.empty()) return arrowId;

    const baseArrow = arrowDefs.select(`#arrow`);

    baseArrow.clone(true).attr('id',arrowId).select('path').attr('fill', decompileColorId(colorId));
    return arrowId;
  }

  const getGradientId = (colors: string[], coordinate: Record<'x1'|'x2'|'y1'|'y2', number>) => {
    const gradientRefs = g.select('.linear-gradient-defs');
    const l = gradientRefs.selectAll('linearGradient').size();
    const gradientId = compileColors(colors).join('') + `l${l}`;

    if (!gradientRefs.select(`#${gradientId}`).empty()) return gradientId;

    const { x1, x2, y1, y2 } = coordinate;

    gradientRefs.append('linearGradient')
                .attr('id', gradientId)
                .attr('x1', x1)
                .attr('y1', y1)
                .attr('x2', x2)
                .attr('y2', y2)
                .attr('gradientUnits', 'userSpaceOnUse')
                .selectAll('stop')
                .data(colors)
                .join('stop')
                .attr('stop-color', color => color)
                .attr('offset', function(_, index) {
                  if (index === colors.length - 1) {
                    return '100%';
                  }
                  return `${index * Math.floor(100 / colors.length)}%`
                });
    return gradientId;
  }

  // 预先定义箭头图标
  g.append("defs")
    .attr('class', 'arrow-markers-defs')
    .append("marker")
    .attr("id", "arrow")
    .attr("markerHeight", arrowSize)
    .attr("markerWidth", arrowSize)
    .attr("refX", arrowSize / 2)
    .attr("refY", arrowSize / 4)
    .attr("orient", "auto")
    .append("path")
    .attr("fill", color)
    .attr("d", `M0,0 v${arrowSize / 2} l${(arrowSize * 4) / 5},-${arrowSize / 4} Z`);

  // 预先定义渐变色 wrapper
  g.append('defs')
    .attr('class', 'linear-gradient-defs');

  // 定义选择的箭头图标
  g.append("defs")
    .append("marker")
    .attr("id", "arrow-selected")
    .attr("markerHeight", arrowSize)
    .attr("markerWidth", arrowSize)
    .attr("refX", arrowSize / 2)
    .attr("refY", arrowSize / 4)
    .attr("orient", "auto")
    .append("path")
    .attr("fill", selectedColor)
    .attr("d", `M0,0 v${arrowSize / 2} l${(arrowSize * 4) / 5},-${arrowSize / 4} Z`);
  // 绘制前设置动态 style，设置 selected 时候的状态
  appendStyle('link-style', `.arrowLine path.selected{stroke: ${selectedColor}; marker-end:url(#arrow-selected);}`);
  // 开始绘制
  const linkSelection = g.append('g')
    .attr('clip-path', 'url(#clipView)')
    .attr("class", "arrowLine")
    .selectAll('path')
    .data(linkData)
    .join('path')
    .attr('d', d => {
      const sourceData = data.find(item => item.id === d.source);
      const targetData = data.find(item => item.id === d.target);
      if (!sourceData || !targetData) return "";
      const x1 = x(new Date(sourceData.date));
      const x2 = x(new Date(targetData.date));
      const y1 = y(String(sourceData.nodeId));
      const y2 = y(String(targetData.nodeId));

      const my1 = y1 + nodeSize / 2;
      const ly2 = y2 > y1 ? y2 - (nodeSize + arrowSize / 2) : y2 + (nodeSize + arrowSize / 2);

      return `M ${x1},${my1} L ${x2},${ly2}`;
    })
    .attr('pathLength', 90)
    .attr('stroke', color)
    .attr('stroke-width', DEFAULT_LINK_WIDTH)
    .attr('stroke', d => {
      const defaultColor = color;
      const nodes = g.select('.nodes');
      const sourceNode = nodes.select(`circle[d-id="${d.source}"]`);
      const targetNode = nodes.select(`circle[d-id="${d.target}"]`);
      if (!sourceNode || !targetNode) return defaultColor;
      const sourceData = data.find(item => item.id === d.source);
      const targetData = data.find(item => item.id === d.target);
      if (!sourceData || !targetData) return defaultColor;
      
      const sourceFill = sourceNode.attr('fill') || defaultColor;
      const targetFill = targetNode.attr('fill') || defaultColor;

      const x1 = x(new Date(sourceData.date));
      const x2 = x(new Date(targetData.date));
      const y1 = y(String(sourceData.nodeId));
      const y2 = y(String(targetData.nodeId));

      const my1 = y1 + nodeSize / 2;
      const ly2 = y2 > y1 ? y2 - (nodeSize + arrowSize / 2) : y2 + (nodeSize + arrowSize / 2);

      
      const gradientId = getGradientId([sourceFill, targetFill], {x1: x1, y1: my1, x2: x2, y2: ly2});
      return `url(#${gradientId})`;
    })
    .attr('marker-end', d => {
      const defaultMarker = 'url(#arrow)';
      const nodes = g.select('.nodes');
      const targetNode = nodes.select(`circle[d-id="${d.target}"]`);
      if (!targetNode) return defaultMarker;
      const fill = targetNode.attr('fill');
      if (!fill) return defaultMarker;
      
      const arrowId = getArrowMarkerId(fill);
      return `url(#${arrowId})`;
    });

  // 边点击事件
  const linkClickHandle = function (event, data) {
    const { isTrusted, altKey } = event;
    event.stopPropagation();
    if (!isTrusted) return;

    const current = d3.select(this);
    // 如果没有按下alt键，需要清除原有的选择
    if (!altKey) {
      d3.select('.arrowLine').selectAll('.selected').attr('class', '')
    }
    // 设置选择的连线
    current.attr('class', 'selected')

    if (onSelectedLinksChange) {
      const selectedDatas = [];
      d3.select('.arrowLine')
        .selectAll('.selected')
        .each(function (p, j) {
          selectedDatas.push(p);
        });
      onSelectedLinksChange(data, selectedDatas);
    }
  }

  // 绑定边点击事件
  linkSelection.on('click', linkClickHandle);
}

export default drawLink;