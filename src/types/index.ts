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

export interface IYAxisStyle {
    width: number
}