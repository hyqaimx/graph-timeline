import * as d3 from "d3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import DrawLink from "./link";
import drawNodes from "./nodes";
import getZoom from "./zoom";
import { xAxis, xRange } from "./xAxis";
import { setEvent, setYAxisStyle, yAxis, yRange } from "./yAxis";
import getBrush from "./brush";
import { DrawTooltip } from "./tooltip";
import { node } from "webpack";


export interface INodeItem {
  id: string;
  name: string;
  date: string;
  [prop: string]: any;
} 
export interface ILinkItem {
  source: string;
  target: string;
}

export interface IOptions {
  background?: string;
  xAxis?: {
    color?: string;
    axisColor?: string;
    tickColor?: string;
  };
  // yAxis?: {
  //   color?: string;
  //   axisColor?: string;
  //   tickColor?: string;
  // };
  node?: {
    color?: string;
    size?: number
  };
  brushNodeColor?: string;
  arrowColor?: string;
}

export interface ITimelineProps{
  width?: number | "100%";
  height?: number;
  padding?: number[];
  nodes: INodeItem[];
  links: ILinkItem[];
  usBrush?: boolean;
  options?: IOptions;
  timeLabelFormat?: (date: Date) => string;
  onBrushChange?: (value: INodeItem[]) => void;
  onSelect?:(id: unknown, show: boolean) => void;
}

const Timeline = ({
  width, 
  height = 300,
  padding = [20, 20, 20, 50],
  nodes = [],
  links = [],
  usBrush = true,
  options = {},
  onBrushChange,
  timeLabelFormat,
  onSelect
}:ITimelineProps) => {
  // const
  const [padTop, padRight, padBottom, padLeft] = padding;
  const {xAxis: xAxisStyle, node: nodeStyle, arrowColor, background, brushNodeColor} = options;

  const [realWidth, setWidth] = useState<number>(1000);
  const [isBrush, setBrush] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 设置容器的宽度以及自适应
    const listener = () => {
      if(outerRef.current) {
        setWidth(outerRef.current.clientWidth - 30);
      }
    }

    if(outerRef.current) {
      outerRef.current.innerHTML = "";
      if(!width || width === '100%') {
        setWidth(outerRef.current.clientWidth - 30);
        window.addEventListener('resize', listener);
      }else {
        if(typeof width === 'number') {
          setWidth(width - 30);
        }else {
          throw Error("宽度只能设置为数字或'100%'")
        }
      }

      // 初始化画板
      // 单独创建x轴画板
      const xAxisSvg = d3.create('svg')
        .attr('id', 'xAxis-container')
        .attr('width', realWidth)
        .attr('height', height)
        .style('position', 'absolute')
        .style("z-index", -1)
        .style("pointer-events", "none");
      
      // 创建主画板包含元素
      const main = d3.create('div')
        .style('overflow-y', 'auto')
        .style('height', `${height - padBottom}px`)
        .attr('id', 'main');
      // 创建主画板
      main.append('svg')
        .attr('viewBox', `0, 0, ${realWidth}, ${height}`)
        .attr('width', realWidth)
        .attr('height', height)
        .attr('id', 'timeline')
        .style("background-color", background || '#F5F5F5')
        .style("display", 'block');

      outerRef.current.append(xAxisSvg.node() || "<div>xAxis build fail</div>");
      outerRef.current.append(main.node() || "<div>body build fail</div>");
    }

    // 卸载事件监听
    return () => {
      window.removeEventListener('resize', listener);
    }
  }, [])

  const {x, y, zoom, brush} = useMemo(() => {
    const x = xRange(nodes,padding, realWidth);
    const y = yRange(nodes, padding, height - padBottom);
    const zoom = getZoom(nodes, x, y, xAxisStyle,timeLabelFormat);
    const brush = getBrush(nodes, x, y, brushNodeColor, onBrushChange);
    return {x, y, zoom, brush};
  }, [nodes, realWidth])

  useEffect(() => {
    if(outerRef.current) {
      // 先绘画x轴
      const xAxisSvg = d3.select('#xAxis-container')
        .attr('width', realWidth)
        .attr('height', height);
      xAxisSvg.html("");
      // 将x轴添加到画板
      const gx = xAxisSvg.append('g')
                    .attr('class', "xAxis")
                    .attr("transform", `translate(0,${height - padBottom})`)
                    .call(xAxis, x, timeLabelFormat);
      // 设置X轴的样式
      if(xAxisStyle) {
        const { color, axisColor, tickColor} = xAxisStyle; 
        gx.select('path').attr('stroke', axisColor || "currentColor");
        gx.selectAll('text').attr('fill', color || 'currentColor');
        gx.selectAll('line').attr('stroke', tickColor || 'currentColor')
      }

      // 绘画主体部分
      const realHeight = nodes.length * 30 > height - padBottom ? nodes.length * 30 : height - padBottom;
      const svg = d3.select<SVGElement, unknown>('#timeline')
        .attr('viewBox', `0, 0, ${realWidth}, ${realHeight}`)
        .attr('width', realWidth)
        .attr('height', realHeight);
      if(!svg.empty()) {
        svg.html("");
        // 绘画底图, 计算绘图所需真正高度
        svg.attr('viewBox', `0, 0, ${realWidth}, ${realHeight}`)
          .attr('width', realWidth)

        // 设置剪切区域
        svg.append('clipPath')
            .attr('id', 'clipView')
            .append('path')
            .attr('d', `M${padLeft},0 h${realWidth - padLeft - padRight} v${realHeight} h${-(realWidth - padLeft - padRight)} v${-realHeight}z`)

        // 将y轴添加到面板
        const formatFn = (item:any) => {
          const node =  nodes.filter(n => n.id === item);
          return node[0].name
        }
        const gy = svg.append('g')
                      .attr('class', 'yAxis')
                      .attr('transform', `translate(${padLeft}, 0)`)
                      .call(yAxis, y, formatFn)
                      .call(setYAxisStyle, realWidth - padRight - padLeft)
                      .call(setEvent, onSelect);

        /* 绘制数据点 */
        svg.append('g')
          .attr('clip-path', 'url(#clipView)')
          .attr('width', realWidth - padLeft - padRight)
          .call(drawNodes, nodes, x, y, nodeStyle);
        
        /* 绘制连线 */
        svg.call(DrawLink, nodes, links, x, y, arrowColor);

        /* 增加tooltip */
        svg.call(DrawTooltip, links);
      }
    }

  }, [realWidth, JSON.stringify(nodes), JSON.stringify(links), height, JSON.stringify(padding)])

  useEffect(() => {
    const svg = d3.select<SVGGElement, undefined>('#timeline')
                  .attr('width', realWidth);
     /* 设置缩放事件过滤 */
     zoom.filter((event) => {
      if(isBrush) {
        return false;
      }else {
        return event && !event.button;
      }
    });

    /* 设置框选事件过滤 */
    brush.filter((event) => {
      if(isBrush) {
        return !event.button;
      }else {
        return false;
      }
    })

    // 去除已经存在的框选
    svg.selectAll('rect').remove();
    /* 添加框选或者缩放 */
    if(!isBrush) {
      // 还原原有的节点样式
      svg.selectAll('.nodes circle')
         .attr('fill', nodeStyle?.color || 'red');
      svg.call(zoom)
        .transition()
        .duration(750);
    }else {
      svg.call(brush);
    }
  }, [isBrush, realWidth])

  return (
    <div className="container">
      {usBrush && <button onClick={() => setBrush(!isBrush)}>{isBrush ? '取消框选' : '框选'}</button>}
      <div ref={outerRef} style={{width: '100%'}}></div>
    </div>
  )
}

export default Timeline;