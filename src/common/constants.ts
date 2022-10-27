import { ITypeStyle, IYAxisStyle, IXAxisStyle } from "../types";

export const classPrefix = 'graph-timeline';

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const DEFAULT_YAXIS_STYLE: IYAxisStyle = {
    width: 100
}
export const DEFAULT_XAXIS_STYLE: IXAxisStyle = {
    height: 10
}

export const FROM_KEY = {
    type: 'type'
}

export const DEFAULT_TYPE_STYLE: ITypeStyle = {
    // 默认节点颜色
    color: '#8c8c8c',
    // 默认 y轴 label 颜色
    labelColor: '#141414',
    // 默认背景线颜色
    bgLineColor: '#d9d9d9'
}