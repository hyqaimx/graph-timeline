import * as d3 from "d3";
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import drawLink from "@/components/link";
import drawNodes from "@/components/nodes";
import getZoom from "@/components/zoom";
import { xAxis, xRange } from "@/components/xAxis";
import { setEvent, setSelect, setYAxisStyle, yAxis, yRange } from "@/components/yAxis";
import getBrush from "@/components/brush";
import { DrawTooltip } from "@/components/tooltip";
import { bindSvgEvent, unbindSvgEvent } from "@/components/event";
import BrushImg from '@/assets/usebrush.png';
import DisableBrush from '@/assets/unusebrush.png';
import { INodeItem, ILinkItem, IOptions } from "@/typings/custom-data";
import { calcHeight } from "@/utils";
import { DEFAULT_NODE_COLOR } from "@/constants";
export interface ITimelineProps {
  width?: number | "100%";
  height?: number;
  padding?: number[];
  nodes: INodeItem[];
  links: ILinkItem[];
  useBrush?: boolean;
  selectedItem?: string[];
  options?: IOptions;
  tooltip?: {
    show?: boolean;
    format?: (data: INodeItem, links: ILinkItem[]) => ReactNode
  };
  timeLabelFormat?: (date: Date) => string;
  onBrushChange?: (value: INodeItem[]) => void;
  onSelect?: <T>(selectedData: T[], current: T, show: boolean) => void;
  onSelectedNodesChange?: <T>(current: T | null, selectedNodes: T[]) => void;
  onSelectedLinksChange?: <T>(current: T | null, selectedNodes: T[]) => void;
}

const Timeline = ({
  width,
  height = 300,
  padding = [20, 0, 20, 50],
  nodes = [],
  links = [],
  useBrush = true,
  selectedItem = [],
  options = {},
  tooltip = {},
  onBrushChange,
  timeLabelFormat,
  onSelect,
  onSelectedNodesChange,
  onSelectedLinksChange
}: ITimelineProps) => {
  const [padTop, padRight, padBottom, padLeft] = padding;
  const { xAxis: xAxisStyle, yAxis: yAxisStyle, node: nodeStyle, link, background, brushNodeColor, colors } = options;
  const { show: showTooltip, format: tooltipFormat } = tooltip;

  const [realWidth, setWidth] = useState<number>(1000);
  const [isBrush, setBrush] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);

  // 组件安装卸载：resize 事件监听
  useEffect(() => {
    if (!outerRef.current) return;

    // 设置容器的宽度以及自适应
    const listener = () => {
      if (outerRef.current) {
        setWidth(outerRef.current.clientWidth - 20);
      }
    }

    if (!width || width === '100%') {
      setWidth(outerRef.current.clientWidth - 20);
      window.addEventListener('resize', listener);
    } else {
      if (typeof width === 'number') {
        setWidth(width - 18);
      } else {
        throw Error("宽度只能设置为数字或'100%'")
      }
    }

    // 卸载事件监听
    return () => {
      d3.select('#graph-timeline-svg').call(unbindSvgEvent);
      window.removeEventListener('resize', listener);
    }
  }, [])

  // 初始化画板
  useEffect(() => {
    if (!outerRef.current) return;
    outerRef.current.innerHTML = "";
    
    // 单独创建x轴画板
    const xAxisSvg = d3.create('svg')
      .attr('id', 'xAxis-container')
      .style('position', 'absolute')
      .style('left', 0)
      .style("z-index", -1)
      .style("pointer-events", "none");

    // 创建主画板包含元素
    const main = d3.create('div')
      .style('overflow-y', 'auto')
      .style('height', `${height - padBottom}px`)
      .attr('id', 'graph-timeline-main');
    // 创建主画板
    main.append('svg')
      .attr('viewBox', `0, 0, ${realWidth}, ${height}`)
      .attr('width', realWidth)
      .attr('height', height)
      .attr('id', 'graph-timeline-svg')
      .style("background-color", background || '#F5F5F5')
      .style("display", 'block')
      .call(bindSvgEvent, link, onSelectedNodesChange, onSelectedLinksChange);

    outerRef.current.append(xAxisSvg.node() || "<div>xAxis build fail</div>");
    outerRef.current.append(main.node() || "<div>body build fail</div>");
  }, [])

  const { x, y, zoom, brush } = useMemo(() => {
    const x = xRange(nodes, padding, realWidth);
    const y = yRange(nodes, padding, height - padBottom, yAxisStyle);
    const zoom = getZoom(nodes, x, y, nodeStyle, xAxisStyle, timeLabelFormat);
    const brush = getBrush(nodes, x, y, brushNodeColor, onBrushChange);
    return { x, y, zoom, brush };
  }, [nodes, realWidth])

  const realHeight = calcHeight(nodes, height - padBottom);

  useEffect(() => {
    if (!outerRef.current) return;

    // 绘画主体部分
    const svg = d3.select<SVGElement, unknown>('#graph-timeline-svg')
      .attr('viewBox', `0, 0, ${realWidth}, ${realHeight}`)
      .attr('width', realWidth)
      .attr('height', realHeight);
      
    if (svg.empty()) return;

    svg.html("");
    // 绘画底图, 计算绘图所需真正高度
    svg.attr('viewBox', `0, 0, ${realWidth}, ${realHeight}`)
      .attr('width', realWidth)
  }, [realWidth, height, JSON.stringify(padding), realHeight]);

  // 绘画x轴
  useEffect(() => {
    const xAxisSvg = d3.select('#xAxis-container');

    if (xAxisSvg.empty()) return;

    xAxisSvg.attr('width', realWidth)
      .attr('height', height);
    xAxisSvg.html("");
    // 将x轴添加到画板
    const gx = xAxisSvg.append('g')
      .attr('class', "xAxis")
      .attr("transform", `translate(0,${height - padBottom})`)
      .call(xAxis, x, timeLabelFormat);
    // 设置X轴的样式
    if (xAxisStyle) {
      const { color, axisColor, tickColor } = xAxisStyle;
      gx.select('path').attr('stroke', axisColor || "currentColor");
      gx.selectAll('text').attr('fill', color || 'currentColor');
      gx.selectAll('line').attr('stroke', tickColor || 'currentColor')
    }
  }, [realWidth, height, xAxisStyle, padBottom])

  // 将y轴添加到面板
  useEffect(() => {
    const svg = d3.select<SVGElement, unknown>('#graph-timeline-svg');
    if (svg.empty()) return;

    const yAxisSvg = svg.select('.yAxis');
    if (yAxisSvg.empty()) {
      svg.append('g')
      .attr('class', 'yAxis')
      .attr('transform', `translate(${padLeft}, 0)`)
      .call(yAxis, y, nodes)
      .call(setYAxisStyle, realWidth - padRight - padLeft, nodes, colors)
      .call(setSelect, selectedItem)
      .call(setEvent, onSelect)
      
    } else {
      yAxisSvg
        .call(setSelect, selectedItem)
        .call(setEvent, onSelect)
    }
  }, [JSON.stringify(nodes), padLeft, padRight, realWidth, colors, JSON.stringify(selectedItem)])

  useEffect(() => {
    const svg = d3.select<SVGElement, unknown>('#graph-timeline-svg');
    if (svg.empty()) return;

    /* 绘制数据点以及连线（先绘制节点） */
    svg.append('g')
      .attr('clip-path', 'url(#clipView)')
      .attr('width', realWidth)
      .call(drawNodes, nodes, x, y, nodeStyle, colors, onSelectedNodesChange);
    
    svg.call(drawLink, nodes, links, x, y, onSelectedLinksChange, link, nodeStyle);

    /* 增加tooltip */
    svg.call(DrawTooltip, links, nodes, showTooltip, tooltipFormat);
  }, [realWidth, padLeft, padRight, JSON.stringify(nodes), JSON.stringify(links), nodeStyle, JSON.stringify(colors), link])


  // 设置剪切区域
  useEffect(() => {
    const svg = d3.select<SVGElement, unknown>('#graph-timeline-svg');
    if (svg.empty()) return;

    svg.append('clipPath')
      .attr('id', 'clipView')
      .append('path')
      .attr('d', `M${padLeft},0 h${realWidth - padLeft - padRight} v${realHeight} h${-(realWidth - padLeft - padRight)} v${-realHeight}z`)
  }, [padLeft, realWidth, padRight, realHeight])

  useEffect(() => {
    const svg = d3.select<SVGGElement, undefined>('#graph-timeline-svg')
      .attr('width', realWidth);
    /* 设置缩放事件过滤 */
    zoom.filter((event) => {
      if (isBrush) {
        return false;
      } else {
        return event && !event.button;
      }
    });

    /* 设置框选事件过滤 */
    brush.filter((event) => {
      if (isBrush) {
        return !event.button;
      } else {
        return false;
      }
    })

    // 去除已经存在的框选
    svg.selectAll('rect').remove();
    /* 添加框选或者缩放 */
    if (!isBrush) {
      // 还原原有的节点样式
      let color = nodeStyle?.color || DEFAULT_NODE_COLOR;

      svg.selectAll('.nodes circle')
        .each(function (d: INodeItem) {
          const group = String(d.nodeId);

          if (d.color) {
            // 节点颜色
            color = d.color;
          } else {
            // 节点颜色和 yAxis 顶点颜色保持一致
            const currentGroup = d3.selectAll('.tick circle').filter(function (d: string) {
              return d === group;
            });

            color = currentGroup.attr('fill');        
          }

          const node = d3.select(this);

          node.attr('fill', color);
        })
      svg.call(zoom)
        .transition()
        .duration(750);
    } else {
      svg.call(brush);
    }
  }, [isBrush, realWidth])

  return (
    <div className="container" style={{ position: 'relative', width, height }}>
      {useBrush &&
        <div
          onClick={() => setBrush(!isBrush)}
          style={{
            position: 'absolute',
            right: 40,
            top: 10,
            backgroundColor: 'rgba(255, 255, 255, .5)',
            fontSize: 0,
            cursor: 'pointer'
          }}
        >
          {isBrush ?
            <img src={BrushImg} alt='禁用框选' /> :
            <img src={DisableBrush} alt='框选' />
          }
        </div>
      }
      <div ref={outerRef} style={{ width: '100%' }}></div>
    </div>
  )
}

export default Timeline;