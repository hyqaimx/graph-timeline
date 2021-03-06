import * as d3 from 'd3';
import { ILinkItem, INodeItem } from '.';

const DrawLink = (
  g:d3.Selection<SVGElement, unknown, HTMLElement, undefined>,
  data: INodeItem[],
  linkData: ILinkItem[],
  x:d3.ScaleTime<number, number, never>,
  y:d3.ScalePoint<string>,
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
  let color = '#F56565';
  let selectedColor = '#148EF4';
  if(linkStyle) {
    if(linkStyle.color) {
      color = linkStyle.color;
    }
    if(linkStyle.selectedColor) {
      selectedColor = linkStyle.selectedColor;
    }
  }
  let nodeSize = nodeStyle?.size || 5;
  const arrowSize = nodeSize > 10 ? nodeSize : 10
  // 预先定义箭头图标
  g.append("defs")
  .append("marker")
    .attr("id", "arrow")
    .attr("markerHeight", arrowSize)
    .attr("markerWidth", arrowSize)
    .attr("refX", arrowSize / 2)
    .attr("refY", arrowSize / 4)
    .attr("orient", "auto")
  .append("path")
    .attr("fill", color)
    .attr("d", `M0,0 v${arrowSize / 2} l${(arrowSize * 4) / 5 },-${arrowSize / 4} Z`);
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
    .attr("d", `M0,0 v${arrowSize / 2} l${(arrowSize * 4) / 5 },-${arrowSize / 4} Z`);
  // 开始绘制
  const linkSelection = g.append('g')
    .attr('clip-path', 'url(#clipView)')
    .attr("class", "arrowLine")
    .selectAll('path')
    .data(linkData)
    .join('path')
    .attr('d', d => {
      const sourceData = data.filter(item => item.id === d.source)[0];
      const targetData = data.filter(item => item.id === d.target)[0];
      if(!sourceData || !targetData) return "";
      const x1 = x(new Date(sourceData.date));
      const x2 = x(new Date(targetData.date));
      const y1 = y(sourceData.name);
      const y2 = y(targetData.name);
      return `M ${x1},${y1 + nodeSize / 2} L ${x2},${y2 > y1 ? y2 - (nodeSize + arrowSize / 2) : y2 + (nodeSize + arrowSize / 2)}`;
    })
    .attr('pathLength', '90')
    .attr('stroke', color)
    .attr('stroke-width', 2)
    .attr('marker-end', 'url(#arrow)');

  // 边点击事件
  const linkClickHandle = function(event, data) {
    const { isTrusted, altKey } = event;
    event.stopPropagation();

    if(isTrusted) {
      const lines = d3.select('.arrowLine').selectAll('path');
      const current = d3.select(this);
      // 如果没有按下alt键，需要清除原有的选择
      if(!altKey) {
        lines.each(function (){
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
      
      if(onSelectedLinksChange) {
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

export default DrawLink;