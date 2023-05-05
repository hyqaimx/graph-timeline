import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { assign, map } from 'lodash';
import * as d3 from 'd3';
import useNoPaddingSize from '../../hooks/useNoPaddingSize';
import {
  DEFAULT_YAXIS_STYLE,
  FROM_KEY,
  DEFAULT_XAXIS_STYLE,
  DEFAULT_NODE_TYPE_STYLE,
  DEFAULT_EDGE_TYPE_STYLE,
  TIME_FORMAT,
  TIME_LOCALE_FORMAT,
} from '../../common/constants';
import {
  IEdge,
  IEdgeGroupStyle,
  INode,
  INodeGlobalStyle,
  INodeGroupStyle,
  IXAxisStyle,
  IYAxisStyle,
} from '../../types';
import { useDebounce, useSafeState } from 'ahooks';
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
  nodeConfig?: INodeGlobalStyle;
  activeNodeIds?: string[];
  edgeGroupBy?: string;
  edgeGroups?: Record<string, IEdgeGroupStyle>;
  edgeConfig?: IEdgeGroupStyle;

  onNodeClick?: (node: INode) => void;
}
// 数据处理 & 格式转换
export const useService = ({
  containerRef,
  yAxis,
  xAxis,
  nodes = [],
  edges = [],
  nodeGroupBy = FROM_KEY['group'],
  nodeGroups,
  nodeConfig,
  edgeGroupBy,
  edgeGroups,
  edgeConfig,
  activeNodeIds,
  onNodeClick,
}: IServiceProps) => {
  const size = useNoPaddingSize(containerRef);
  const [selection, setSelection] =
    useState<d3.Selection<HTMLDivElement, unknown, null, undefined>>();
  const [transform, setTransform] = useSafeState<d3.ZoomTransform>();
  const debounceTransform = useDebounce(transform, { wait: 500 });
  const [isHeatMap, setIsHeatmap] = useSafeState<boolean>(nodeConfig?.showHeatMap || true);

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
    const minAndMax = d3.extent(edges, ({ time }) => getTime(time));
    return Number(minAndMax[1]) - Number(minAndMax[0]);
  }, [edges]);

  const minAndMax = useMemo(() => {
    if (!edges?.length) return;
    return d3.extent(edges, ({ time }) => getTime(time));
  }, [edges]);

  const xScale = useMemo(() => {
    if (!selection || !size || !minAndMax) return;

    d3.timeFormatDefaultLocale(TIME_LOCALE_FORMAT);

    const scale = d3
      .scaleTime()
      .domain(map(minAndMax, (time) => dayjs(time, TIME_FORMAT)))
      .range([yAxisStyle.width, size.width])
      .nice();
    return transform?.rescaleX(scale) || scale;
  }, [selection, minAndMax, size, transform]);

  const insightEdges = useMemo(() => {
    if (!size || !xScale) return;
    // 可视区域内的边
    return edges.filter(
      (edge) =>
        xScale(getTime(edge.time)) >= yAxisStyle.width &&
        xScale(getTime(edge.time)) <= size.width &&
        edge.source &&
        nodesMap[edge.source] &&
        edge.target &&
        nodesMap[edge.target],
    );
  }, [xScale, yAxisStyle.width, size?.width, edges, nodesMap]);

  const insightNodes = useMemo(() => {
    if (!insightEdges?.length) return;

    const nodeIdMap = new Map();
    insightEdges.forEach(({ source, target }) => {
      if (source) nodeIdMap.set(source, 1);
      if (target) nodeIdMap.set(target, 1);
    });

    return nodes.filter((node) => nodeIdMap.has(node.id));
  }, [insightEdges, nodes]);

  const yScale = useMemo(() => {
    if (!selection || !edges?.length || !size || !nodesMap) return;

    const ids = map(insightNodes, ({ id }) => id);

    return d3
      .scalePoint()
      .domain(ids)
      .range([20, size.height - 20]);
  }, [selection, edges, nodesMap, size, insightNodes]);

  const getCurrNodeConfig = useCallback(
    (key: keyof INodeGroupStyle, node?: INode) => {
      const groupKey = node?.[nodeGroupBy as keyof INode];
      // 有分类样式
      if (groupKey && nodeGroups?.[groupKey as string]?.[key])
        return nodeGroups[groupKey as string][key] as any;
      // 无分类样式，有统一样式
      if (nodeConfig?.[key]) return nodeConfig[key];
      // 内部默认样式
      return DEFAULT_NODE_TYPE_STYLE[key] || null;
    },
    [nodeGroupBy, nodeGroups, nodeConfig],
  );

  const getCurrEdgeConfig = useCallback(
    (key: keyof IEdgeGroupStyle, edge?: IEdge, useDefault?: boolean) => {
      const groupKey = edge?.[edgeGroupBy as keyof IEdge];
      // 有分类样式
      if (groupKey && edgeGroups?.[groupKey as string]?.[key])
        return edgeGroups[groupKey as string][key];
      // 无分类样式，有统一样式
      if (edgeConfig?.[key]) return edgeConfig[key];
      // 内部默认样式
      return useDefault ? DEFAULT_EDGE_TYPE_STYLE[key] || null : null;
    },
    [edgeGroups, edgeConfig, edgeGroupBy],
  );

  useEffect(() => {
    if (!containerRef.current || !size) return;

    setSelection(d3.select(containerRef.current));
  }, [containerRef.current, size]);

  useEffect(() => {
    if (!nodeConfig?.showHeatMap) {
      setIsHeatmap(false);
      return;
    }
    if (!xScale || !timeGapTotal || !size?.width) return;
    const left = xScale.invert(yAxisStyle.width).getTime();
    const right = xScale.invert(size.width).getTime();
    const timeGap = right - left;
    const ratio = timeGap / timeGapTotal;

    if (ratio && ratio > 0.5) {
      return setIsHeatmap(true);
    }
    setIsHeatmap(false);
  }, [xScale, size?.width, yAxisStyle.width, timeGapTotal, nodeConfig?.showHeatMap]);

  return {
    wrapper: selection,
    size,
    nodes,
    nodesMap,
    insightNodes,
    activeNodeIds,
    minAndMax,
    edges,
    insightEdges,
    timeGapTotal,
    yAxisStyle,
    xAxisStyle,
    transform: debounceTransform,
    xScale,
    yScale,
    isHeatMap,
    setTransform,
    getCurrNodeConfig,
    getCurrEdgeConfig,
    onNodeClick,
  };
};

export const GraphTimeService = getServiceToken(useService);
