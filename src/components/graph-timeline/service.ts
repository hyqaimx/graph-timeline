import { RefObject, useEffect, useMemo, useState } from "react";
import { assign } from 'lodash';
import { select } from 'd3-selection';
import { useSize } from 'ahooks';
import { DEFAULT_YAXIS_STYLE, FROM_KEY, DEFAULT_XAXIS_STYLE } from "../../common/constants";
import { IData, IXAxisStyle, IYAxisStyle } from "../../types";
import type { Selection } from 'd3-selection';

export interface IServiceProps {
    containerRef: RefObject<HTMLDivElement>;
    data: IData;
    yAxis?: Partial<IYAxisStyle>;
    xAxis?: Partial<IXAxisStyle>;
}
// 数据处理 & 格式转换
export const useService = ({
    containerRef,
    data: { nodes = [], edges = [], typeFromKey = FROM_KEY['type'], nodeTypes },
    yAxis,
    xAxis
}: IServiceProps) => {
    const size = useSize(containerRef);
    const [selection, setSelection] = useState<Selection<HTMLDivElement, unknown, null, undefined>>();

    const yAxisStyle = useMemo(() => assign(DEFAULT_YAXIS_STYLE, yAxis), [yAxis]);
    const xAxisStyle = useMemo(() => assign(DEFAULT_XAXIS_STYLE, xAxis), [xAxis]);

    useEffect(() => {
        if (!containerRef.current || !size) return;
        
        setSelection(select(containerRef.current));
    }, [containerRef.current, size])

    return {
        wrapper: selection,
        size,
        nodes,
        edges,
        typeFromKey,
        nodeTypes,
        yAxisStyle,
        xAxisStyle
    }
}