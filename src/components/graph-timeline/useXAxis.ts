import { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import { useSafeState } from 'ahooks';
import { GraphTimeService } from './service';

export default () => {
  const { wrapper, size, xScale } = useContext(GraphTimeService);

  const [xAxisTop, setXAxisTop] = useSafeState<d3.Selection<SVGGElement, any, any, any>>();
  const [xAxisBottom, setXAxisBottom] = useSafeState<d3.Selection<SVGGElement, any, any, any>>();

  useEffect(() => {
    if (!wrapper || !size) return;
    // top
    let xAxisTop: any = wrapper.select('svg').selectAll('.xAxisTop').data([null]);
    const xAxisTopEnter: any = xAxisTop.enter().append('g').attr('class', 'axis xAxisTop');

    xAxisTop = xAxisTop.merge(xAxisTopEnter);

    setXAxisTop(xAxisTop);

    // bottom
    let xAxisBottom: any = wrapper.select('svg').selectAll('.xAxisBottom').data([null]);

    const xAxisBottomEnter: any = xAxisBottom.enter().append('g').attr('class', 'axis xAxisBottom');

    xAxisBottom = xAxisBottom.merge(xAxisBottomEnter);
    xAxisBottom.attr('transform', `translate(0, ${size.height})`);

    setXAxisBottom(xAxisBottom);
  }, [wrapper, size]);

  useEffect(() => {
    if (!xAxisTop || !xScale) return;
    xAxisTop.call(d3.axisTop(xScale));
  }, [xAxisTop, xScale]);

  useEffect(() => {
    if (!xAxisBottom || !xScale) return;
    xAxisBottom.call(d3.axisBottom(xScale));
  }, [xAxisBottom, xScale]);

  return {
    xAxisTop,
    xAxisBottom,
  };
};
