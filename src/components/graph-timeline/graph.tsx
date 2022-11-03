import React, { useContext, useMemo } from 'react';
import { zoom } from 'd3-zoom';
import { useSafeState, useUpdateEffect } from 'ahooks';
import useXAxis from '../../hooks/useXAxis';
import useYAxis from '../../hooks/useYAxis';
import useChart from '../../hooks/useChart';
import GraphContext from '../../context';
import { extent } from 'd3-array';
import { formatTime } from '../../utils';
import { INode } from '../../types';

export default () => {
  const {
    wrapper,
    size,
    setTransform,
    edges = [],
    nodes = [],
    yAxisStyle: { width: yWidth },
  } = useContext(GraphContext);
  const { xScale } = useXAxis();
  const { yScale } = useYAxis();
  const { chart } = useChart({
    xScale,
    yScale,
  });

  useUpdateEffect(() => {
    if (!wrapper || !size) return;
    // 更新画布大小
    wrapper
      .selectAll('svg')
      .data([size])
      .attr('width', (d) => d.width)
      .attr('height', (d) => d.height);
  }, [wrapper, size]);

  /**
   * 监听时间轴的缩放
   */
  const edgesExtent = useMemo(() => {
    if (!edges?.length) return;
    const timeStamps = new Set(edges.map((edge) => edge.properties.createdTime));
    const timeArray = [...timeStamps].sort();
    let minGap = Number.MAX_SAFE_INTEGER;
    let ans = 0;
    for (let i = 1; i < timeArray.length; i++) {
      const diff = Math.abs(Number(timeArray[i]) - Number(timeArray[i - 1]));
      minGap = minGap > diff ? diff : minGap;
      if (minGap === diff) {
        ans = i;
      }
    }
    const maxGap = Number(timeArray[timeArray.length - 1]) - Number(timeArray[0]);
    return {
      maxScale: maxGap / minGap,
    };
  }, [edges]);

  const [minScale, setMinScale] = useSafeState();

  useUpdateEffect(() => {
    if (!wrapper || !size || !edgesExtent || !xScale) return;
    console.log(edgesExtent.maxScale);
    const zoomed: any = zoom()
      .on('start', () => {
        //console.log('start');
      })
      .on('zoom', (event) => {
        setTransform?.(event.transform);
      })
      .scaleExtent([0.1, edgesExtent.maxScale * 0.6])
      .translateExtent([
        [-size.width / 2, 0],
        [size?.width * 1.5, size.height],
      ])
      .on('end', () => {
        //console.log('end');
      });

    wrapper.select('svg').call(zoomed);
  }, [wrapper, size]);
  return <svg></svg>;
};
