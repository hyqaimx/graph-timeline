import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useSafeState } from 'ahooks';
import { GraphTimeService } from './service';
import { compileColor, getTime } from '../../utils';
import { DEFAULT_NODE_TYPE_STYLE } from '../../common/constants';
import {  max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { isString } from 'lodash';
import type { BaseType, Selection } from 'd3-selection';
import type { IEdge, THeatMapItem } from '../../types';

export interface IProps {
  xScale: any;
  yScale: any;
}

export default ({ xScale, yScale }: IProps) => {
  const {
    wrapper,
    insightEdges,
    nodesMap,
    timeGapTotal,
    size,
    yAxisStyle: { width: yWidth },
    getCurrnodeConfig,
    getCurredgeConfig,
  } = useContext(GraphTimeService);

  const [chart, setChart] = useSafeState<Selection<BaseType, null, BaseType, unknown>>();

  //判断是热力泳道图还是点线 根据当前缩放等级下的时间段长度和整个数据的时间段长度比值决定
  // ratio > 0.5 ? console.log('热力泳道图') : console.log('点线图');
  const ratio = useMemo(() => {
    if (!xScale || !timeGapTotal) return;
    const left = xScale.invert(yWidth);
    const right = xScale.invert(size?.width);
    const timeGap = right - left;
    return timeGap / timeGapTotal;
  }, [xScale, size?.width, yWidth, timeGapTotal]);

  const insertGradient = useCallback(
    (startColor: string, endColor: string) => {
      if (!wrapper) return;
      const startCompileColor = compileColor(startColor);
      const endCompileColor = compileColor(endColor);

      const gradientId = [startCompileColor, endCompileColor].join('_');

      const defs = wrapper.select('defs.__gradient');

      if (defs.select(`#${gradientId}`).size()) return gradientId;

      defs
        .insert('linearGradient')
        .attr('id', gradientId)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .selectAll('stop')
        .data([
          { color: startColor, offset: '5%' },
          { color: endColor, offset: '95%' },
        ])
        .enter()
        .append('stop')
        .attr('offset', (d) => d.offset)
        .attr('stop-color', (d) => d.color);

      return gradientId;
    },
    [wrapper],
  );

  const insertArrow = useCallback(
    (color: string, arrowSize: number = DEFAULT_NODE_TYPE_STYLE['radius'] as number) => {
      if (!wrapper) return;
      const arrowId = compileColor(color);

      const defs = wrapper.select('defs.__arrow');

      if (defs.select(`#${arrowId}`).size()) return arrowId;

      defs
        .insert('marker')
        .attr('id', arrowId)
        .attr('markerHeight', arrowSize)
        .attr('markerWidth', arrowSize)
        .attr('refX', arrowSize / 2)
        .attr('refY', arrowSize / 4)
        .attr('orient', 'auto')
        .insert('path')
        .attr('fill', color)
        .attr('d', `M0,0 v${arrowSize / 2} l${(arrowSize * 4) / 5},-${arrowSize / 4} Z`);

      return arrowId;
    },
    [wrapper],
  );

  const renderHeatMap = (insightEdges: IEdge[]) => {
    if (!chart) return;
    chart.selectAll('.__circle.__start').remove();
    chart.selectAll('.__circle.__end').remove();
    chart.selectAll('.__line').remove();

    //当前事件列表数据映射到时间块内的数量统计列表
    const currentTicks = xScale.ticks();
    //时间块数量
    const timeBlockNum = (currentTicks.length - 1) * 2;
    const tickDiff = Math.floor(currentTicks[1] - currentTicks[0]) / 2;
    const heatMapData = new Map();
    for (const edge of insightEdges) {
      const timeStamp = edge.time;
      const i = Math.floor((Number(timeStamp) - Number(currentTicks[0])) / tickDiff);
      if (edge.source) {
        const node = edge.source;
        const arr = heatMapData.get(node);
        if (arr) {
          arr[i] = arr[i] + 1;
        } else {
          const temp = new Array(timeBlockNum).fill(0);
          temp[i] = temp[i] + 1;
          heatMapData.set(node, temp);
        }
      }
      if (edge.target) {
        const node = edge.target;
        const arr = heatMapData.get(node);
        if (arr) {
          arr[i] = arr[i] + 1;
        } else {
          const temp = new Array(timeBlockNum).fill(0);
          temp[i] = temp[i] + 1;
          heatMapData.set(node, temp);
        }
      }
    }
    const ans: THeatMapItem[] = [];
    heatMapData.forEach((value, key) => {
      for (let i = 0; i < timeBlockNum; i++) {
        ans.push({
          node: key,
          count: value[i],
          time: i,
        });
      }
    });
    // const colorScale = scaleLinear([0, max(ans, (d) => d.count) || 1], ['#0571b0', '#ca0020']);
    const opacityScale = scaleLinear([0, max(ans, (d) => d.count) || 1], [0.1, 1]);

    const cellWidth = xScale(currentTicks[1]) - xScale(currentTicks[0]),
      cellHeight = 14;
    const heatMapChart = chart
      .selectAll('.__heatmap')
      .data(ans.filter((item) => item.count > -1));
    const heatMapChartEnter: any = heatMapChart
      .enter()
      .append('rect')
      .attr('class', '__heatmap');

    heatMapChart
      .merge(heatMapChartEnter)
      .attr('x', (item) => {
        return xScale(Number(currentTicks[0]) + item.time * tickDiff);
      })
      .attr('y', (item) => {
        return yScale(item.node) - cellHeight / 2;
      })
      .attr('width', cellWidth)
      .attr('height', cellHeight)
      // .attr("fill", d => colorScale(d.count));
      .attr('fill', (d) => getCurrnodeConfig?.('color', nodesMap?.[d.node]) || null)
      .attr('fill-opacity', (d) => opacityScale(d.count));
    heatMapChart.exit().remove();
  }

  const renderTimelineStart = (insightEdges: IEdge[]) => {
    if (!chart || !size) return;
    // start 节点
    const start = chart
      .selectAll('.__circle.__start')
      .data(insightEdges);
    const startEnter: any = start.enter().append('circle').attr('class', '__circle __start');

    start
      .merge(startEnter)
      .attr('r', (edge: IEdge) => {
        const node = nodesMap?.[edge.source];
        return getCurrnodeConfig?.('radius', node) || null;
      })
      .attr('fill', (edge: IEdge) => {
        const reverse = getCurredgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.target : edge.source];
        return getCurrnodeConfig?.('color', node) || null;
      })
      .attr('cx', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('cy', (edge: IEdge) => {
        return yScale(edge.source);
      });
    start.exit().remove();
  }

  const renderTimelineEnd = (insightEdges: IEdge[]) => {
    if (!chart || !size) return;
    // end 节点（有 end 才绘制，如果没有就不绘制）
    const end = chart
      .selectAll('.__circle.__end')
      .data(insightEdges);
    const endEnter: any = end.enter().append('circle').attr('class', '__circle __end');

    end
      .merge(endEnter)
      .attr('r', (edge: IEdge) => {
        const node = nodesMap?.[edge.target];
        return getCurrnodeConfig?.('radius', node) || null;
      })
      .attr('fill', (edge: IEdge) => {
        const reverse = getCurredgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.source : edge.target];
        return getCurrnodeConfig?.('color', node) || null;
      })
      .attr('cx', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('cy', (edge: IEdge) => {
        return yScale(edge.target);
      });
    end.exit().remove();
  }

  const renderTimelineLine = (insightEdges: IEdge[]) => {
    if (!chart || !size) return;
    // 连线（有 start & end 的才画线&在范围内）
    const line = chart
      .selectAll('.__line')
      .data(insightEdges);
    const lineEnter: any = line.enter().append('line').attr('class', '__line');

    line
      .merge(lineEnter)
      .attr('x1', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('y1', (edge: IEdge) => {
        return yScale(edge.source);
      })
      .attr('x2', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('y2', (edge: IEdge) => {
        const node = nodesMap?.[edge.target];
        const endRadius = getCurrnodeConfig?.(
          'radius',
          node,
        ) as number;
        return yScale(edge.target) - endRadius * 2;
      })
      .attr('stroke', (edge: IEdge) => {
        const stroke = getCurredgeConfig?.('color', edge) || null;
        if (stroke && stroke !== 'gradient') return stroke;

        // 默认配置：渐变
        const reverse = getCurredgeConfig?.('reverse', edge);
        const startNode = nodesMap?.[edge.source];
        const endNode = nodesMap?.[edge.target];

        const startColor = getCurrnodeConfig?.('color', startNode);
        const endColor = getCurrnodeConfig?.('color', endNode);

        // 其中一个不存在，就使用某个定点的配色;
        if (!isString(startColor) || !isString(endColor)) return startColor || endColor || null;
        // 如果起始配色相同，直接使用，不再设置渐变配置；
        if (startColor === endColor) return startColor;

        const gradientId = insertGradient(
          reverse ? endColor : startColor,
          reverse ? startColor : endColor,
        );

        return `url(#${gradientId})`;
      })
      .attr('stroke-width', (edge: IEdge) => {
        const width = getCurredgeConfig?.('width', edge) || null;
        return width;
      })
      .attr('marker-end', (edge: IEdge) => {
        const reverse = getCurredgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.source : edge.target];
        const color = getCurrnodeConfig?.('color', node) as string;
        const endRadius = getCurrnodeConfig?.(
          'radius',
          node,
        ) as number;

        const arrowId = insertArrow(color, endRadius ? endRadius * 2 : undefined);
        return `url(#${arrowId})`;
      });

    line.exit().remove();
  }

  const renderTimeline = (insightEdges: IEdge[]) => {
    if (!chart || !size) return;

    chart.selectAll('.__heatmap').remove();

    renderTimelineStart(insightEdges);

    renderTimelineEnd(insightEdges);

    renderTimelineLine(insightEdges);
  }

  useEffect(() => {
    if (!wrapper) return;
    // init chart Element
    let chart = wrapper.select('svg').selectAll('g.__chart').data([null]);
    const chartEnter: any = chart.enter().append('g').attr('class', '__chart');
    chart = chart.merge(chartEnter);
    setChart(chart);

    // init gradient defs
    wrapper
      .select('svg')
      .selectAll('defs.__gradient')
      .data([null])
      .enter()
      .append('defs')
      .attr('class', '__gradient');

    // init arrow marker defs
    wrapper
      .select('svg')
      .selectAll('defs.__arrow')
      .data([null])
      .enter()
      .append('defs')
      .attr('class', '__arrow');
  }, [wrapper]);

  useEffect(() => {
    if (!chart || !size || !insightEdges) return;

    if (ratio && ratio > 0.5) {
      renderHeatMap(insightEdges);
      return;
    }
    renderTimeline(insightEdges);
  }, [chart, size, insightEdges]);

  return chart;
};
