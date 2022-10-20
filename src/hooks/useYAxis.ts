import React, { useCallback, useEffect, useMemo } from 'react';
import { scalePoint } from 'd3-scale';
import { axisLeft } from 'd3-axis';
import { map } from 'lodash';
import type { Selection } from 'd3-selection';
import type { INode, IYAxisStyle } from '../types';

export interface IProps extends Partial<{
    svg: Selection<SVGSVGElement, any, any, any>
    nodes: INode[]
    size: { width: number; height: number }
}> {
    yAxis: IYAxisStyle
}

export default ({
    svg,
    nodes = [],
    size,
    yAxis: { width: yWidth }
}: IProps) => {
    const yScale = useMemo(() => {
        if (!svg || !nodes?.length || !size) return;

        const ids = map(nodes, ({ id }) => id);

        return scalePoint()
                .domain(ids)
                .range([0, size.height])
    }, [svg, nodes, size])

    // render x 轴
    useEffect(() => {
        if (!yScale || !svg || !size) return;

        const yAxis = svg.append('g')
            .attr('class', 'axis yAxis')
            .attr("transform", `translate(${size.width}, 40)`)
            
        yAxis.call(axisLeft(yScale).tickSize(size.width - yWidth).tickPadding(3))

        // 删除 y 轴竖线
        yAxis.selectAll('.domain').remove()
            
    }, [svg, yScale, size])

    
    return {
        yScale
    }
}