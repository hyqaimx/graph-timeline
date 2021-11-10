import * as d3 from "d3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import DrawLink from "./link";
import drawNodes from "./nodes";
import getZoom from "./zoom";
import { xAxis, xRange } from "./xAxis";
import { yAxis, yRange } from "./yAxis";
import getBrush from "./brush";
import { DrawTooltip } from "./tooltip";


export interface INodeItem {
  id: string | number | symbol;
  name: string;
  date: string;
  [prop: string]: any;
} 
export interface ILinkItem {
  source: string | number | symbol;
  target: string | number | symbol;
}

export interface IOptions {
  background?: string;
  xAxis?: {
    color?: string;
    axisColor?: string;
    tickColor?: string;
  };
  yAxis?: {
    color?: string;
    axisColor?: string;
    tickColor?: string;
  };
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
  options?: IOptions;
  onBrushChange?: (value: INodeItem[]) => void;
}

const Timeline = ({
  width, 
  height = 300,
  padding = [20, 20, 20, 50],
  nodes = [],
  links = [],
  options = {},
  onBrushChange
}:ITimelineProps) => {
  // const
  const [padTop, padRight, padBottom, padLeft] = padding;
  const {xAxis: xAxisStyle, yAxis: yAxisStyle, node: nodeStyle, arrowColor, background, brushNodeColor} = options;

  const [realWidth, setWidth] = useState<number>(1000);
  const [isBrush, setBrush] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 设置容器的宽度以及自适应
    const listener = () => {
      if(outerRef.current) {
        setWidth(outerRef.current.clientWidth);
      }
    }

    if(outerRef.current) {
      outerRef.current.innerHTML = "";
      if(!width || width === '100%') {
        setWidth(outerRef.current.clientWidth);
        window.addEventListener('resize', listener);
      }else {
        if(typeof width === 'number') {
          setWidth(width);
        }else {
          throw Error("宽度只能设置为数字或'100%'")
        }
      }

      // 初始化画板
      const svg = d3.create('svg')
      .attr('viewBox', `0, 0, ${realWidth}, ${height}`)
      .attr('width', realWidth)
      .attr('height', height)
      .attr('id', 'timeline')
      .style("background-color", background || '#F5F5F5')

      outerRef.current.append(svg.node() || "<div>build fail</div>")
    }

    // 卸载事件监听
    return () => {
      window.removeEventListener('resize', listener);
    }
  }, [])

  const {x, y, zoom, brush} = useMemo(() => {
    const x = xRange(nodes,padding, realWidth);
    const y = yRange(nodes, padding, height);
    const zoom = getZoom(nodes, x, y, xAxisStyle);
    const brush = getBrush(nodes, x, y, brushNodeColor, onBrushChange);
    return {x, y, zoom, brush};
  }, [nodes, realWidth, height])

  useEffect(() => {
    if(outerRef.current) {
      // 绘画底图
        const svg = d3.select<SVGGElement, undefined>('#timeline')
        .attr('viewBox', `0, 0, ${realWidth}, ${height}`)
        .attr('width', realWidth)
        svg.html("");

      // 将x轴添加到画板
      const gx = svg.append('g')
                    .attr('class', "xAxis")
                    .attr("transform", `translate(0,${height - padBottom})`)
                    .call(xAxis, x);
      // 设置X轴的样式
      if(xAxisStyle) {
        const { color, axisColor, tickColor} = xAxisStyle; 
        gx.select('path').attr('stroke', axisColor || "currentColor");
        gx.selectAll('text').attr('fill', color || 'currentColor');
        gx.selectAll('line').attr('stroke', tickColor || 'currentColor')
      }
      // 将y轴添加到面板
      const formatFn = (item:any) => {
        const node =  nodes.filter(n => n.id === item);
        return node[0].name
      }
      const gy = svg.append('g')
                    .attr('class', 'yAxis')
                    .attr('transform', `translate(${padLeft}, 0)`)
                    .call(yAxis, y, formatFn);
      // 设置y轴的样式
      if(yAxisStyle) {
        const { color, axisColor, tickColor } = yAxisStyle;
        gy.select('path').attr('stroke', axisColor || 'currentColor');
        gy.selectAll('text').attr('fill', color || 'currentColor');
        gy.selectAll('line').attr('stroke', tickColor || 'currentColor');
      }
      // 绘制横向延长线
      gy.selectAll(".yAxis line")
        .attr('x1', realWidth - padRight - padLeft)
        .attr('stroke-opacity', '0.3');

      /* 绘制数据点 */
      const circles = svg.append('g').call(drawNodes, nodes, x, y, nodeStyle);
      
      /* 绘制连线 */
      svg.call(DrawLink, nodes, links, x, y, arrowColor);

      /* 增加tooltip */
      svg.call(DrawTooltip, links);

      outerRef.current.append(svg.node() || 'build fail');
    }

  }, [realWidth, JSON.stringify(nodes), JSON.stringify(links), height, JSON.stringify(padding)])

  useEffect(() => {
    const svg = d3.select<SVGGElement, undefined>('#timeline')
                  .attr('viewBox', `0, 0, ${realWidth}, ${height}`)
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
  }, [isBrush, realWidth, height])

  return (
    <div className="container">
      <button onClick={() => setBrush(!isBrush)}>{isBrush ? '取消框选' : '框选'}</button>
      <div ref={outerRef} style={{width: '100%'}}></div>
    </div>
  )
}

export default Timeline;