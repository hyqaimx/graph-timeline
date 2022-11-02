import { useEffect, useMemo, useContext } from 'react';
import { extent } from 'd3-array';
import { scaleTime } from 'd3-scale';
import { axisTop } from 'd3-axis';
import { map } from 'lodash';
import dayjs from 'dayjs';
import { useSafeState } from 'ahooks';
import { TIME_FORMAT } from '../common/constants';
import GraphContext from '../context';
import type { Selection } from 'd3-selection';

export default () => {
  const {
    wrapper,
    edges,
    size,
    yAxisStyle: { width: yWidth },
    transform,
  } = useContext(GraphContext);

  const [xAxis, setXAxis] = useSafeState<Selection<SVGGElement, any, any, any>>();

  const minAndMax = useMemo(() => {
    if (!edges?.length) return;
    return extent(edges, ({ properties: { createdTime } }) => createdTime)
  }, [edges])

  const xScale = useMemo(() => {
    if (!wrapper || !size || !minAndMax) return;

    const scale = scaleTime()
      .domain(map(minAndMax, (time) => dayjs(time, TIME_FORMAT)))
      .range([yWidth, size.width])
      .nice();
    return transform?.rescaleX(scale) || scale;
  }, [wrapper, minAndMax, size, transform]);

  useEffect(() => {
    if (!wrapper) return;

    let xAxis = wrapper.select('svg').selectAll('.xAxis').data([yWidth]);
    const xAxisEnter = xAxis.enter().append('g').attr('class', 'axis xAxis');

    xAxis = xAxis.merge(xAxisEnter as any);
    // .attr('transform', (yWidth) => `translate(${yWidth}, 0)`);

    setXAxis(xAxis as any);
  }, [wrapper]);

  useEffect(() => {
    if (!xAxis || !xScale) return;
    xAxis.call(axisTop(xScale));
    // 取消 x 轴下方横线的显示
    xAxis.selectAll('.domain').remove();
  }, [xAxis, xScale]);

  return {
    xScale,
    xAxis,
  };
};
