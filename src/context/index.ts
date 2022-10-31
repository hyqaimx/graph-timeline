import { Selection } from 'd3-selection';
import { createContext } from 'react';
import { DEFAULT_XAXIS_STYLE, DEFAULT_YAXIS_STYLE, FROM_KEY } from '../common/constants';
import { IData, IXAxisStyle, IYAxisStyle } from '../types';

export interface IContextProps extends Pick<IData, 'nodes' | 'edges' | 'nodeTypes' | 'typeFromKey'>{
    wrapper?: Selection<HTMLDivElement, unknown, null, undefined>;
    yAxisStyle: IYAxisStyle;
    xAxisStyle: IXAxisStyle;
    size?: {
        width: number;
        height: number;
    };
}
export default createContext<IContextProps>({
    xAxisStyle: DEFAULT_XAXIS_STYLE,
    yAxisStyle: DEFAULT_YAXIS_STYLE,
    nodes: [],
    edges: [],
    typeFromKey: FROM_KEY['type']
});