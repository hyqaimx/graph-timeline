import * as d3 from "d3";
import { INodeItem } from "@/typings/custom-data";

// 构建数据映射
export const xRange = (data:INodeItem[], padding: number[], width: number) => {
  const minAndMax = d3.extent(data, d => d.date).map(item => item ? new Date(item) : new Date());
  return d3.scaleTime()
      .domain(minAndMax)
      .range([padding[3], width - padding[1]])
      .nice()
}

export const xAxis = (g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, x: d3.ScaleTime<number, number, never>, timeLabelFormat?:(date: Date) => string) => {
  return g.call(
    d3.axisBottom(x)
      .tickFormat(
        function (d, index) {
          // 此处不能使用this来获取缩放等级，因为x轴是单独在一个svg中渲染的，而这个svg没有绑定缩放事件
          const zoomLv = d3.zoomTransform(d3.select<SVGGElement, unknown>('#graph-timeline-svg').node());
          const date = new Date(d.valueOf());
          if(timeLabelFormat) {
            return timeLabelFormat(date);
          }else {
            const year = date.getFullYear();
            const month = date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            const hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
            const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
            const seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
            
            if(zoomLv.k <= 0.1) {
              return `${year}-${month}-${day}`;
            }else if(zoomLv.k > 10){
              return `${hour}:${minutes}:${seconds}`;
            }else {
              return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`; 
            }
          }
        }
      )
  )
}