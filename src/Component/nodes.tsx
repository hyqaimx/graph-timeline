import * as d3 from 'd3';
import { INodeItem } from '.';

const drawNodes = (
  g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>,
  data: INodeItem[],
  x:d3.ScaleTime<number, number, never>,
  y:d3.ScalePoint<string>,
  nodeStyle?: {
    color?: string;
    size?: number;
  }
) => {
  let color = 'red';
  let size = 4;
  if(nodeStyle) {
    if(nodeStyle.color) {
      color = nodeStyle.color;
    }
    if(nodeStyle.size) {
      size = nodeStyle.size;
    }
  }
  return g
    .attr("class", "nodes")
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(new Date(d.date)))
    .attr('cy', d => y(String(d.name)) || null)
    .attr('r', size)
    .attr('fill', color);
}

export default drawNodes;