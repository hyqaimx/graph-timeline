import * as d3 from 'd3';
import { ILinkItem, INodeItem } from '.';

const DrawLink = (
  g:d3.Selection<SVGElement, unknown, HTMLElement, undefined>,
  data: INodeItem[],
  linkData: ILinkItem[],
  x:d3.ScaleTime<number, number, never>,
  y:d3.ScalePoint<string>,
  arrowColor?: string,
  nodeStyle?: {
    color?: string;
    size?: number;
  }
) => {
  let color = arrowColor || 'red';
  let nodeSize = nodeStyle?.size || 5;
  const arrowSize = nodeSize > 15 ? nodeSize : 15
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
  // 开始绘制
  g.append('g')
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
      return `M ${x1},${y1} L ${x2},${y2 > y1 ? y2 - (nodeSize * 6 / 5) : y2 + (nodeSize * 6 / 5)}`;
    })
    .attr('pathLength', '90')
    .attr('stroke', color)
    .attr('marker-end', 'url(#arrow)');
}

export default DrawLink;