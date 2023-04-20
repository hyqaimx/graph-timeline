export type ValueOf<T> = T[keyof T];

export type TBaseTime = string | number;
export type TTime = TBaseTime | { start: TBaseTime; end: TBaseTime };
export interface IEdge {
  source: string;
  target: string;
  time: TTime;
}

export interface INode
  extends Partial<{
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
}
export interface INodeGlobalStyle extends INodeGroupStyle {
  // 是否显示热力图
  showHeatMap?: boolean;
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
  width: number;
}

export interface IXAxisStyle {}

export interface TNoPaddingSize {
  width: number;
  height: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
}

export interface THeatMapItem {
  nodeId: string;
  count: number;
  index: number;
}
