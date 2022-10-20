import React, { useCallback, useEffect, useMemo } from 'react';
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
    svg: Selection<SVGSVGElement, any, any, any>
    edges: IEdge[]
    size: { width: number; height: number }
}> {
    yAxis: IYAxisStyle
}

export default ({
    svg,
    edges = [],
    size,
    yAxis: { width: yWidth }
}: IProps) => {
    const [xAxis, setXAxis] = useSafeState<Selection<SVGGElement, any, any, any>>()
    const xScale = useMemo(() => {
        if (!svg || !edges?.length || !size) return;

        const minAndMax = extent(edges, ({properties: { createdTime }}) => createdTime);
        return scaleTime()
                .domain(map(minAndMax, time => dayjs(time, TIME_FORMAT)))
                .range([0, size.width])
                .nice()
    }, [svg, edges, size])

    // render x 轴
    useEffect(() => {
        if (!xScale || !svg) return;

        const xAxis = svg.append('g')
            .attr('class', 'axis xAxis')
            .attr("transform", `translate(${yWidth}, 0)`)
            
        xAxis.call(axisTop(xScale))

        setXAxis(xAxis)
    }, [svg, xScale])


    return {
        xScale,
        xAxis
    }
}