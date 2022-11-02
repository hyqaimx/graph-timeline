import { useEffect, useMemo, useContext } from 'react';
import { useSafeState } from 'ahooks';
import { scalePoint } from 'd3-scale';
import { axisLeft } from 'd3-axis';
import { map } from 'lodash';
import type { Selection } from 'd3-selection';
import GraphContext from '../context';
import type { INode  } from '../types';

export default () => {
    const {
        wrapper,
        nodes,
        size, 
        xAxisStyle, 
        yAxisStyle: { width: yWidth }, 
        getCurrNodeStyle
    } = useContext(GraphContext);
    const [yAxis, setYAxis] = useSafeState<Selection<SVGGElement, any, any, any>>()
    const yScale = useMemo(() => {
        if (!wrapper || !nodes?.length || !size) return;

        const ids = map(nodes, ({ id }) => id);

        return scalePoint()
                .domain(ids)
                .range([30, size.height - 30])
    }, [wrapper, nodes, size])

    // init y 轴 selection
    useEffect(() => {
        if (!wrapper || !size) return;

        let yAxis = wrapper.select('svg').selectAll('.yAxis').data([size]);
        const yAxisEnter = yAxis.enter().append('g').attr('class', 'axis yAxis') as any;
            
        yAxis = yAxis.merge(yAxisEnter).attr('transform', (size) => `translate(${size.width}, 0)`)
            
        setYAxis(yAxis as any);
    }, [wrapper, size])

    // render y 轴
    useEffect(() => {
        if (!yAxis || !yScale ||!size || !nodes?.length) return;

        yAxis.attr("transform", `translate(${size.width},0)`);

        yAxis.call(axisLeft(yScale).tickSize(size.width - yWidth).tickPadding(3))

        // 删除 y 轴竖线
        yAxis.selectAll('.domain').remove()

        // 设置线的背景色
        yAxis.selectAll('.tick line')
            .data(nodes)
            .attr('stroke', (node: INode) => {
                return getCurrNodeStyle?.('bgLineColor', node) || null;
            })
            .attr('stroke-dasharray', (node: INode) => {
                const style = getCurrNodeStyle?.('bgLineStyle', node);
                return style === 'solid' ? null : '5'
            })
    }, [yAxis, yScale, size, nodes])
    
    return {
        yScale
    }
}