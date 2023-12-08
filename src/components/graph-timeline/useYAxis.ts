import { useEffect, useContext, useCallback } from 'react';
import * as d3 from 'd3';
import { useSafeState } from 'ahooks';
import { axisLeft } from '../../utils';
import { GraphTimeService } from './service';
import type { INode, INodeGroupIconStyle } from '../../types';

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

  const iconSet: Set<string> = new Set();
  const insertIcon = useCallback(
    (radius: number, iconValue: string, groupName: string, iconType: string) => {
      const iconId = `icon-${groupName}-${iconType}`;
      //创建图片
      const defs = wrapper?.select('defs.__icon');
      if (!defs) return null;
      if (iconSet.has(iconId)) return iconId;
      iconSet.add(iconId);

      if (iconType === 'img') {
        defs
          .append('pattern')
          .attr('id', iconId)
          .attr('height', 1)
          .attr('width', 1)
          .append('image')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', radius * 2)
          .attr('height', radius * 2)
          .attr('xlink:href', iconValue);

        return iconId;
      }
      return null;
    },
    [wrapper],
  );

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
        return (getCurrNodeConfig?.('color', node) as string) || null;
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

    // y轴图标半径
    const iconRadius = 9;

    yAxis
      .selectAll('.tick circle')
      .data(insightNodes)
      .attr('r', iconRadius)
      .attr('fill', (node: INode) => {
        const iconStyle = getCurrNodeConfig?.('iconStyle', node) || null;
        if (!iconStyle) return 'currentColor';

        const iconType = iconStyle.type as string;
        if (iconType !== 'img') return 'currentColor';

        const iconValue = iconStyle.value as string;
        const iconId = insertIcon(iconRadius, iconValue, node.group || '', iconType);
        return iconId ? `url(#${iconId})` : null;
      });

    // 过滤出iconType为text类型的数据
    const iconDataByTextAndIcon = insightNodes.filter((node: INode) => {
      const iconStyle = getCurrNodeConfig?.('iconStyle', node) || null;
      return iconStyle && (iconStyle.type === 'text' || iconStyle.type === 'icon');
    });
    // 渲染text和icon类型的图标
    yAxis
      .selectAll('._icon')
      .data(iconDataByTextAndIcon)
      .attr('class', (node: INode) => {
        const iconStyle = getCurrNodeConfig?.('iconStyle', node) as INodeGroupIconStyle;
        return `${iconStyle?.className || ''} _icon`;
      })
      .attr('fill', (node: INode) => {
        const iconStyle = getCurrNodeConfig?.('iconStyle', node) as INodeGroupIconStyle;
        return iconStyle ? (iconStyle.color as string) : null;
      })
      .attr('dy', '.4em')
      .attr('style', `font-size: ${iconRadius}px`)
      .attr('text-anchor', 'middle')
      .html((node: INode) => {
        const iconStyle = getCurrNodeConfig?.('iconStyle', node) || null;
        return iconStyle ? (iconStyle.value as string) : null;
      })
      .exit();
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
      .select('._label')
      .on('mousedown', (e, node: INode) => {
        onNodeClick?.(node, e);
      });
  }, [yAxis, yScale, activeNodeIds, insightNodes]);

  return yAxis;
};
