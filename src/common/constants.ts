import { ITypeStyle, IYAxisStyle, IXAxisStyle } from "../types";

export const classPrefix = 'graph-timeline';

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const DEFAULT_YAXIS_STYLE: IYAxisStyle = {
    // TODO 左侧内容的宽度（最好是能够自适应，目前是配置形式）
    width: 100
}
export const DEFAULT_XAXIS_STYLE: IXAxisStyle = {
    
}

export const FROM_KEY = {
    type: 'type'
}

export const DEFAULT_TYPE_STYLE: ITypeStyle = {
    // 默认节点颜色
    color: '#8c8c8c',
    // 半径
    radius: 3,
    // 默认背景线颜色
    bgLineColor: '#d9d9d9',
    // 背景线实线还是虚线
    bgLineStyle: 'solid'
}