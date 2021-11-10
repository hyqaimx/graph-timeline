import * as d3 from "d3";
import { INodeItem } from ".";

// 构建数据映射
export const xRange = (data:INodeItem[], padding: number[], width: number) => {
  const minAndMax = d3.extent(data, d => d.date).map(item => item ? new Date(item) : new Date());
  return d3.scaleTime()
      .domain(minAndMax)
      .range([padding[3], width - padding[1]])
}

export const xAxis = (g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, x: d3.ScaleTime<number, number, never>) => {
  return g.call(d3.axisBottom(x))
}