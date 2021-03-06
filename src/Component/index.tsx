import * as d3 from "d3";
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import DrawLink from "./link";
import drawNodes from "./nodes";
import getZoom from "./zoom";
import { xAxis, xRange } from "./xAxis";
import { setEvent, setSelect, setYAxisStyle, yAxis, yRange } from "./yAxis";
import getBrush from "./brush";
import { DrawTooltip } from "./tooltip";
import BrushImg from '../assets/usebrush.png';
import DisableBrush from '../assets/unusebrush.png';
import './style/index.less';
import { bindSvgEvent, unbindSvgEvent } from "./event";


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
  colors?: string[];
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
    size?: number;
    selectedColor?: string;
  };
  brushNodeColor?: string;
  link?: {
    color?: string;
    selectedColor?: string;
  }
}

export interface ITimelineProps{
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
  onSelect?:<T>(selectedData: T[], current: T, show: boolean) => void;
  onSelectedNodesChange?: <T>(current: T | null, selectedNodes: T[]) => void;
  onSelectedLinksChange?: <T>(current: T | null, selectedNodes: T[]) => void;
}

const Timeline = ({
  width, 
  height = 300,
  padding = [20, 20, 20, 50],
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
}:ITimelineProps) => {
  // const
  const [padTop, padRight, padBottom, padLeft] = padding;
  const {xAxis: xAxisStyle, node: nodeStyle,link, background, brushNodeColor, colors} = options;
  const { show: showTooltip, format: tooltipFormat } = tooltip;

  const [realWidth, setWidth] = useState<number>(1000);
  const [isBrush, setBrush] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ????????????????????????????????????
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
          throw Error("??????????????????????????????'100%'")
        }
      }

      // ???????????????
      // ????????????x?????????
      const xAxisSvg = d3.create('svg')
        .attr('id', 'xAxis-container')
        .attr('width', realWidth)
        .attr('height', height)
        .style('position', 'absolute')
        .style('left', 0)
        .style("z-index", -1)
        .style("pointer-events", "none");
      
      // ???????????????????????????
      const main = d3.create('div')
        .style('overflow-y', 'auto')
        .style('height', `${height - padBottom}px`)
        .attr('id', 'graph-timeline-main');
      // ???????????????
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
    }

    // ??????????????????
    return () => {
      d3.select('#graph-timeline-svg').call(unbindSvgEvent);
      window.removeEventListener('resize', listener);
    }
  }, [])

  const {x, y, zoom, brush} = useMemo(() => {
    const x = xRange(nodes,padding, realWidth);
    const y = yRange(nodes, padding, height - padBottom);
    const zoom = getZoom(nodes, x, y, nodeStyle, xAxisStyle,timeLabelFormat);
    const brush = getBrush(nodes, x, y, brushNodeColor, onBrushChange);
    return {x, y, zoom, brush};
  }, [nodes, realWidth])

  useEffect(() => {
    if(outerRef.current) {
      // ?????????x???
      const xAxisSvg = d3.select('#xAxis-container')
        .attr('width', realWidth)
        .attr('height', height);
      xAxisSvg.html("");
      // ???x??????????????????
      const gx = xAxisSvg.append('g')
                    .attr('class', "xAxis")
                    .attr("transform", `translate(0,${height - padBottom})`)
                    .call(xAxis, x, timeLabelFormat);
      // ??????X????????????
      if(xAxisStyle) {
        const { color, axisColor, tickColor} = xAxisStyle; 
        gx.select('path').attr('stroke', axisColor || "currentColor");
        gx.selectAll('text').attr('fill', color || 'currentColor');
        gx.selectAll('line').attr('stroke', tickColor || 'currentColor')
      }

      // ??????????????????
      const realHeight = nodes.length * 30 > height - padBottom ? nodes.length * 30 : height - padBottom;
      const svg = d3.select<SVGElement, unknown>('#graph-timeline-svg')
        .attr('viewBox', `0, 0, ${realWidth}, ${realHeight}`)
        .attr('width', realWidth)
        .attr('height', realHeight);
      if(!svg.empty()) {
        svg.html("");
        // ????????????, ??????????????????????????????
        svg.attr('viewBox', `0, 0, ${realWidth}, ${realHeight}`)
          .attr('width', realWidth)

        // ??????????????????
        svg.append('clipPath')
            .attr('id', 'clipView')
            .append('path')
            .attr('d', `M${padLeft},0 h${realWidth - padLeft - padRight} v${realHeight} h${-(realWidth - padLeft - padRight)} v${-realHeight}z`)

        // ???y??????????????????
        svg.append('g')
          .attr('class', 'yAxis')
          .attr('transform', `translate(${padLeft}, 0)`)
          .call(yAxis, y)
          .call(setYAxisStyle, realWidth - padRight - padLeft, nodes, colors)
          .call(setSelect, selectedItem)
          .call(setEvent, onSelect)

        /* ???????????? */
        svg.call(DrawLink, nodes, links, x, y, onSelectedLinksChange, link, nodeStyle);

        /* ??????????????? */
        svg.append('g')
          .attr('clip-path', 'url(#clipView)')
          .attr('width', realWidth - padLeft - padRight)
          .call(drawNodes, nodes, x, y, nodeStyle, onSelectedNodesChange);

        /* ??????tooltip */
        svg.call(DrawTooltip, links, nodes, showTooltip, tooltipFormat);
      }
    }
  }, [realWidth, height, JSON.stringify(nodes), JSON.stringify(links), JSON.stringify(padding), JSON.stringify(selectedItem)])

  useEffect(() => {
    const svg = d3.select<SVGGElement, undefined>('#graph-timeline-svg')
                  .attr('width', realWidth);
     /* ???????????????????????? */
     zoom.filter((event) => {
      if(isBrush) {
        return false;
      }else {
        return event && !event.button;
      }
    });

    /* ???????????????????????? */
    brush.filter((event) => {
      if(isBrush) {
        return !event.button;
      }else {
        return false;
      }
    })

    // ???????????????????????????
    svg.selectAll('rect').remove();
    /* ???????????????????????? */
    if(!isBrush) {
      // ???????????????????????????
      svg.selectAll('.nodes circle')
         .attr('fill', nodeStyle?.color || '#F56565');
      svg.call(zoom)
        .transition()
        .duration(750);
    }else {
      svg.call(brush);
    }
  }, [isBrush, realWidth])

  return (
    <div className="container" style={{position: 'relative'}}>
      { useBrush &&
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
            <img src={BrushImg} alt='????????????' /> :
            <img src={DisableBrush} alt='??????' />
          }
        </div>
      }
      <div ref={outerRef} style={{width: '100%'}}></div>
    </div>
  )
}

export default Timeline;