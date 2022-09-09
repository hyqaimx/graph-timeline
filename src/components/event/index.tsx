import { DEFAULT_LINK_COLOR } from "@/constants";
import * as d3 from "d3";

// svg元素点击事件
export const bindSvgEvent = (
  svg: d3.Selection<SVGSVGElement, undefined, null, undefined>,
  linkStyle?: {
    color?: string;
    selectedColor?: string;
  },
  onSelectedNodesChange?: <T>(current: T | null, selectedData: T[]) => void,
  onSelectedLinksChange?: <T>(current: T | null, selectedData: T[]) => void
) => {
  svg.on('click', function (event) {
    event.stopPropagation();
    const currentSelection = d3.select(this);

    // 去除节点的选中状态
    const nodes = currentSelection.selectAll('.nodes .selected');
    // 判断当前有没有选中的节点
    if (!nodes.empty()) {
      nodes.each(function () {
        d3.select(this)
          .attr('stroke', '')
          .attr('stroke-width', '')
          .classed('selected', false);
      })
      // 此时需要触发节点选中变化事件
      if (onSelectedNodesChange) {
        onSelectedNodesChange(null, []);
      }
    }

    // 去除连线的选中状态
    const links = currentSelection.selectAll('.arrowLine .selected');
    // 判断当前有没有选中的边
    if (!links.empty()) {
      currentSelection.selectAll('.arrowLine .selected').attr('class', '')
      // 需要触发边选中事件
      // 此时需要触发节点选中变化事件
      if (onSelectedLinksChange) {
        onSelectedLinksChange(null, []);
      }
    }
  })
}

export const unbindSvgEvent = (svg: d3.Selection<SVGSVGElement, undefined, null, undefined>) => {
  svg.on('click', null);
}