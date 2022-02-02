import * as d3 from "d3";

// svg元素点击事件
export const bindSvgEvent = (
  svg: d3.Selection<SVGSVGElement, undefined, null, undefined>,
  onSelectedNodesChange?: <T>(current: T | null, selectedData: T[]) => void
) => {
  svg.on('click', function(event){
    event.stopPropagation();
    const currentSelection = d3.select(this);
    
    // 去除节点的选中状态
    const nodes = currentSelection.selectAll('.nodes circle');
    nodes.each(function (){
      d3.select(this)
        .attr('stroke', '')
        .attr('stroke-width', '');
    })
    // 此时需要触发节点选中变化事件
    if(onSelectedNodesChange) {
      const selectedNodes = [];
      nodes.each(function (p, j){
        const current = d3.select(this);
        if(current.attr('stroke') && current.attr('stroke-width')) {
          selectedNodes.push(p);
        }
      })
      onSelectedNodesChange(null, selectedNodes);
    }
  })
}

export const unbindSvgEvent = (svg: d3.Selection<SVGSVGElement, undefined, null, undefined>) => {
  svg.on('click', null);
}