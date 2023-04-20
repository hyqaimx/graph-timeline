import * as d3 from "d3";
import { INodeItem, IOptions, TColors } from "@/typings/custom-data";
import { calcHeight, getThemes } from "@/utils";
import { DEFAULT_LINE_WIDTH, DEFAULT_THEMES, DEFAULT_VERTEX_SIZE } from "@/constants";

// 构建数据映射
export const yRange = (data: INodeItem[], padding: number[], height: number, yAxisStyle: IOptions['yAxis'] = {}) => {
  const { direction } = yAxisStyle;
  const values = data.map(item => String(item.nodeId));
  const uniqueVals = values.filter((item, index) => values.indexOf(item) === index);

  const realHeight = calcHeight(data, height - 20);
  const range = [padding[0], realHeight - padding[2]];
  return d3.scalePoint()
    .domain([...uniqueVals])
    .range(direction === 'topToBottom' ? range : range.reverse());
}

// 构建y轴
export const yAxis = (
  g: d3.Selection<SVGGElement, undefined, HTMLElement, undefined>,
  y: d3.ScalePoint<string>,
  data: INodeItem[],
  labelFormat: (id: string, index: number) => string
) => {
  return g.call(d3.axisLeft(y)
    .tickFormat((domainValue: any, index: number) => {
      if (labelFormat) {
        return labelFormat(domainValue, index)
      }

      // 根据ID获取到数据中的name
      return data.find(item => String(item.nodeId) === domainValue).nodeName || '';
    })
  )
}

// 设置y轴得展示样式
export const setYAxisStyle = (
  g: d3.Selection<SVGGElement, undefined, HTMLElement, undefined>,
  supLineWidth: number,
  datas: INodeItem[],
  colors?: TColors,
  yAxisStyle?: {
    color?: string;
    axisColor?: string;
    tickColor?: string;
  }
) => {
  const themes: TColors = getThemes(colors);

  // 去除y轴的竖线
  g.select('.domain').remove();
  g.selectAll('.tick')
    .each(function (d: string, i, nodes) {
      // set yAxis's nodes color
      let color;

      if (Array.isArray(themes) && themes.length > 0) {
        color = themes[i % themes.length];
      } else if (typeof themes === 'object') {
        const val = themes[d] || DEFAULT_THEMES[i % DEFAULT_THEMES.length];

        if (typeof val !== 'string') throw new Error('when colors is an object. The attribute must be a color string');
        
        color = val;
      } else {
        throw new Error('colors needs to be a string array or an object');
      }
      const tick = d3.select(this);
      // add circle node in yAxis
      tick.append('circle')
        .attr('r', DEFAULT_VERTEX_SIZE)
        .attr('fill', color);
      // 设置文本颜色，和圆形颜色保持一致，设置hover
      tick.select('text')
        .attr('fill', color)
        .attr('style', 'cursor: pointer');
      // 设置横线颜色
      tick.select('line')
        .attr('x1', supLineWidth)
        .attr('stroke', yAxisStyle?.tickColor ||  color)
        .attr('stroke', '#e5e5e5')
        .attr('stroke-width', DEFAULT_LINE_WIDTH);
    });

  // 设置y轴的样式
  if (yAxisStyle) {
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
export const setEvent = (g: d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, onSelect?: <T>(selectedData: T[], id: T, show: boolean) => void) => {
  let selectedData = [];
  g.selectAll('.tick')
    .each(function (d) {
      const tick = d3.select(this);
      const p = tick.select('path');
      if (!p.empty()) {
        selectedData.push(d);
      }
      tick.select('text')
        .on('click', function (e) {
          e.stopPropagation();
          const path = tick.select('path');
          if (path.empty()) {
            drawRect(tick);
            selectedData.push(d);
            if (onSelect) {
              onSelect(selectedData, d, true);
            }
          } else {
            path.remove();
            selectedData = selectedData.filter(item => item !== d);
            if (onSelect) {
              onSelect(selectedData, d, false);
            }
          }
        })
    })
}

// 设置y轴项选中的情况
export const setSelect = (g: d3.Selection<SVGGElement, undefined, HTMLElement, undefined>, selectedItem: string[]) => {
  g.selectAll('.tick')
    .each(function (d: string) {
      const tick = d3.select(this);
      const path = tick.selectAll('path');

      if (selectedItem.includes(d)) {
        if (path.empty()) {
          drawRect(tick);
        }
      } else {
        path.remove()
      }
    })
}