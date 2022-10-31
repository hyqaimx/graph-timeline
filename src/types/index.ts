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

// 数组 nodes 转换为 obj 格式，增加内部使用的排序字段 __order
export interface IObjNode extends INode {
    __order: number;
}
export interface ITypeStyle {
    color?: string;
    labelColor?: string;
    bgLineColor?: string;
}
export interface IData  {
    edges?: IEdge[];
    nodes?: INode[];
    nodeTypes?: Record<string, ITypeStyle>;
    typeFromKey?: string;
}

export interface IYAxisStyle {
    width: number
}

export interface IXAxisStyle {
}
