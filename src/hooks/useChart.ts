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
        xAxisStyle,
        yAxisStyle: { width: yWidth },
        typeFromKey,
        nodeTypes
    } = useContext(GraphContext);
    const [chart, setChart] = useSafeState<Selection<SVGGElement, any, any, any>>()
    
    // init chart Element
    useEffect(() => {
        if (!wrapper) return;

        let chart = wrapper.select('svg').selectAll('.__chart').data([yWidth])
        const chartEnter = chart.enter().append('g').attr('class', '__chart') as any;
        chart = chart.merge(chartEnter).attr("transform", yWidth => `translate(${yWidth}, 0)`);

        setChart(chart as any);
    }, [wrapper]);

    useEffect(() => {
        if (!chart || !size) return;
        // start 节点
        const start = chart.selectAll('.__circle.__start')
            .data(edges.filter(edge => !!edge.start))
        const startEnter = start.enter()
            .append('circle')
            .attr('class', '__circle __start') as any;
        
        start.merge(startEnter)
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
        start.exit().remove();
        
        // end 节点（有 end 才绘制，如果没有就不绘制）
        const end = chart.selectAll('.__circle.__end')
            .data(edges.filter(edge => !!edge.end));
        const endEnter = end.enter()
            .append('circle')
            .attr('class', '__circle __end') as any;
        
        end.merge(endEnter)
            .attr('r', 3)
            .attr('cx', (edge: IEdge) => {
                return xScale(formatTime(edge.properties.createdTime));
            })
            .attr('cy', (edge: IEdge) => {
                return yScale(edge.end);
            });
        end.exit().remove();

        // 连线（有 start & end 的才画线）
        const line = chart.selectAll('.__line')
            .data(edges.filter(edge => !!(edge.end && edge.start)));
        const lineEnter = line.enter()
            .append('line')
            .attr('class', '__line') as any;
        
        line.merge(lineEnter)
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
        line.exit().remove();
    }, [chart, size, xScale, yScale, edges, nodes]);

    return {
        chart
    }
}