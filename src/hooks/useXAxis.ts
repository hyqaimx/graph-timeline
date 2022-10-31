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
import { formatTime } from '../utils';

export default () => {
    const { wrapper, edges, size, yAxisStyle: { width: yWidth } } = useContext(GraphContext);
    
    const [xAxis, setXAxis] = useSafeState<Selection<SVGGElement, any, any, any>>();

    const xScale = useMemo(() => {
        if (!wrapper || !edges?.length || !size) return;

        const minAndMax = extent(edges, ({properties: { createdTime }}) => createdTime);
        return scaleTime()
            .domain(map(minAndMax, time => dayjs(time, TIME_FORMAT)))
            .range([0, size.width - yWidth])
            .nice()
    }, [wrapper, edges, size]);

    useEffect(() => {
        if (!wrapper) return;

        let xAxis = wrapper.select('svg').selectAll('.xAxis').data([yWidth]);
        const xAxisEnter = xAxis.enter().append('g').attr('class', 'axis xAxis');

        xAxis = xAxis.merge(xAxisEnter as any)
            .attr("transform", yWidth => `translate(${yWidth}, 0)`)
          
        setXAxis(xAxis as any)
    }, [wrapper])

    useEffect(() => {
        if (!xAxis || !xScale) return;
        
        xAxis.call(axisTop(xScale))
    }, [xAxis, xScale])

    return {
        xScale,
        xAxis
    }
}