import { useEffect, useMemo } from 'react';
import { extent } from 'd3-array';
import { scaleTime } from 'd3-scale';
import { axisTop } from 'd3-axis';
import { map } from 'lodash';
import dayjs from 'dayjs';
import { useSafeState } from 'ahooks';
import { TIME_FORMAT } from '../common/constants';
import type { Selection } from 'd3-selection';
import type { IEdge, IYAxisStyle } from '../types';

export interface IProps extends Partial<{
    wrapper: Selection<HTMLDivElement, any, any, any>
    edges: IEdge[]
    size: { width: number; height: number }
}> {
    yAxis: IYAxisStyle
}

export default ({
    wrapper,
    edges = [],
    size,
    yAxis: { width: yWidth }
}: IProps) => {
    const [xAxis, setXAxis] = useSafeState<Selection<SVGGElement, any, any, any>>()
    const xScale = useMemo(() => {
        if (!wrapper || !edges?.length || !size) return;

        
        const minAndMax = extent(edges, ({properties: { createdTime }}) => createdTime);
        return scaleTime()
                .domain(map(minAndMax, time => dayjs(time, TIME_FORMAT)))
                .range([0, size.width - yWidth])
                .nice()
    }, [wrapper, edges, size])

    useEffect(() => {
        if (!wrapper) return;

        const xAxis = wrapper.select('svg').selectAll('.xAxis')
            .data([yWidth])
            .enter()
            .append('g')
            .attr('class', 'axis xAxis')
            .attr("transform", yWidth => `translate(${yWidth}, 0)`)
          
        setXAxis(xAxis)
    }, [wrapper])


    useEffect(() => {
        if (!xAxis || !xScale || !size) return;
        
        xAxis.call(axisTop(xScale))
    }, [xAxis, size, xScale])


    return {
        xScale,
        xAxis
    }
}