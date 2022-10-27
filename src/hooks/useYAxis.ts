import React, { useCallback, useEffect, useMemo } from 'react';
import { scalePoint } from 'd3-scale';
import { axisLeft } from 'd3-axis';
import { map } from 'lodash';
import type { Selection } from 'd3-selection';
import type { IData, INode, IXAxisStyle, IYAxisStyle } from '../types';
import { DEFAULT_TYPE_STYLE, FROM_KEY } from '../common/constants';

export interface IProps extends Partial<{
    wrapper: Selection<HTMLDivElement, any, any, any>
    nodes: INode[]
    size: { width: number; height: number }
}>,  Pick<IData, 'nodeTypes' | 'typeFromKey'> {
    xAxis: IXAxisStyle
    yAxis: IYAxisStyle
}

export default ({
    wrapper,
    nodes = [],
    size,
    xAxis: {height: xHeight},
    yAxis: { width: yWidth },
    typeFromKey = FROM_KEY['type'],
    nodeTypes
}: IProps) => {
    const yScale = useMemo(() => {
        if (!wrapper || !nodes?.length || !size) return;

        const ids = map(nodes, ({ id }) => id);

        return scalePoint()
                .domain(ids)
                .range([0, size.height])
    }, [wrapper, nodes, size])

    // render x 轴
    useEffect(() => {
        if (!yScale || !wrapper || !size) return;

        const yAxis = wrapper.select('svg').selectAll('.yAxis')
            .data([size])
            .enter()
            .append('g')
            .attr('class', 'axis yAxis')
            .attr("transform", size => `translate(${size.width}, ${xHeight})`)
            
        yAxis.call(axisLeft(yScale).tickSize(size.width - yWidth).tickPadding(3))

        // 删除 y 轴竖线
        yAxis.selectAll('.domain').remove()

        // 设置线的背景色
        yAxis.selectAll('.tick line')
            .data(nodes)
            .attr('stroke', (node: INode) => {
                const typeKey = node?.[typeFromKey as keyof INode];
                if (!typeKey || !nodeTypes?.[typeKey as string]?.bgLineColor) return DEFAULT_TYPE_STYLE['bgLineColor'] as string;
                return nodeTypes[typeKey as string].bgLineColor as string;
            })
    }, [wrapper, yScale, size])

    
    return {
        yScale
    }
}