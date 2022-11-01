import type { ScalePoint, ScaleTime } from "d3-scale";

export interface IEdge {
    start: string;
    end: string;
    properties: {
        createdTime: string;
        count: number;
    }
}

export interface INode extends Partial<{
    group: string;
    data: Record<string, string>;
    properties: Record<string, string>;
}> {
    id: string;
}
export interface ITypeStyle {
    color?: string;
    radius?: number;
    bgLineColor?: string;
    bgLineStyle?: 'dashed' | 'solid';
}
export interface IData  {
    edges?: IEdge[];
    nodes?: INode[];
    // 分类型
    nodeTypes?: Record<string, ITypeStyle>;
    // 没有类型，统一设置所有节点样式
    nodeStyle?: ITypeStyle;
    typeFromKey?: string;
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

