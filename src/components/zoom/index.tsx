import * as d3 from 'd3';
import { INodeItem } from '@/typings/custom-data';
import { xAxis } from '@/components/xAxis';
import { DEFAULT_NODE_SIZE } from '@/constants';

const getZoom = (
  data: INodeItem[],
  x: d3.ScaleTime<number, number>,
  y: d3.ScalePoint<string>,
  nodeStyle,
  xAxisStyle?: {
    color?: string;
    axisColor?: string;
    tickColor?: string;
  },
  timeLabelFormat?: (date: Date) => string
) => {
  /* 时间缩放 */
  const zoomed = (event: any) => {
    // 获取节点大小
    const nodeSize = nodeStyle?.size || DEFAULT_NODE_SIZE;
    // 重新计算比例尺
    const rx = event.transform.rescaleX(x);
    // 重新计算点位置
    d3.selectAll(".nodes circle")
      .attr('cx', (d: any) => rx(new Date(d.date)))
    // 重新计算连线位置
    d3.selectAll(".arrowLine path")
      .attr('d', (d: any) => {
        const sourceData = data.filter(item => item.id === d.source)[0];
        const targetData = data.filter(item => item.id === d.target)[0];
        if (!sourceData || !targetData) return "";
        const x1 = rx(new Date(sourceData.date));
        const x2 = rx(new Date(targetData.date));
        const y1 = y(sourceData.name);
        const y2 = y(targetData.name);
        return `M ${x1},${y1} L ${x2},${y2 > y1 ? y2 - (nodeSize * 6 / 5) : y2 + (nodeSize * 6 / 5)}`;
      })

    d3.select<SVGGElement, unknown>('#xAxis-container .xAxis').call(xAxis, rx, timeLabelFormat);
    // 对新的x轴进行样式调整
    if (xAxisStyle) {
      const { color, axisColor, tickColor } = xAxisStyle;
      const gx = d3.select('.xAxis');
      gx.selectAll('text').attr('fill', color || 'currentColor');
      gx.selectAll('line').attr('stroke', tickColor || 'currentColoe');
    }
  }

  return d3.zoom<SVGGElement, undefined>()
    .on("zoom", zoomed);
}

export default getZoom;