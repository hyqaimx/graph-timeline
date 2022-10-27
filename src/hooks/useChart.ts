import React, { useCallback, useEffect, useMemo } from 'react';
import { axisTop } from 'd3-axis';
import dayjs from 'dayjs';
import { useSafeState } from 'ahooks';
import { DEFAULT_TYPE_STYLE, FROM_KEY, TIME_FORMAT } from '../common/constants';
import type { Selection } from 'd3-selection';
import type { IData, IEdge, INode, ITypeStyle, IXAxisStyle, IYAxisStyle } from '../types';
import { formatTime, getNodeById } from '../utils';

export interface IProps extends Partial<{
    wrapper: Selection<HTMLDivElement, any, any, any>
    edges: IEdge[]
    nodes: INode[]
    size: { width: number; height: number }
    xScale: any;
    yScale: any;
}>, Pick<IData, 'nodeTypes' | 'typeFromKey'> {
    yAxis: IYAxisStyle
    xAxis: IXAxisStyle
}

export default ({
    wrapper,
    edges = [],
    nodes = [],
    size,
    xScale,
    yScale,
    xAxis: {height: xHeight},
    yAxis: { width: yWidth },
    typeFromKey = FROM_KEY['type'],
    nodeTypes
}: IProps) => {
    const [chart, setChart] = useSafeState<Selection<SVGGElement, any, any, any>>()
    
    // render x 轴
    useEffect(() => {
        if (!xScale || !yScale || !wrapper) return;

        const chart = wrapper.select('svg').selectAll('.__chart')
            .data([yWidth])
            .enter()
            .append('g')
            .attr('class', '__chart')
            .attr("transform", yWidth => `translate(${yWidth}, ${xHeight})`);

        // start 节点
        chart.selectAll('.__circle.__start')
            .data(edges)
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.start);
            })
            .enter()
            .append('circle')
            .attr('class', '__circle __start')
            .attr('r', 3)
            .attr('fill', (edge: IEdge) => {
                const node = getNodeById(nodes, edge.start);
                const typeKey = node?.[typeFromKey as keyof INode];
                if (!typeKey || !nodeTypes?.[typeKey as string]?.color) return DEFAULT_TYPE_STYLE['color'] as string;
                return nodeTypes[typeKey as string].color as string;
            })
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.start);
            });
        
        // end 节点
        chart.selectAll('.__circle.__end')
            .data(edges)
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.end);
            })
            .enter()
            .append('circle')
            .attr('class', '__circle __end')
            .attr('r', 3)
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.end);
            });

        // 连线
        chart.selectAll('.__line')
            .data(edges)
            .enter()
            .append('line')
            .attr('class', '__line')
            .attr('x1', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('y1', (edge: IEdge) => {
                return yScale(edge.start);
            })
            .attr('x2', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('y2', (edge: IEdge) => {
                return yScale(edge.end);
            })
            .attr('style', `stroke:#8c8c8c;stroke-width:2`);


        setChart(chart);
    }, [wrapper, xScale, yScale])

    return {
        chart
    }
}