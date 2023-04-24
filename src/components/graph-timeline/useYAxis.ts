import { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import { useSafeState } from 'ahooks';
import { axisLeft } from '../../utils';
import { GraphTimeService } from './service';
import type { INode } from '../../types';

export default () => {
  const {
    wrapper,
    insightNodes,
    activeNodeIds,
    nodesMap,
    size,
    yScale,
    yAxisStyle: { width: yWidth },
    getCurrNodeConfig,
    onNodeClick,
  } = useContext(GraphTimeService);
  const [yAxis, setYAxis] = useSafeState<d3.Selection<SVGGElement, any, any, any>>();

  // 生成 y 轴分组
  useEffect(() => {
    if (!wrapper || !size) return;

    let yAxis = wrapper.select('svg').selectAll('.yAxis').data([size]);
    const yAxisEnter = yAxis.enter().append('g').attr('class', 'axis yAxis') as any;

    yAxis = yAxis.merge(yAxisEnter).attr('transform', (size) => `translate(${size.width}, 0)`);

    setYAxis(yAxis as any);
  }, [wrapper, size]);

  // 根据 transform 更新 y 轴内容
  useEffect(() => {
    if (!yAxis || !yScale || !size || !insightNodes?.length || !nodesMap) return;

    yAxis.attr('transform', `translate(${size.width},0)`);

    yAxis.call(
      axisLeft(yScale)
        .tickFormat((id: string) => {
          const node = nodesMap[id];
          return node?.label || id;
        })
        .tickSize(size.width - yWidth)
        .tickPadding(3),
    );

    // 设置节点统一颜色
    yAxis
      .selectAll('.tick')
      .data(insightNodes)
      .attr('color', (node: INode) => {
        return getCurrNodeConfig?.('color', node) || null;
      })
      .select('rect')

      .attr('class', (node: INode) => {
        if (!activeNodeIds?.length) return null;
        const isActive = activeNodeIds?.includes(node.id);
        return isActive ? '__active' : null;
      });

    // 设置线的背景色
    yAxis
      .selectAll('.tick line')
      .data(insightNodes)
      .attr('stroke', (node: INode) => {
        const strokeColor = getCurrNodeConfig?.('strokeColor', node);
        if (strokeColor) return strokeColor;

        // 如果节点有配色会使用当前节点颜色
        return 'currentColor';
      })
      .attr('opacity', (node: INode) => {
        const opacity = getCurrNodeConfig?.('strokeOpacity', node) || 1;
        return opacity;
      })
      .attr('stroke-dasharray', (node: INode) => {
        const style = getCurrNodeConfig?.('strokeStyle', node);
        return style === 'solid' ? null : '5';
      });
  }, [yAxis, yScale, size, insightNodes, nodesMap]);

  // active 渲染 & 事件绑定
  useEffect(() => {
    if (!yAxis || !yScale || !insightNodes?.length) return;

    yAxis
      .selectAll('.tick')
      .data(insightNodes)
      .attr('class', (node: INode) => {
        const isActive = activeNodeIds?.includes(node.id);
        return isActive ? 'tick __active' : 'tick';
      })
      .select('text')
      .on('click', (_, node: INode) => {
        onNodeClick?.(node);
      });
  }, [yAxis, yScale, activeNodeIds, insightNodes]);

  return yAxis;
};
