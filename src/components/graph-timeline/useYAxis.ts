import { useEffect, useContext } from 'react';
import { useSafeState } from 'ahooks';
import { axisLeft } from 'd3-axis';
import type { Selection } from 'd3-selection';
import { GraphTimeService } from './service';
import type { INode  } from '../../types';

export default () => {
    const {
        wrapper,
        nodes,
        size, 
        yScale,
        yAxisStyle: { width: yWidth }, 
        getCurrNodeConfig
    } = useContext(GraphTimeService);
    const [yAxis, setYAxis] = useSafeState<Selection<SVGGElement, any, any, any>>()

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

        // 设置节点统一颜色 
        yAxis.selectAll('.tick')
            .data(nodes)
            .attr('color', (node: INode) => {
                return getCurrNodeConfig?.('color', node) || null;
            });

        // 设置线的背景色
        yAxis.selectAll('.tick line')
            .data(nodes)
            .attr('stroke', (node: INode) => {
                const strokeColor = getCurrNodeConfig?.('strokeColor', node);
                if (strokeColor) return strokeColor;

                // 如果节点有配色会使用当前节点颜色
                return 'currentColor';
            })
            .attr('opacity', (node: INode) => {
                const opacity = getCurrNodeConfig?.('strokeOpacity', node) || 1;
                return opacity;
            })
            .attr('stroke-dasharray', (node: INode) => {
                const style = getCurrNodeConfig?.('strokeStyle', node);
                return style === 'solid' ? null : '5'
            })

        
    }, [yAxis, yScale, size, nodes])
    
    return yAxis
}