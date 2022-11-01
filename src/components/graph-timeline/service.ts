import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { assign } from 'lodash';
import { select } from 'd3-selection';
import useNoPaddingSize from '../../hooks/useNoPaddingSize';
import { DEFAULT_YAXIS_STYLE, FROM_KEY, DEFAULT_XAXIS_STYLE, DEFAULT_TYPE_STYLE } from '../../common/constants';
import { IData, INode, ITypeStyle, IXAxisStyle, IYAxisStyle } from '../../types';
import type { Selection } from 'd3-selection';
import { useSafeState } from 'ahooks';
import { ZoomTransform } from 'd3-zoom';

export interface IServiceProps {
  containerRef: RefObject<HTMLDivElement>;
  data: IData;
  yAxis?: Partial<IYAxisStyle>;
  xAxis?: Partial<IXAxisStyle>;
}
// 数据处理 & 格式转换
export const useService = ({
  containerRef,
  data: { nodes = [], edges = [], typeFromKey = FROM_KEY['type'], nodeTypes, nodeStyle },
  yAxis,
  xAxis,
}: IServiceProps) => {
  const size = useNoPaddingSize(containerRef);
  const [selection, setSelection] = useState<Selection<HTMLDivElement, unknown, null, undefined>>();
  const [transform, setTransform] = useSafeState<ZoomTransform>();

  const yAxisStyle = useMemo(() => assign(DEFAULT_YAXIS_STYLE, yAxis), [yAxis]);
  const xAxisStyle = useMemo(() => assign(DEFAULT_XAXIS_STYLE, xAxis), [xAxis]);

  useEffect(() => {
    if (!containerRef.current || !size) return;

    setSelection(select(containerRef.current));
  }, [containerRef.current, size]);

  const getCurrNodeStyle = useCallback((key: keyof ITypeStyle, node?: INode) => {
    const typeKey = node?.[typeFromKey as keyof INode];
    // 有分类样式
    if (typeKey && nodeTypes?.[typeKey as string]?.[key])  return nodeTypes[typeKey as string][key];
    // 无分类样式，有统一样式
    if (nodeStyle?.[key]) return nodeStyle[key];
    // 内部默认样式
    return DEFAULT_TYPE_STYLE[key] || null;
  }, [typeFromKey, nodeTypes, nodeStyle])

  return {
    wrapper: selection,
    size,
    nodes,
    edges,
    typeFromKey,
    nodeTypes,
    yAxisStyle,
    xAxisStyle,
    transform,
    setTransform,
    getCurrNodeStyle
  };
};
