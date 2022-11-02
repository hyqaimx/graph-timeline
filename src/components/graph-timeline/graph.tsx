import React, { useContext } from 'react';
import { zoom } from 'd3-zoom';
import { useUpdateEffect } from 'ahooks';
import useXAxis from '../../hooks/useXAxis';
import useYAxis from '../../hooks/useYAxis';
import useChart from '../../hooks/useChart';
import GraphContext from '../../context';

export default () => {
  const { wrapper, size, setTransform } = useContext(GraphContext);
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
  useUpdateEffect(() => {
    if (!wrapper || !size) return;

    const zoomed: any = zoom()
      .on('start', () => {
        //console.log('start');
      })
      .on('zoom', (event) => {
        setTransform?.(event.transform);
      })
      //   .translateExtent([
      //     [-size.width / 2, 0],
      //     [size?.width * 1.5, size.height],
      //   ])
      .on('end', () => {
        //console.log('end');
      });

    wrapper.select('svg').call(zoomed);
  }, [wrapper, size]);
  return <svg></svg>;
};
