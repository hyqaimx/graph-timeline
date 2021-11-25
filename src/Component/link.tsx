import * as d3 from 'd3';
import { ILinkItem, INodeItem } from '.';

const DrawLink = (
  g:d3.Selection<SVGElement, unknown, HTMLElement, undefined>,
  data: INodeItem[],
  linkData: ILinkItem[],
  x:d3.ScaleTime<number, number, never>,
  y:d3.ScalePoint<string>,
  arrowColor?: string 
) => {
  let color = arrowColor || 'red';
  // 预先定义箭头图标
  g.append("defs")
  .append("marker")
    .attr("id", "arrow")
    .attr("markerHeight", 10)
    .attr("markerWidth", 10)
    .attr("refX", 5)
    .attr("refY", 2.5)
    .attr("orient", "auto")
  .append("path")
    .attr("fill", color)
    .attr("d", "M0,0 v5 l7,-2.5 Z");
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
      const y1 = y(sourceData.name) - 5;
      const y2 = y(targetData.name) + 5;
      return `M ${x1},${y1} L ${x2},${y2}`;
    })
    .attr('pathLength', '90')
    .attr('stroke', color)
    .attr('marker-end', 'url(#arrow)');
}

export default DrawLink;