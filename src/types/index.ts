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
