import React, { CSSProperties, useMemo, useRef } from 'react';
import { select } from 'd3-selection';
import { axisTop } from 'd3-axis';
import { zoom } from 'd3-zoom';
import { classPrefix, DEFAULT_XAXIS_STYLE, DEFAULT_YAXIS_STYLE, FROM_KEY } from '../../common/constants';
import useXAxis from '../../hooks/useXAxis';
import useYAxis from '../../hooks/useYAxis';
import useChart from '../../hooks/useChart';
import { useSize, useUpdateEffect } from 'ahooks';
import { assign } from 'lodash';
import type { IData, IEdge, INode, IXAxisStyle, IYAxisStyle } from '../../types';

import './index.less';

export interface IProps extends Partial<{
    wrapperClassName: string;
    className: string;
    yAxis: Partial<IYAxisStyle>;
    xAxis: Partial<IXAxisStyle>
    style: Omit<CSSProperties, 'padding' | 'margin'>;
}> {
    data: IData
}

const GraphTimeline: React.FC<IProps> = ({
    wrapperClassName = '',
    className = '',
    data: { nodes, edges, typeFromKey = FROM_KEY['type'], nodeTypes  },
    style,
    yAxis: yStyleSettings,
    xAxis: xStyleSettings
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const size = useSize(containerRef);
    const selection = useMemo(() => {
        if (!containerRef.current) return;

        return select(containerRef.current)
    }, [containerRef.current]);
    const yAxisStyle = useMemo(() => assign(DEFAULT_YAXIS_STYLE, yStyleSettings), [yStyleSettings]);
    const xAxisStyle = useMemo(() => assign(DEFAULT_XAXIS_STYLE, xStyleSettings), [xStyleSettings])
    const { xScale, xAxis } = useXAxis({
        wrapper: selection,
        edges,
        size,
        yAxis: yAxisStyle
    });
    const { yScale } = useYAxis({
        wrapper: selection,
        nodes,
        size,
        yAxis: yAxisStyle,
        xAxis: xAxisStyle,
        typeFromKey,
        nodeTypes
    });
    const { chart } = useChart({
        wrapper: selection,
        nodes,
        edges,
        size,
        yAxis: yAxisStyle,
        xAxis: xAxisStyle,
        xScale,
        yScale,
        typeFromKey,
        nodeTypes
    });

    useUpdateEffect(() => {
        if (!selection || !size) return;

        // 创建画布
        selection.selectAll('svg')
                .data([size])
                .attr('width', d => d.width)
                .attr('height', d => d.height);

    }, [selection, size])

    useUpdateEffect(() => {
        if (!xScale || !yScale || !xAxis) return;

        const zoomed: any = zoom().on('start', () => {
            console.log('start')
        }).on('zoom', (event) => {
            const rx = event.transform.rescaleX(xScale);

            xAxis.call(axisTop(rx));
        }).on('end', () => {
            console.log('end')
        })

        selection?.select('svg').call(zoomed)

    }, [xScale, yScale, xAxis])

    return (
        <div className={`${classPrefix}-wrapper ${wrapperClassName}`} >
            <div className={`${classPrefix} ${className}`} ref={containerRef}>
                <svg></svg>
            </div>
        </div>
    )
};

export default GraphTimeline;
