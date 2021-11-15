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

// 设置y轴得展示样式
export const setYAxisStyle = (
  g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>,
  y: d3.ScalePoint<string>,
  data: INodeItem[],
  supLineWidth: number,
  yAxisStyle?:{
    color?: string;
    axisColor?: string;
    tickColor?: string;
  }
) => {
  const colors = ['#419388', '#4795eb', '#d83965'];

  const values = data.map(item => String(item.id));
  // 去除y轴的竖线
  g.select('.domain').remove();
  // 在各项开头增加圆形节点
  g.selectAll('.tick circle')
    .data(values)
    .join('circle')
    .attr('cx', 0)
    .attr('cy', d => y(d))
    .attr('r', 6)
    .attr('fill', (d, i) => colors[i % 3])
  // 设置文本颜色，和圆形颜色保持一致
  g.selectAll('.tick text')
    .attr('fill', (d, i) => colors[i % 3])
  // 设置横线颜色
  g.selectAll('.tick line')
    .attr('x1', supLineWidth)
    .attr('stroke', (d, i) => colors[i % 3])
    .attr('stroke-width', 2);

  // 设置y轴的样式
  if(yAxisStyle) {
    // const { color, axisColor, tickColor } = yAxisStyle;
    // g.select('path').attr('stroke', axisColor || 'currentColor');
    // g.selectAll('text').attr('fill', color || 'currentColor');
    // g.selectAll('line').attr('stroke', tickColor || 'currentColor');
  }
}