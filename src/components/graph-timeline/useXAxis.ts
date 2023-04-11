import { useEffect, useContext } from 'react';
import { axisTop, axisBottom } from 'd3-axis';
import { useSafeState } from 'ahooks';
import { GraphTimeService } from './service';
import type { Selection } from 'd3-selection';

export default () => {
  const {
    wrapper,
    size,
    xScale
  } = useContext(GraphTimeService);

  const [xAxisTop, setXAxisTop] = useSafeState<Selection<SVGGElement, any, any, any>>();
  const [xAxisBottom, setXAxisBottom] = useSafeState<Selection<SVGGElement, any, any, any>>();

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
    xAxisTop,
    xAxisBottom
  }

};
