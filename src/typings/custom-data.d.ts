export interface INodeItem {
    id: string | number;
    name?: string;
    nodeId: string | number;
    nodeName?: string;
    date: string;
    color?: string;
    [prop: string]: any;
}
export interface ILinkItem {
    source: string;
    target: string;
}

export type TColors = string[] | Record<string, string>

export interface IOptions {
    background?: string;
    colors?: TColors;
    xAxis?: {
        color?: string;
        axisColor?: string;
        tickColor?: string;
    };
    yAxis?: {
        // 渲染方向：从上到下、从下到上，默认从下到上
        direction?: 'topToBottom' | 'bottomToTop'
        axisColor?: string;
        tickColor?: string;
    //   color?: string;
    };
    node?: {
        color?: string;
        size?: number;
        selectedColor?: string;
    };
    brushNodeColor?: string;
    link?: {
        color?: string;
        selectedColor?: string;
    }
}