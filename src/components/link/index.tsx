import * as d3 from 'd3';
import { INodeItem, ILinkItem } from '@/typings/custom-data';
import { DEFAULT_LINE_WIDTH, DEFAULT_LINK_COLOR, DEFAULT_LINK_SELECTED_COLOR, DEFAULT_NODE_SIZE, MAX_ARROW_SIZE } from '@/constants';


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

  const addArrowMarker = (color: string) => {
    const arrowDefs = g.select('.arrow-markers-defs');
    const arrow = arrowDefs.select(`#arrow-${color}`);
    if (!arrow.empty()) return;

    const baseArrow = arrowDefs.select(`#arrow`);

    return baseArrow.clone(true).attr('id', `arrow-${color}`).select('path').attr('fill', `#${color}`);
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

  // TODO 预先定义渐变色

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
      const y1 = y(sourceData.name);
      const y2 = y(targetData.name);
      return `M ${x1},${y1 + nodeSize / 2} L ${x2},${y2 > y1 ? y2 - (nodeSize + arrowSize / 2) : y2 + (nodeSize + arrowSize / 2)}`;
    })
    // .attr('pathLength', '90')
    .attr('stroke', color)
    .attr('stroke-width', DEFAULT_LINE_WIDTH)
    .attr('marker-end', d => {
      const defaultMarker = 'url(#arrow)'
      const nodes = g.select('.nodes');
      const targetNode = nodes.select(`circle[d-id="${d.target}"]`);
      if (!targetNode) return defaultMarker;
      const fill = targetNode.attr('fill');
      if (!fill) return defaultMarker;
      
      const colorId = fill.replace(`#`, '');
      addArrowMarker(colorId);
      return `url(#arrow-${colorId})`;
    });

  // 边点击事件
  const linkClickHandle = function (event, data) {
    const { isTrusted, altKey } = event;
    event.stopPropagation();

    if (isTrusted) {
      const lines = d3.select('.arrowLine').selectAll('path');
      const current = d3.select(this);
      // 如果没有按下alt键，需要清除原有的选择
      if (!altKey) {
        lines.each(function () {
          d3.select(this)
            .attr('stroke', color)
            .attr('marker-end', 'url(#arrow)')
            .attr('class', '');
        })
      }
      // 设置选择的连线
      current
        .attr('stroke', selectedColor)
        .attr('class', 'selected')
        .attr('marker-end', 'url(#arrow-selected)');

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
  }

  // 绑定边点击事件
  linkSelection.on('click', linkClickHandle);
}

export default drawLink;