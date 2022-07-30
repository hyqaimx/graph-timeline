import React, { useEffect, useRef, useState } from 'react';
import G6 from '@antv/g6';
import { data, timelineNodes } from './data';
import GraphTimeLine from '../../dist';
import './index.css'

let graph = null;
const App = () => { 
  const [selectedNodes, setSelectNodes] = useState([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectEvent = (e: any) => {
    const { selectedItems, select } = e;
    const modelData = selectedItems.nodes.map(item => item.getModel());
    setSelectNodes(modelData.map(item => item.id))
  }
  
  useEffect(() => {
    // 初始化G6实例
    if(containerRef.current) {
      graph = new G6.Graph({
        container: containerRef.current,
        width: containerRef.current.clientWidth,
        height: 400,
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: (d) => {
            if (d.source.id === 'node0') {
              return 100;
            }
            return 30;
          },
          nodeStrength: (d) => {
            if (d.isLeaf) {
              return -50;
            }
            return -10;
          },
          edgeStrength: (d) => {
            if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
              return 0.7;
            }
            return 0.1;
          },
        },
        modes: {
          default: ['click-select', 'drag-node'],
          altSelect: [
            {
              type: 'click-select',
              trigger: 'alt',
            },
            'drag-node',
          ],
        },
        defaultNode: {
          color: '#5B8FF9',
        },
        nodeStateStyles: {
          selected: {
            color: '#000'
          }
        }
      });

      graph.on('nodeselectchange', selectEvent)
      
      graph.data(data);
      graph.render();
    };
  }, []);

  const handleNodeChange = (selectedData, current) => {
    const nodes = graph.getNodes();
    nodes.forEach(item => {
      const name = item.getModel().id;
      graph.setItemState(item, 'selected', selectedData.includes(name))
    })
  }

  return (
    <>
      <div ref={containerRef}></div>
      <div>
        <GraphTimeLine
          nodes={timelineNodes}
          selectedItem={selectedNodes}
          links={[]}
          onSelect={handleNodeChange}
        />
      </div>
    </>
  )
}

export default App;