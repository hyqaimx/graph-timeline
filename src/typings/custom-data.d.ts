export interface INodeItem {
    id: string;
    name: string;
    date: string;
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
    // yAxis?: {
    //   color?: string;
    //   axisColor?: string;
    //   tickColor?: string;
    // };
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