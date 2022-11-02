import { useEffect, useMemo, useContext } from 'react';
import { extent } from 'd3-array';
import { scaleTime } from 'd3-scale';
import { axisTop, axisBottom } from 'd3-axis';
import { map } from 'lodash';
import dayjs from 'dayjs';
import { useSafeState } from 'ahooks';
import { TIME_FORMAT } from '../common/constants';
import GraphContext from '../context';
import type { BaseType, Selection } from 'd3-selection';

export default () => {
  const {
    wrapper,
    edges,
    size,
    yAxisStyle: { width: yWidth },
    transform,
  } = useContext(GraphContext);

  const [xAxisTop, setXAxisTop] = useSafeState<Selection<SVGGElement, any, any, any>>();
  const [xAxisBottom, setXAxisBottom] = useSafeState<Selection<SVGGElement, any, any, any>>();

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
    if (!wrapper || !size) return;
    // top
    let xAxisTop: any = wrapper.select('svg').selectAll('.xAxisTop').data([null]);
    const xAxisTopEnter: any = xAxisTop.enter().append('g').attr('class', 'axis xAxisTop');

    xAxisTop = xAxisTop.merge(xAxisTopEnter);

    setXAxisTop(xAxisTop);

    // bottom
    let xAxisBottom: any = wrapper.select('svg').selectAll('.xAxisBottom').data([null]);
    const xAxisBottomEnter: any = xAxisBottom.enter().append('g').attr('class', 'axis xAxisBottom').attr('transform', `translate(0, ${size.height})`);

    xAxisBottom = xAxisBottom.merge(xAxisBottomEnter);

    setXAxisBottom(xAxisBottom);
  }, [wrapper, size]);

  useEffect(() => {
    if (!xAxisTop || !xScale) return;
    xAxisTop.call(axisTop(xScale));
  }, [xAxisTop, xScale]);

  useEffect(() => {
    if (!xAxisBottom || !xScale) return;
    xAxisBottom.call(axisBottom(xScale));
  }, [xAxisBottom, xScale]);

  return {
    xScale,
    xAxisTop,
  };
};
