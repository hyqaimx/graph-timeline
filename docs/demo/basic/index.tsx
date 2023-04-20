import React, { useEffect, useState } from 'react';
import { GraphTimeline, INode } from 'graph-timeline';
import demo1Data from './demo1';
import './index.less';

export default () => {
  const [activeNodeIds, setActiveNodeIds] = useState<string[]>([]);

  const onNodeClick = (node: INode) => {
    const include = activeNodeIds.includes(node.id);
    setActiveNodeIds(
      !include ? [...activeNodeIds, node.id] : activeNodeIds.filter((id) => id !== node.id),
    );
  };

  const graphConfig = {
    nodeGroupBy: 'group',
    nodeGroups: {
      SPerson: {
        color: 'rgba(53,127,31,1)',
        radius: 4,
        strokeColor: 'rgba(53,127,31,0.7)',
        strokeStyle: 'solid',
      },
    },
    nodeConfig: {
      radius: 4,
      color: 'rgba(255,0,0,1)',
      strokeOpacity: 0.3,
      strokeColor: 'rgba(255,0,0,.7)',
      strokeStyle: 'dashed',
    },
    edgeConfig: {
      width: 1,
      reverse: true,
    },
    edgeGroupBy: 'group',
    edgeGroups: {
      COMPANY: {
        width: 2,
        color: 'yellow',
      },
    },
  };
  return (
    <GraphTimeline
      {...demo1Data}
      {...graphConfig}
      yAxis={{ width: 80 }}
      style={{ height: 400, padding: 30 }}
      onNodeClick={onNodeClick}
      activeNodeIds={activeNodeIds}
    />
  );
};
