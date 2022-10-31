import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { classPrefix } from '../../common/constants';
import GraphContext from '../../context';
import { useService } from './service';
import Graph from './graph';
import type { IData, IXAxisStyle, IYAxisStyle } from '../../types';

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
    data,
    style,
    yAxis: yStyleSettings,
    xAxis: xStyleSettings
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const value = useService({
        containerRef,
        data,
        xAxis: xStyleSettings,
        yAxis: yStyleSettings
    });

    console.log('value', value)

    return (
        <GraphContext.Provider
            value={value}
        >
            <div className={`${classPrefix}-wrapper ${wrapperClassName}`}>
                <div className={`${classPrefix} ${className}`} ref={containerRef}>
                    <Graph />
                </div>
            </div>
        </GraphContext.Provider>
    )
};

export default GraphTimeline;
