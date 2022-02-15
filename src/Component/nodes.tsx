import * as d3 from 'd3';
import { INodeItem } from '.';

const drawNodes = (
  g:d3.Selection<SVGGElement, undefined, HTMLElement, undefined>,
  data: INodeItem[],
  x:d3.ScaleTime<number, number, never>,
  y:d3.ScalePoint<string>,
  nodeStyle?: {
    color?: string;
    size?: number;
  },
  onSelectedNodesChange?: <T>(current: T, selectedNodes: T[]) => void
) => {
  let color = 'red';
  let size = 5;
  if(nodeStyle) {
    if(nodeStyle.color) {
      color = nodeStyle.color;
    }
    if(nodeStyle.size) {
      size = nodeStyle.size;
    }
  }

  const nodesSelection = g
    .attr("class", "nodes")
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(new Date(d.date)))
    .attr('cy', d => y(String(d.name)) || null)
    .attr('r', size)
    .attr('fill', color);
  
  // 增加点击事件
  function clickHandle(event, data) {
    const { isTrusted, altKey } = event;
    event.stopPropagation();
    
    // 用户点击触发
    if(isTrusted) {
      const nodes = d3.select('.nodes').selectAll('circle');
      const currentCircle = d3.select(this);
      // 如果是按下alt键代表多选
      if(!altKey) {
        nodes.each(function() {
          d3.select(this)
            .attr('stroke', '')
            .attr('stroke-width', 0)
            .classed('selected', false);
        })
      }
      currentCircle
        .attr('stroke', 'blue')
        .attr('stroke-width',3)
        .classed('selected', false);

      if(onSelectedNodesChange) {
        const selectedNodes = [];
        nodes.each(function (p, j){
          const current = d3.select(this);
          if(current.attr('stroke') && current.attr('stroke-width')) {
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