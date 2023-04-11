import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { assign, map } from 'lodash';
import { select } from 'd3-selection';
import { scaleTime, scalePoint } from 'd3-scale';
import useNoPaddingSize from '../../hooks/useNoPaddingSize';
import { DEFAULT_YAXIS_STYLE, FROM_KEY, DEFAULT_XAXIS_STYLE, DEFAULT_NODE_TYPE_STYLE, DEFAULT_EDGE_TYPE_STYLE, TIME_FORMAT } from '../../common/constants';
import { IEdge, IEdgeGroupStyle, INode, INodeGroupStyle, IXAxisStyle, IYAxisStyle } from '../../types';
import type { Selection } from 'd3-selection';
import { extent } from 'd3-array';
import { useSafeState } from 'ahooks';
import { ZoomTransform } from 'd3-zoom';
import { getServiceToken, getTime } from '../../utils';
import dayjs from 'dayjs';

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
  edgeGroupBy?: string;
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
  edgeGroupBy,
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

  const minAndMax = useMemo(() => {
    if (!edges?.length) return;
    return extent(edges, ({ time }) => getTime(time))
  }, [edges])

  const xScale = useMemo(() => {
    if (!selection || !size || !minAndMax) return;

    const scale = scaleTime()
      .domain(map(minAndMax, (time) => dayjs(time, TIME_FORMAT)))
      .range([yAxisStyle.width, size.width])
      .nice();
    return transform?.rescaleX(scale) || scale;
  }, [selection, minAndMax, size, transform]);

  const yScale = useMemo(() => {
    if (!selection || !edges?.length || !size || !nodesMap) return;

    const ids = map(nodes, ({ id }) => id);

    return scalePoint()
            .domain(ids)
            .range([30, size.height - 30])
}, [selection, edges, nodesMap, size])

const insightEdges = useMemo(() => {
  if (!size || !xScale) return;
  // 可视区域内的边
  return edges
    .filter(
      (edge) =>
        xScale(getTime(edge.time)) >= yAxisStyle.width &&
        xScale(getTime(edge.time)) <= size.width &&
        edge.source && nodesMap[edge.source] &&
        edge.target && nodesMap[edge.target]
    )
}, [xScale, yAxisStyle.width, size?.width, edges, nodesMap])

  const getCurrNodeConfig = useCallback((key: keyof INodeGroupStyle, node?: INode) => {
    const groupKey = node?.[nodeGroupBy as keyof INode];
    // 有分类样式
    if (groupKey && nodeGroups?.[groupKey as string]?.[key])  return nodeGroups[groupKey as string][key];
    // 无分类样式，有统一样式
    if (nodeConfig?.[key]) return nodeConfig[key];
    // 内部默认样式
    return DEFAULT_NODE_TYPE_STYLE[key] || null;
  }, [nodeGroupBy, nodeGroups, nodeConfig])

  const getCurrEdgeConfig = useCallback((key: keyof IEdgeGroupStyle, edge?: IEdge) => {
    const groupKey = edge?.[edgeGroupBy as keyof IEdge];
    // 有分类样式
    if (groupKey && edgeGroups?.[groupKey as string]?.[key])  return edgeGroups[groupKey as string][key];
    // 无分类样式，有统一样式
    if (edgeConfig?.[key]) return edgeConfig[key];
    // 内部默认样式
    return DEFAULT_EDGE_TYPE_STYLE[key] || null;
  }, [edgeGroups, edgeConfig, edgeGroupBy])

  useEffect(() => {
    if (!containerRef.current || !size) return;

    setSelection(select(containerRef.current));
  }, [containerRef.current, size]);

  return {
    wrapper: selection,
    size,
    nodes,
    nodesMap,
    edges,
    insightEdges,
    timeGapTotal,
    yAxisStyle,
    xAxisStyle,
    transform,
    xScale,
    yScale,
    setTransform,
    getCurrNodeConfig,
    getCurrEdgeConfig
  };
};

export const GraphTimeService = getServiceToken(useService);
