import { useContext, useEffect } from 'react';
import { useSafeState } from 'ahooks';
import { DEFAULT_TYPE_STYLE } from '../common/constants';
import type { Selection } from 'd3-selection';
import GraphContext from '../context';
import type { IEdge, INode } from '../types';
import { formatTime, getNodeById } from '../utils';

export interface IProps {
    xScale: any;
    yScale: any;
}

export default ({
    xScale,
    yScale,
}: IProps) => {
    const {
        wrapper,
        edges = [],
        nodes = [],
        size,
        xAxisStyle: {height: xHeight},
        yAxisStyle: { width: yWidth },
        typeFromKey,
        nodeTypes
    } = useContext(GraphContext);
    const [chart, setChart] = useSafeState<Selection<SVGGElement, any, any, any>>()
    
    // init chart Element
    useEffect(() => {
        if (!wrapper || !size) return;

        const chart = wrapper.select('svg').selectAll('.__chart')
            .data([yWidth])
            .enter()
            .append('g')
            .attr('class', '__chart')
            .attr("transform", yWidth => `translate(${yWidth}, ${xHeight})`);

        setChart(chart);
    }, [wrapper, size]);

    useEffect(() => {
        if (!chart || !size) return;
        // start 节点
        const startUpdater = chart.selectAll('.__circle.__start')
            .data(edges.filter(edge => !!edge.start))
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.start);
            });
        startUpdater.enter()
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
        startUpdater.exit().remove();
        
        // end 节点（有 end 才绘制，如果没有就不绘制）
        const endUpdater = chart.selectAll('.__circle.__end')
            .data(edges.filter(edge => !!edge.end))
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.end);
            })
        endUpdater.enter()
            .append('circle')
            .attr('class', '__circle __end')
            .attr('r', 3)
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.end);
            });
        endUpdater.exit().remove();

        // 连线（有 start & end 的才画线）
        const lineUpdater = chart.selectAll('.__line')
            .data(edges.filter(edge => !!(edge.end && edge.start)))
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
            });
        lineUpdater.enter()
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
        lineUpdater.exit().remove();
    }, [chart, size, xScale, yScale, edges, nodes]);

    return {
        chart
    }
}