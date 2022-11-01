import { Selection } from 'd3-selection';
import { ZoomTransform } from 'd3-zoom';
import { createContext, Dispatch, SetStateAction } from 'react';
import { DEFAULT_XAXIS_STYLE, DEFAULT_YAXIS_STYLE, FROM_KEY } from '../common/constants';
import type { IData, INode, ITypeStyle, IXAxisStyle, IYAxisStyle, TNoPaddingSize } from '../types';

export interface IContextProps
  extends Pick<IData, 'nodes' | 'edges' | 'nodeTypes' | 'typeFromKey'> {
  wrapper?: Selection<HTMLDivElement, unknown, null, undefined>;
  yAxisStyle: IYAxisStyle;
  xAxisStyle: IXAxisStyle;
  size?: TNoPaddingSize;
  transform?: ZoomTransform;
  setTransform?: Dispatch<SetStateAction<ZoomTransform | undefined>>;
  getCurrNodeStyle?: (key: keyof ITypeStyle, node?: INode) => string | undefined
}
export default createContext<IContextProps>({
  xAxisStyle: DEFAULT_XAXIS_STYLE,
  yAxisStyle: DEFAULT_YAXIS_STYLE,
  nodes: [],
  edges: [],
  typeFromKey: FROM_KEY['type'],
});
