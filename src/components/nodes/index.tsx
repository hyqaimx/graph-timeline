import * as d3 from 'd3';
import { INodeItem, TColors } from '@/typings/custom-data';
import { DEFAULT_NODE_COLOR, DEFAULT_NODE_SELECTED_COLOR, DEFAULT_NODE_SIZE, DEFAULT_THEMES } from '@/constants';

const drawNodes = (
  g: d3.Selection<SVGGElement, undefined, HTMLElement, undefined>,
  data: INodeItem[],
  x: d3.ScaleTime<number, number, never>,
  y: d3.ScalePoint<string>,
  nodeStyle?: {
    color?: string;
    size?: number;
    selectedColor?: string;
  },
  colors?: TColors,
  onSelectedNodesChange?: <T>(current: T, selectedNodes: T[]) => void
) => {
  let color = nodeStyle?.color || DEFAULT_NODE_COLOR;
  let selectedColor = nodeStyle?.selectedColor || DEFAULT_NODE_SELECTED_COLOR;
  const size = nodeStyle?.size || DEFAULT_NODE_SIZE;

  const nodesSelection = g
    .attr("class", "nodes")
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(new Date(d.date)))
    .attr('cy', d => y(String(d.name)) || null)
    .attr('r', size)
    .attr('d-id', d => d.id)
    .each(function (d: INodeItem, i, nodes) {
      const group = d.name;

      if (d.color) {
        // 节点颜色
        color = d.color;
      } else {
        // 节点颜色和 yAxis 顶点颜色保持一致
        const currentGroup = d3.selectAll('.tick circle').filter(function (d: string) {
          return d === group;
        });

        color = currentGroup.attr('fill');
      }

      const node = d3.select(this);

      node.attr('fill', color);
    });

  // 增加点击事件
  function clickHandle(event, data) {
    const { isTrusted, altKey } = event;
    event.stopPropagation();

    // 用户点击触发
    if (isTrusted) {
      const nodes = d3.select('.nodes').selectAll('circle');
      const currentCircle = d3.select(this);
      // 如果是按下alt键代表多选
      if (!altKey) {
        nodes.each(function () {
          d3.select(this)
            .attr('stroke', '')
            .attr('stroke-width', 0)
            .classed('selected', false);
        })
      }
      currentCircle
        .attr('stroke', selectedColor)
        .attr('stroke-width', 3)
        .classed('selected', true);

      if (onSelectedNodesChange) {
        const selectedNodes = [];
        nodes.each(function (p, j) {
          const current = d3.select(this);
          if (current.attr('stroke') && current.attr('stroke-width')) {
            selectedNodes.push(p);
          }
        })
        onSelectedNodesChange(data, selectedNodes);
      }
    }
  }
  nodesSelection.on('click', clickHandle)

  return nodesSelection;
}

export default drawNodes;