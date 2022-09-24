import * as d3 from "d3";
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ILinkItem, INodeItem } from "@/typings/custom-data";

export const DrawTooltip = (
  g: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
  links: ILinkItem[],
  nodes: INodeItem[],
  show = true,
  format?: (data: INodeItem, links: ILinkItem[]) => ReactNode
) => {
  const mainDiv = document.getElementById('graph-timeline-main');
  if (!mainDiv) throw new Error('找不到id为graph-timeline-main的容器');
  let tooltip: HTMLElement;
  const tooltipDiv = document.getElementById('timeline-tooltip');
  if (!tooltipDiv) {
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
  } else {
    tooltip = tooltipDiv;
  }

  const entered = (event: any, data: INodeItem) => {
    if (!show) return;
    const [x, y] = d3.pointer(event);
    const curLink = links.filter(item => item.source === data.id || item.target === data.id);

    const textData = [{ id: data.nodeId, name: `节点名称: ${data.nodeName}` }];
    if (curLink.length !== 0) {
      curLink.forEach(item => {
        const sourceData = nodes.filter(node => node.id === item.source)[0];
        const targetData = nodes.filter(node => node.id === item.target)[0];
        if (!sourceData || !targetData) return "";
        textData.push({ id: sourceData.nodeId, name: `起始节点: ${sourceData.nodeName}` });
        textData.push({ id: sourceData.nodeId, name: `目标节点: ${targetData.nodeName}` });
      })
    }

    // 使用div进行构建，更加灵活，可以实现用户自定义内容
    // 设置展示位置
    const textSpan = (
      <>
        {format ? format(data, curLink) : textData.map(item => (
          <div key={item.id + item.name}>{item.name}</div>
        ))}
      </>
    )
    ReactDOM.render(textSpan, tooltip, () => {
      const tooltipDom = ReactDOM.findDOMNode(tooltip) as Element;
      const height = tooltipDom.clientHeight;
      const width = tooltipDom.clientWidth;
      const containerWidth = mainDiv.clientWidth;
      const containerHeight = mainDiv.clientHeight;

      const mainScrollY = mainDiv.scrollTop;

      tooltip.style.left = (x + 20) + 'px';
      tooltip.style.top = (y - (height / 2) - mainScrollY) + 'px';
      if (y < 50) {
        tooltip.style.top = y + 'px';
      }
      if (containerWidth - x < width) {
        // 将悬浮框置于左侧
        tooltip.style.left = (x - width) + 'px';
      }
      if (y + height / 2 > containerHeight) {
        tooltip.style.top = (containerHeight - height - 20) + 'px'
      }
    });

    tooltip.style.visibility = 'visible';
  }

  const leaved = (event: any) => {
    tooltip.style.visibility = 'hidden';
  }

  d3.selectAll<SVGCircleElement, INodeItem>('.nodes circle')
    .on('pointerenter', entered)
    .on('pointerleave', leaved)
}