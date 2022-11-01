import React, { useContext } from 'react';
import { axisTop } from 'd3-axis';
import { zoom } from 'd3-zoom';
import { useUpdateEffect } from 'ahooks';
import useXAxis from '../../hooks/useXAxis';
import useYAxis from '../../hooks/useYAxis';
import useChart from '../../hooks/useChart';
import GraphContext from '../../context';

export default () => {
  const { wrapper, size, setTransform } = useContext(GraphContext);
  const { xScale, xAxis } = useXAxis();
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

  useUpdateEffect(() => {
    if (!xScale || !yScale || !xAxis || !wrapper || !size) return;

    const zoomed: any = zoom()
      .on('start', () => {
        console.log('start');
      })
      .on('zoom', (event) => {
        setTransform?.(event.transform);
      })
      .on('end', () => {
        console.log('end');
      });

    wrapper.select('svg').call(zoomed);
  }, [xScale, yScale, xAxis, wrapper, size]);
  return <svg></svg>;
};
