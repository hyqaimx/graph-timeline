import * as d3 from "d3";
import { INodeItem, TColors } from "@/typings/custom-data";

// 构建数据映射
export const yRange = (data:INodeItem[], padding: number[], height: number) => {
  const values = data.map(item => item.name);
  const uniqueVals = values.filter((item, index) => values.indexOf(item) === index);

  const realHeight = data.length * 30 > height - 20 ? data.length * 30 : height - 20;
  return d3.scalePoint()
           .domain([...uniqueVals])
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
  datas: INodeItem[],
  colors?: TColors,
  yAxisStyle?:{
    color?: string;
    axisColor?: string;
    tickColor?: string;
  }
) => {
  let themes: TColors = colors;

  if (!colors || colors.length === 0) {
    themes = ['#4795eb', '#419388', '#d83965'];
  } else {
    themes = colors;
  }

  // 去除y轴的竖线
  g.select('.domain').remove();
  g.selectAll('.tick')
    .each(function (d: string, i, nodes) {
      // set yAxis's nodes color
      let color;

      if (Array.isArray(themes) && themes.length > 0) {
        color = themes[i % themes.length];
      } else if (typeof themes === 'object')  {
        const val = themes[d] || '#4795eb';

        if (typeof val === 'string') {
          color = val;
        } else {
          throw new Error('when colors is a object. The attribute must a color string');
        }
      } else {
        throw new Error('colors need a string array or object');
      }
      const tick = d3.select(this);
      // add circle node in yAxis
      tick.append('circle')
        .attr('r', 6)
        .attr('fill', color);
      // 设置文本颜色，和圆形颜色保持一致，设置hover
      tick.select('text')
        .attr('fill', color)
        .attr('style', 'cursor: pointer');
      // 设置横线颜色
      tick.select('line')
        .attr('x1', supLineWidth)
        .attr('stroke', color)
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

// 抽取出绘画rect的部分
const drawRect = (g: d3.Selection<d3.BaseType, unknown, null, undefined>) => {
  const left = Number(g.select('line').attr('x2'));
  const right = Number(g.select('line').attr('x1'));
  const r = Number(g.select('circle').attr('r'));
  // 因为在某些情况下（比如初始化选中的时候）g标签添加rect并没有效果，具体原因未知，所以使用path模拟rect
  g.insert('path', ':first-child')
        .attr('d', `M0,0 h${-r} v${-r - 5} h${right - left + 3} v${(r + 5) * 2} h${left - right - 3} v${-r - 5} Z`)
        .attr('fill', '#DDD')
        .attr('fill-stroke', .2);
}

// 设置y轴的点击事件
export const setEvent = (g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, onSelect?: <T>(selectedData: T[], id: T, show: boolean) => void) => {
  let selectedData = [];
  g.selectAll('.tick')
    .each(function (d) {
      const tick = d3.select(this);
      const p = tick.select('path');
      if(!p.empty()) {
        selectedData.push(d);
      }
      tick.select('text')
        .on('click' ,function(e) {
          e.stopPropagation();
          const path = tick.select('path');
          if(path.empty()) {
            drawRect(tick);
            selectedData.push(d);  
            if(onSelect) {
              onSelect(selectedData, d, true);
            }
          }else {
            path.remove();
            selectedData = selectedData.filter(item => item !== d);
            if(onSelect) {
              onSelect(selectedData, d, false);
            }
          }
        })
    })
}

// 设置y轴项选中的情况
export const setSelect = (g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, selectedItem: string[]) => {
  g.selectAll('.tick')
    .filter(function (d: string, i) { return selectedItem.includes(d)})
    .each(function () {
      const tick = d3.select(this);
      drawRect(tick);
    })
}