export type ValueOf<T> = T[keyof T];

export type TBaseTime = string | number;
export type TTime = TBaseTime | { start: TBaseTime; end: TBaseTime };
export interface IEdge {
    source: string;
    target: string;
    time: TTime;
    // 样式分类
    type?: string;
}

export interface INode extends Partial<{
    group: string;
    data: Record<string, string>;
    label: string;
}> {
    id: string;
}
export interface INodeGroupStyle {
    // 节点颜色
    color?: string;
    // 半径
    radius?: number;
    // 背景线颜色
    strokeColor?: string;
    strokeOpacity?: number;
    // 背景线实线还是虚线；默认 solid 实线
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    // TODO y轴 配置：写在 yAxisStyle 还是 写在这里？最好是这里，可以分类型配置；但是宽度可以统一在 yAxis 中配置
    yLabelWidth?: number;
    yLabelColor?: string;
    yLabelFontSize?: number;
}
export interface IEdgeGroupStyle {
    // 颜色默认起始节点到中止节点渐变，也可特殊定义
    color?: string;
    // 渐变是否反向。不反向：起始节点到中止节点渐变；反向： 中止节点到起始节点渐变；
    reverse?: boolean;
    // 线的宽度
    width?: number;
}

export interface IYAxisStyle {
    width: number
}

export interface IXAxisStyle {
}

export interface TNoPaddingSize {
    width: number;
    height: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
}

export interface THeatMapItem {
  node: string;
  count: number;
  time: number;
}

