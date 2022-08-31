import * as d3 from "d3";
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ILinkItem, INodeItem } from "@/typings/custom-data";

export const DrawTooltip = (
  g: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
  links: ILinkItem[],
  nodes: INodeItem[],
  show = true,
  format?: (data:INodeItem, links: ILinkItem[]) => ReactNode 
) => {
  // const tooltip = g.append('g')
  //   .attr('class', 'tooltip')
  //   .style('pointer-events', 'none');
  const mainDiv = document.getElementById('graph-timeline-main');
  if(!mainDiv) throw new Error('找不到id为main的容器');
  let tooltip:HTMLElement;
  const tooltipDiv = document.getElementById('timeline-tooltip');
  if(!tooltipDiv) {
    tooltip = document.createElement('div');
    tooltip.id = 'timeline-tooltip';
    tooltip.style.visibility = 'hidden';
    tooltip.style.position = 'absolute';
    tooltip.style.top = '0px';
    tooltip.style.left = '0px';
    tooltip.style.background = 'white';
    tooltip.style.color = 'black';
    tooltip.style.padding = '10px';
    tooltip.style.boxShadow = '0 0 10px #DDD';
    tooltip.style.borderRadius = '2px';
    mainDiv.append(tooltip);
  }else {
    tooltip = tooltipDiv;
  }
  
  const entered = (event: any, data: INodeItem) => {
    if(!show) return;
    const [x, y] = d3.pointer(event);
    const curLink = links.filter(item => item.source === data.id || item.target === data.id);
    
    const textData = [`节点名称: ${data.name}`];
    if(curLink.length !== 0) {
      curLink.forEach(item => {
        const sourceData = nodes.filter(node => node.id === item.source)[0];
        const targetData = nodes.filter(node => node.id === item.target)[0];
        if(!sourceData || !targetData) return "";
        textData.push(`起始节点: ${sourceData.name}`);
        textData.push(`目标节点: ${targetData.name}`);
      })
    }
    // 使用div进行构建，更加灵活，可以实现用户自定义内容
    // 设置展示位置
    const textSpan = (
      <>
        {format? format(data, curLink) : textData.map(item => (
          <div key={item}>{item}</div>
        ))}
      </>
    )
    ReactDOM.render(textSpan, tooltip, () => {
      const tooltipDom = ReactDOM.findDOMNode(tooltip) as Element;
      const height = tooltipDom.clientHeight;
      const width = tooltipDom.clientWidth;
      const containerWidth = mainDiv.clientWidth;
      const containerHeight = mainDiv.clientHeight;
      tooltip.style.left = (x + 20) + 'px';
      tooltip.style.top = (y - (height / 2)) + 'px';
      if(y < 50) {
        tooltip.style.top = y + 'px';
      }
      if(containerWidth - x < width){
        // 将悬浮框置于左侧
        tooltip.style.left = (x - width) + 'px';
      }
      if(y + height / 2 > containerHeight) {
        tooltip.style.top = (containerHeight - height - 20) + 'px'
      }
    });
    
    tooltip.style.visibility = 'visible';

    // 内置的svg标签写法
    // tooltip.style('dispaly', null);
    // tooltip.attr('transform', `translate(${position[0]}, ${position[1]})`);
    // const path = tooltip.selectAll('path')
    //   .data([,])
    //   .join('path')
    //     .attr('fill', 'white')
    //     .attr('stroke', 'black');
    // const text = tooltip.selectAll('text')
    //   .data([,])
    //   .join('text')
    //   .call(text => text
    //       .selectAll('tspan')
    //       .data(textData)
    //       .join('tspan')
    //       .attr('x', 0)
    //       .attr('y', (_, i) => `${ (i - textData.length) * 1.2}em`)
    //       .attr('fill', 'black')
    //       .text(d => d)
    //     )
    // const textNode = text.node() as SVGTextElement;
    // const { x, y, width: w, height: h } = textNode.getBBox();
    // text.attr("transform", `translate(${-w / 2},0)`);
    // path.attr('d',`M${(-w/2) - 10},-12 v${- h - 10}h${w + 20}v${h + 10}h${-(w/2) - 7}l-3,5l-3,-5h${-(w/2) -7}`)
    // tooltip.style('display', '');
  }

  const leaved = (event: any) => {
    // tooltip.style('display', 'none');
    tooltip.style.visibility = 'hidden';
  }

  d3.selectAll<SVGCircleElement, INodeItem>('.nodes circle')
    .on('pointerenter', entered)
    .on('pointerleave', leaved)
}