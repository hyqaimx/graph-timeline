import * as d3 from 'd3';
import { INodeItem } from '@/typings/custom-data';
import { DEFAULT_BRUSH_COLOR } from '@/constants';


const getBrush = (
  data: INodeItem[],
  x: d3.ScaleTime<number, number>,
  y: d3.ScalePoint<string>,
  brushNodeColor?: string,
  onBrushChange?: (nodes: INodeItem[]) => void
) => {
  const color = brushNodeColor || DEFAULT_BRUSH_COLOR;
  /* 时间缩放 */
  const brushed = ({ selection }: any) => {
    let value = [];
    const circles = d3.selectAll<Element, unknown>(".nodes circle").data(data);
    const zoomLv = d3.zoomTransform(circles.node() as Element);
    const rx = zoomLv.rescaleX(x);

    if (selection) {
      const [[x0, y0], [x1, y1]] = selection;
      value = circles
        .attr('fill', 'gray')
        .filter(d => {
          const currentY = y(d.name);
          const currentX = rx(new Date(d.date));
          if (!currentY) return false;

          return currentX >= x0 && currentX <= x1 && currentY >= y0 && currentY <= y1;
        })
        .attr('fill', color)
        .data();
      // 调用回调函数，暴露框选节点
      if (onBrushChange) {
        onBrushChange(value);
      }
    } else {
      circles.attr('fill', color);
    }
  }
  // 声明框选并绑定事件
  const brush = d3.brush<undefined>().on('start brush end', brushed);

  return brush;
}

export default getBrush;