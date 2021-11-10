import * as d3 from "d3";
import { ILinkItem, INodeItem } from ".";

export const DrawTooltip = (
  g: d3.Selection<SVGGElement, undefined, HTMLElement, any>,
  links: ILinkItem[],
) => {
  const tooltip = g.append('g')
    .attr('class', 'tooltip')
    .style('pointer-events', 'none');

  const entered = (event: any, data: INodeItem) => {
    const position = d3.pointer(event);
    const curLink = links.filter(item => item.source === data.id || item.target === data.id);
    const textData = [`节点名称: ${data.name}`];
    if(curLink.length !== 0) {
      curLink.forEach(item => {
        textData.push(`起始节点: ${String(item.source)}`);
        textData.push(`目标节点: ${String(item.target)}`);
      })
    }
    tooltip.style('dispaly', null);
    tooltip.attr('transform', `translate(${position[0]}, ${position[1]})`);
    const path = tooltip.selectAll('path')
      .data([,])
      .join('path')
        .attr('fill', 'white')
        .attr('stroke', 'black');
    const text = tooltip.selectAll('text')
      .data([,])
      .join('text')
      .call(text => text
          .selectAll('tspan')
          .data(textData)
          .join('tspan')
          .attr('x', 0)
          .attr('y', (_, i) => `${ (i - textData.length) * 1.2}em`)
          .attr('fill', 'black')
          .text(d => d)
        )
    const textNode = text.node() as SVGTextElement;
    const { x, y, width: w, height: h } = textNode.getBBox();
    text.attr("transform", `translate(${-w / 2},0)`);
    path.attr('d',`M${(-w/2) - 10},-12 v${- h - 10}h${w + 20}v${h + 10}h${-(w/2) - 7}l-3,5l-3,-5h${-(w/2) -7}`)
    tooltip.style('display', '');
  }

  const leaved = (event: any) => {
    tooltip.style('display', 'none');
  }

  d3.selectAll<SVGCircleElement, INodeItem>('.nodes circle')
    .on('pointerenter', entered)
    .on('pointerleave', leaved)
}