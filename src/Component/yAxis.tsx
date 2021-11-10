import * as d3 from "d3";
import { INodeItem } from ".";

// 构建数据映射
export const yRange = (data:INodeItem[], padding: number[], height: number) => {
  const values = data.map(item => String(item.id));
  return d3.scalePoint()
           .domain([...values])
           .range([height - padding[2] , padding[0]]);
}

// 构建y轴
export const yAxis = (g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, y: d3.ScalePoint<string>, labelFormat: (data:any) => any) => {
  return g.call(d3.axisLeft(y)
            .tickFormat(labelFormat)
          )
}