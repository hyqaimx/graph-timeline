import { useContext, useEffect, useMemo } from 'react';
import { useSafeState, useUpdate, useUpdateEffect } from 'ahooks';
import { DEFAULT_TYPE_STYLE } from '../common/constants';
import type { Selection } from 'd3-selection';
import GraphContext from '../context';
import type { IEdge, INode } from '../types';
import { formatTime, getNodeById } from '../utils';
import { extent } from 'd3-array';

export interface IProps {
  xScale: any;
  yScale: any;
}

export default ({ xScale, yScale }: IProps) => {
  const {
    wrapper,
    edges = [],
    nodes = [],
    size,
    xAxisStyle,
    yAxisStyle: { width: yWidth },
    typeFromKey,
    nodeTypes,
    getCurrNodeStyle,
  } = useContext(GraphContext);

  const [chart, setChart] = useSafeState<Selection<SVGGElement, any, any, any>>();

  const nodesMap = useMemo(() => {
    const m: Record<string, INode> = {};
    nodes.forEach((node) => {
      m[node.id] = node;
    });
    return m;
  }, [nodes]);

  // init chart Element
  useEffect(() => {
    if (!wrapper) return;
    let chart = wrapper.select('svg').selectAll('.__chart').data([yWidth]);
    const chartEnter = chart.enter().append('g').attr('class', '__chart') as any;
    chart = chart.merge(chartEnter);
    // .attr('transform', (yWidth) => `translate(${yWidth}, 0)`);

    setChart(chart as any);
  }, [wrapper]);

  useEffect(() => {
    if (!chart || !size) return;
    // start 节点
    const start = chart
      .selectAll('.__circle.__start')
      .data(
        edges
          .filter((edge) => !!(edge.start && nodesMap[edge.start]))
          .filter(
            (edge) =>
              xScale(formatTime(edge.properties.createdTime)) >= yWidth &&
              xScale(formatTime(edge.properties.createdTime)) <= size.width,
          ),
      );
    const startEnter = start.enter().append('circle').attr('class', '__circle __start') as any;

    start
      .merge(startEnter)
      .attr('r', (edge: IEdge) => {
        const node = nodesMap?.[edge.start];
        return getCurrNodeStyle?.('radius', node) || null;
      })
      .attr('fill', (edge: IEdge) => {
        const node = nodesMap?.[edge.start];
        return getCurrNodeStyle?.('color', node) || null;
      })
      .attr('cx', (edge: IEdge) => {
        return xScale(formatTime(edge.properties.createdTime));
      })
      .attr('cy', (edge: IEdge) => {
        return yScale(edge.start);
      });
    start.exit().remove();

    // end 节点（有 end 才绘制，如果没有就不绘制）
    const end = chart
      .selectAll('.__circle.__end')
      .data(
        edges
          .filter((edge) => !!(edge.end && nodesMap[edge.end]))
          .filter(
            (edge) =>
              xScale(formatTime(edge.properties.createdTime)) >= yWidth &&
              xScale(formatTime(edge.properties.createdTime)) <= size.width,
          ),
      );
    const endEnter = end.enter().append('circle').attr('class', '__circle __end') as any;

    end
      .merge(endEnter)
      .attr('r', (edge: IEdge) => {
        const node = nodesMap?.[edge.end];
        return getCurrNodeStyle?.('radius', node) || null;
      })
      .attr('fill', (edge: IEdge) => {
        const node = nodesMap?.[edge.end];
        return getCurrNodeStyle?.('color', node) || null;
      })
      .attr('cx', (edge: IEdge) => {
        return xScale(formatTime(edge.properties.createdTime));
      })
      .attr('cy', (edge: IEdge) => {
        return yScale(edge.end);
      });
    end.exit().remove();

    // 连线（有 start & end 的才画线&在范围内）
    const line = chart
      .selectAll('.__line')
      .data(
        edges
          .filter(
            (edge) => !!(edge.end && edge.start && nodesMap[edge.start] && nodesMap[edge.end]),
          )
          .filter(
            (edge) =>
              xScale(formatTime(edge.properties.createdTime)) >= yWidth &&
              xScale(formatTime(edge.properties.createdTime)) <= size.width,
          ),
      );
    const lineEnter = line.enter().append('line').attr('class', '__line') as any;

    line
      .merge(lineEnter)
      .attr('x1', (edge: IEdge) => {
        return xScale(formatTime(edge.properties.createdTime));
      })
      .attr('y1', (edge: IEdge) => {
        return yScale(edge.start);
      })
      .attr('x2', (edge: IEdge) => {
        return xScale(formatTime(edge.properties.createdTime));
      })
      .attr('y2', (edge: IEdge) => {
        return yScale(edge.end);
      })
      .attr('style', `stroke:#8c8c8c;stroke-width:2`);
    line.exit().remove();
  }, [chart, size, xScale, yScale, edges, nodes]);

  return {
    chart,
  };
};
