import { useCallback, useContext, useEffect } from 'react';
import * as d3 from 'd3';
import { useSafeState } from 'ahooks';
import { GraphTimeService } from './service';
import { compileColor, getTime } from '../../utils';
import { DEFAULT_EDGE_TYPE_STYLE, DEFAULT_NODE_TYPE_STYLE } from '../../common/constants';
import { isString } from 'lodash';
import type { IEdge, THeatMapItem } from '../../types';
import { INode } from '../../types';

export interface IProps {
  xScale: any;
  yScale: any;
}

export default () => {
  const {
    wrapper,
    minAndMax,
    edges,
    insightEdges,
    nodesMap,
    size,
    xScale,
    yScale,
    getCurrNodeConfig,
    getCurrEdgeConfig,
    isHeatMap,
  } = useContext(GraphTimeService);

  const [chart, setChart] = useSafeState<d3.Selection<d3.BaseType, null, d3.BaseType, unknown>>();

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
    (color: string, arrowSize: number = DEFAULT_EDGE_TYPE_STYLE['arrowRadius'] as number) => {
      if (!wrapper) return;
      const arrowId = compileColor(color);
      const defs = wrapper.select('defs.__arrow');

      if (defs.select(`#${arrowId}`).size()) return arrowId;

      defs
        .insert('marker')
        .attr('id', arrowId)
        // 设置以后箭头粗细不随连接线粗细变化
        .attr('markerUnits', 'userSpaceOnUse')
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

  const nodeImgIdSet: Set<string> = new Set();
  const insertNodeImg = useCallback(
    (radius: number, url: string, groupName: string, sourceOrTarget: string) => {
      const imgId = `icon-${groupName}-${sourceOrTarget}`;
      //创建图片
      const defs = wrapper?.select('defs.__icon');
      if (!defs) return null;
      if (nodeImgIdSet.has(imgId)) return imgId;
      nodeImgIdSet.add(imgId);
      defs
        .append('pattern')
        .attr('id', imgId)
        .attr('height', 1)
        .attr('width', 1)
        .append('image')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', radius * 2)
        .attr('height', radius * 2)
        .attr('xlink:href', url);
      return imgId;
    },
    [wrapper],
  );

  const renderHeatMap = () => {
    if (!chart || !xScale || !yScale || !minAndMax || !edges) return;
    chart.selectAll('.__circle').remove();
    chart.selectAll('.__line').remove();

    // 当前事件列表数据映射到时间块内的数量统计列表
    const currentTicks = xScale.ticks();
    const tickTimeGap = currentTicks[1].getTime() - currentTicks[0].getTime();
    const [minTime, maxTime] = minAndMax;
    if (!minTime || !maxTime) return;
    const totalTimeGap = maxTime - minTime;
    const tickCount = Math.floor(totalTimeGap / tickTimeGap);

    const nodeBlockMap = new Map();
    for (const edge of edges) {
      const timeStamp = getTime(edge.time);
      const i = Math.floor((timeStamp - minTime) / tickTimeGap);
      if (edge.source) {
        const node = edge.source;
        const arr = nodeBlockMap.get(node);
        if (arr) {
          arr[i]++;
        } else {
          const temp = new Array(tickCount).fill(0);
          temp[i]++;
          nodeBlockMap.set(node, temp);
        }
      }
      if (edge.target) {
        const node = edge.target;
        const arr = nodeBlockMap.get(node);
        if (arr) {
          arr[i]++;
        } else {
          const temp = new Array(tickCount).fill(0);
          temp[i]++;
          nodeBlockMap.set(node, temp);
        }
      }
    }
    const heatmap: THeatMapItem[] = [];
    nodeBlockMap.forEach((block, nodeId) => {
      for (let i = 0; i < tickCount; i++) {
        const count = block[i];
        if (count <= 0) continue;
        heatmap.push({
          nodeId,
          index: i,
          count: block[i],
        });
      }
    });
    const maxCount = d3.max(heatmap, (d) => d.count) || 1;
    const opacityScale = d3.scaleLinear([0, maxCount], [0, 1]);

    const leftX = xScale(currentTicks[0].getTime());
    const rightX = xScale(currentTicks[currentTicks.length - 1].getTime());

    const renderHeatMap = heatmap.filter((item) => {
      const x = xScale(minTime + item.index * tickTimeGap);
      const y = yScale(item.nodeId);
      return y && x >= leftX && x <= rightX;
    });

    const cellWidth = xScale(currentTicks[1]) - xScale(currentTicks[0]),
      cellHeight = 14;
    const heatMapChart = chart.selectAll('.__heatmap').data(renderHeatMap);
    const heatMapChartEnter: any = heatMapChart.enter().append('rect').attr('class', '__heatmap');

    heatMapChart
      .merge(heatMapChartEnter)
      .attr('x', (item) => {
        const x = xScale(minTime + item.index * tickTimeGap);
        return x;
      })
      .attr('y', (item) => {
        return (yScale(item.nodeId) as number) - cellHeight / 2;
      })
      .attr('width', cellWidth)
      .attr('height', cellHeight)
      .attr('fill', (d) => getCurrNodeConfig?.('color', nodesMap?.[d.nodeId]) || null)
      .attr('fill-opacity', (d) => opacityScale(d.count));

    heatMapChart.exit().remove();
  };

  const renderTimelineStart = (insightEdges: IEdge[]) => {
    if (!chart || !size || !xScale || !yScale) return;
    // start 节点
    const start = chart.selectAll('.__circle.__start').data(insightEdges);
    const startEnter: any = start.enter().append('circle').attr('class', '__circle __start');

    start
      .merge(startEnter)
      // .attr('name', (edge:IEdge) => {
      //   const reverse = getCurrEdgeConfig?.('reverse', edge);
      //   const node = nodesMap?.[reverse ? edge.target : edge.source];
      //   return node.label || "";
      // })
      .attr('r', (edge: IEdge) => {
        const reverse = getCurrEdgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.target : edge.source];
        return getCurrNodeConfig?.('radius', node) as number;
      })
      .attr('fill', (edge: IEdge) => {
        const reverse = getCurrEdgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.target : edge.source];
        const url = getCurrEdgeConfig?.('sourceUrl', edge) as string;
        if (url) {
          const radius = getCurrNodeConfig?.('radius', node) as number;
          const imgId = insertNodeImg(radius, url, edge.group || '', 'source');
          return imgId ? `url(#${imgId})` : null;
        } else {
          const stroke = getCurrEdgeConfig?.('color', edge, false);
          if (stroke) return stroke;
          return getCurrNodeConfig?.('color', node) || null;
        }
      })
      .attr('cx', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('cy', (edge: IEdge) => {
        return yScale(edge.source) || null;
      });
    start.exit().remove();
  };

  const renderTimelineEnd = (insightEdges: IEdge[]) => {
    if (!chart || !size || !xScale || !yScale) return;
    // end 节点（有 end 才绘制，如果没有就不绘制）
    const end = chart.selectAll('.__circle.__end').data(insightEdges);
    const endEnter: any = end.enter().append('circle').attr('class', '__circle __end');

    end
      .merge(endEnter)
      .attr('r', (edge: IEdge) => {
        const reverse = getCurrEdgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.source : edge.target];
        return (getCurrNodeConfig?.('radius', node) as number) || null;
      })
      .attr('fill', (edge: IEdge) => {
        const reverse = getCurrEdgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.source : edge.target];
        const url = getCurrEdgeConfig?.('targetUrl', edge) as string;
        if (url) {
          const radius = getCurrNodeConfig?.('radius', node) as number;
          const imgId = insertNodeImg(radius, url, edge.group || '', 'target');
          return imgId ? `url(#${imgId})` : null;
        } else {
          const stroke = getCurrEdgeConfig?.('color', edge, false);
          if (stroke) return stroke;
          return getCurrNodeConfig?.('color', node) || null;
        }
      })

      // .attr('r', (edge: IEdge) => {
      //   const node = nodesMap?.[edge.target];
      //   return getCurrNodeConfig?.('radius', node) || null;
      // })
      // .attr('fill', (edge: IEdge) => {
      //   const stroke = getCurrEdgeConfig?.('color', edge, false);
      //   if (stroke) return stroke;
      //   const reverse = getCurrEdgeConfig?.('reverse', edge);
      //   const node = nodesMap?.[reverse ? edge.source : edge.target];
      //   return getCurrNodeConfig?.('color', node) || null;
      // })
      .attr('cx', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('cy', (edge: IEdge) => {
        return yScale(edge.target) || null;
      });
    end.exit().remove();
  };

  const renderTimelineLine = (insightEdges: IEdge[]) => {
    if (!chart || !size || !xScale || !yScale) return;
    // 连线（有 start & end 的才画线&在范围内）
    const line = chart.selectAll('.__line').data(insightEdges);
    const lineEnter: any = line.enter().insert('line', 'circle').attr('class', '__line');

    line
      .merge(lineEnter)
      .attr('x1', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('y1', (edge: IEdge) => {
        return yScale(edge.source) || null;
      })
      .attr('x2', (edge: IEdge) => {
        return xScale(getTime(edge.time));
      })
      .attr('y2', (edge: IEdge) => {
        const node = nodesMap?.[edge.target];
        const endRadius = getCurrNodeConfig?.('radius', node) as number;
        const y2 = yScale(edge.target) || null;
        const y1 = yScale(edge.source) || null;
        // 判断箭头方向是否朝上，如果朝上，则偏移量为正
        const upFlag = y2 && y1 && y2 < y1;
        return y2 ? y2 + endRadius * 2 * (upFlag ? 1 : -1) : null;
      })
      .attr('stroke', (edge: IEdge) => {
        const stroke = getCurrEdgeConfig?.('color', edge) || null;
        if (stroke && stroke !== 'gradient') return stroke;

        // 默认配置：渐变
        const reverse = getCurrEdgeConfig?.('reverse', edge);
        const startNode = nodesMap?.[edge.source];
        const endNode = nodesMap?.[edge.target];

        const startColor = getCurrNodeConfig?.('color', startNode);
        const endColor = getCurrNodeConfig?.('color', endNode);

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
        const width = getCurrEdgeConfig?.('width', edge) || null;
        return width;
      })
      .attr('marker-end', (edge: IEdge) => {
        const stroke = getCurrEdgeConfig?.('color', edge, false);
        const reverse = getCurrEdgeConfig?.('reverse', edge);
        const node = nodesMap?.[reverse ? edge.source : edge.target];
        const color = getCurrNodeConfig?.('color', node) as string;
        const endRadius = getCurrEdgeConfig?.('arrowRadius', edge) as number;
        const arrowId = insertArrow(`${stroke || color}`, endRadius ? endRadius * 2 : undefined);
        return `url(#${arrowId})`;
      });

    line.exit().remove();
  };

  const renderTimeline = (insightEdges: IEdge[]) => {
    if (!chart || !size) return;

    chart.selectAll('.__heatmap').remove();

    renderTimelineStart(insightEdges);

    renderTimelineEnd(insightEdges);

    renderTimelineLine(insightEdges);
  };

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

    wrapper
      .select('svg')
      .selectAll('defs.__icon')
      .data([null])
      .enter()
      .append('defs')
      .attr('class', '__icon');
  }, [wrapper]);

  useEffect(() => {
    if (!chart || !size || !insightEdges) return;

    if (isHeatMap) {
      renderHeatMap();
      return;
    }
    renderTimeline(insightEdges);
  }, [chart, size, insightEdges, isHeatMap]);

  return chart;
};
