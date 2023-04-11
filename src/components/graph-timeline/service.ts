import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { assign } from 'lodash';
import { select } from 'd3-selection';
import useNoPaddingSize from '../../hooks/useNoPaddingSize';
import { DEFAULT_YAXIS_STYLE, FROM_KEY, DEFAULT_XAXIS_STYLE, DEFAULT_NODE_TYPE_STYLE, DEFAULT_EDGE_TYPE_STYLE } from '../../common/constants';
import { IEdge, IEdgeGroupStyle, INode, INodeGroupStyle, IXAxisStyle, IYAxisStyle } from '../../types';
import type { Selection } from 'd3-selection';
import { extent } from 'd3-array';
import { useSafeState } from 'ahooks';
import { ZoomTransform } from 'd3-zoom';
import { getServiceToken, getTime } from '../../utils';

export interface IServiceProps {
  containerRef: RefObject<HTMLDivElement>;
  yAxis?: Partial<IYAxisStyle>;
  xAxis?: Partial<IXAxisStyle>;

  edges?: IEdge[];
  nodes?: INode[];
  nodeGroupBy?: string;
  // 分类型
  nodeGroups?: Record<string, INodeGroupStyle>;
  // 没有类型，统一设置所有节点样式
  nodeConfig?: INodeGroupStyle;
  edgeGroups?: Record<string, IEdgeGroupStyle>;
  edgeConfig?: IEdgeGroupStyle;
}
// 数据处理 & 格式转换
export const useService = ({
  containerRef,
  yAxis,
  xAxis,
  nodes = [],
  edges = [],
  nodeGroupBy = FROM_KEY['type'],
  nodeGroups,
  nodeConfig,
  edgeGroups,
  edgeConfig
}: IServiceProps) => {
  const size = useNoPaddingSize(containerRef);
  const [selection, setSelection] = useState<Selection<HTMLDivElement, unknown, null, undefined>>();
  const [transform, setTransform] = useSafeState<ZoomTransform>();

  const yAxisStyle = useMemo(() => assign(DEFAULT_YAXIS_STYLE, yAxis), [yAxis]);
  const xAxisStyle = useMemo(() => assign(DEFAULT_XAXIS_STYLE, xAxis), [xAxis]);

  const nodesMap = useMemo(() => {
    const m: Record<string, INode> = {};
    nodes.forEach((node) => {
      m[node.id] = node;
    });
    return m;
  }, [nodes]);

  const timeGapTotal = useMemo(() => {
    if (!edges?.length) return;
    const minAndMax = extent(edges, ({ time }) => getTime(time));
    return Number(minAndMax[1]) - Number(minAndMax[0]);
  }, [edges]);

  const getCurrnodeConfig = useCallback((key: keyof INodeGroupStyle, node?: INode) => {
    const typeKey = node?.[nodeGroupBy as keyof INode];
    // 有分类样式
    if (typeKey && nodeGroups?.[typeKey as string]?.[key])  return nodeGroups[typeKey as string][key];
    // 无分类样式，有统一样式
    if (nodeConfig?.[key]) return nodeConfig[key];
    // 内部默认样式
    return DEFAULT_NODE_TYPE_STYLE[key] || null;
  }, [nodeGroupBy, nodeGroups, nodeConfig])

  const getCurredgeConfig = useCallback((key: keyof IEdgeGroupStyle, edge?: IEdge) => {
    // 有分类样式
    if (edge?.type && edgeGroups?.[edge.type]?.[key]) return edgeGroups[edge.type][key];
    // 无分类样式，有统一样式
    if (edgeConfig?.[key]) return edgeConfig[key];
    // 内部默认样式
    return DEFAULT_EDGE_TYPE_STYLE[key] || null;
  }, [edgeGroups, edgeConfig])

  useEffect(() => {
    if (!containerRef.current || !size) return;

    setSelection(select(containerRef.current));
  }, [containerRef.current, size]);

  return {
    wrapper: selection,
    size,
    nodes,
    timeGapTotal,
    nodesMap,
    edges,
    yAxisStyle,
    xAxisStyle,
    transform,
    setTransform,
    getCurrnodeConfig,
    getCurredgeConfig
  };
};

export const GraphTimeService = getServiceToken(useService);
