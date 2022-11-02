import { Selection } from 'd3-selection';
import { ZoomTransform } from 'd3-zoom';
import { createContext, Dispatch, SetStateAction } from 'react';
import { DEFAULT_XAXIS_STYLE, DEFAULT_YAXIS_STYLE } from '../common/constants';
import type { IData, IEdge, INode, INodeTypeStyle, IEdgeTypeStyle, IXAxisStyle, IYAxisStyle, TNoPaddingSize, ValueOf } from '../types';

export interface IContextProps
  extends Pick<IData, 'nodes' | 'edges' | 'nodeTypeFromKey'> {
  wrapper?: Selection<HTMLDivElement, unknown, null, undefined>;
  yAxisStyle: IYAxisStyle;
  xAxisStyle: IXAxisStyle;
  size?: TNoPaddingSize;
  transform?: ZoomTransform;
  setTransform?: Dispatch<SetStateAction<ZoomTransform | undefined>>;
  getCurrNodeStyle?: <ValueType extends ValueOf<INodeTypeStyle> = string>(key: keyof INodeTypeStyle, node?: INode) => ValueType
  getCurrEdgeStyle?: <ValueType extends ValueOf<IEdgeTypeStyle> = string>(key: keyof IEdgeTypeStyle, edge?: IEdge) => ValueType
}
export default createContext<IContextProps>({
  xAxisStyle: DEFAULT_XAXIS_STYLE,
  yAxisStyle: DEFAULT_YAXIS_STYLE,
  nodes: [],
  edges: [],
});
