import * as d3 from "d3";
import { INodeItem } from ".";

// 构建数据映射
export const yRange = (data:INodeItem[], padding: number[], height: number) => {
  const values = data.map(item => item.id);
  const realHeight = data.length * 30 > height - 20 ? data.length * 30 : height - 20;
  return d3.scalePoint()
           .domain([...values])
           .range([realHeight - padding[2] , padding[0]]);
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
  supLineWidth: number,
  yAxisStyle?:{
    color?: string;
    axisColor?: string;
    tickColor?: string;
  }
) => {
  const colors = ['#419388', '#4795eb', '#d83965'];
  // 去除y轴的竖线
  g.select('.domain').remove();

  g.selectAll('.tick')
    .each(function (d, i) {
      const tick = d3.select(this);
      // 在各项开头增加圆形节点
      tick.append('circle')
        .attr('r', 6)
        .attr('fill', colors[i % 3] );
      // 设置文本颜色，和圆形颜色保持一致
      tick.select('text').attr('fill', colors[i % 3]);
      // 设置横线颜色
      tick.select('line')
        .attr('x1', supLineWidth)
        .attr('stroke', colors[i % 3] )
        .attr('stroke-width', 2);
    });

  // 设置y轴的样式
  if(yAxisStyle) {
    // const { color, axisColor, tickColor } = yAxisStyle;
    // g.select('path').attr('stroke', axisColor || 'currentColor');
    // g.selectAll('text').attr('fill', color || 'currentColor');
    // g.selectAll('line').attr('stroke', tickColor || 'currentColor');
  }
}

// 设置y轴的点击事件
export const setEvent = (g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, onSelect?: (d:unknown, show: boolean) => void) => {
  const colors = ['#419388', '#4795eb', '#d83965'];
  g.selectAll('.tick')
    .each(function (d) {
      const tick = d3.select(this);
      const left = Number(tick.select('line').attr('x2'));
      const right = Number(tick.select('line').attr('x1'));
      const r = Number(tick.select('circle').attr('r'));
      tick.select('text')
        .on('click' ,function() {
          const rect = d3.select('rect');
          if(rect.empty()) {
            tick.insert('rect', ':first-child')
              .attr('x', left - 3)
              .attr('y', - r - 5)
              .attr('width', right - left + 3)
              .attr('height', r * 2 + 10)
              .attr('fill', '#AAA')
              .attr('fill-stroke', .2);
            if(onSelect) {
              onSelect(d, true);
            }
          }else {
            rect.remove();
            if(onSelect) {
              onSelect(d, false);
            }
          }
        })
    })
}