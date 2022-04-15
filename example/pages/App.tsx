import React, { useEffect, useRef, useState } from 'react';
import G6, { Graph } from '@antv/g6';
import { data } from './data';

let g6Instance = null;
const App = () => { 
  const [nodes, setNodes] = useState<Array<any>>([]);
  const [edges, setEdges] = useState<Array<any>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    console.log(containerRef.current);
    // 初始化G6实例
    if(containerRef.current) {
      g6Instance = new G6.Graph({
        container: containerRef.current,
        height: 500,
        layout: {
          type: 'force'
        },
        defaultNode: {
          color: '#5B8FF9',
        },
        modes: {
          default: ['drag-canvas', 'drag-node']
        },
      })
      g6Instance.data(data);
      g6Instance.render();
      console.log(g6Instance);
    };
  }, []);

  return <div ref={containerRef}></div>
}

export default App;