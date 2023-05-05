import React, { useState } from 'react';
import { GraphTimeline, INode } from 'graph-timeline';
import demo1Data from './demo1';
import './index.less';
import './iconfont/iconfont.css';

export default () => {
  const [activeNodeIds, setActiveNodeIds] = useState<string[]>([]);

  const onNodeClick = (node: INode, e: MouseEvent) => {
    console.log('e', e.button);
    if (e.button !== 2) return;

    // 右键点击选中
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
        radius: 5,
        strokeColor: 'rgba(53,127,31,0.7)',
        strokeStyle: 'solid',
        iconStyle: {
          type: 'icon',
          color: 'white',
          value: '&#xe629;',
          className: 'iconfont',
        },
      },
      SPerson1: {
        color: 'rgba(53,127,31,1)',
        radius: 5,
        strokeColor: 'rgba(53,127,31,0.7)',
        strokeStyle: 'solid',
        iconStyle: {
          type: 'text',
          color: 'white',
          value: '人',
        },
      },
      Device: {
        color: 'rgb(224,162,30)',
        iconStyle: {
          type: 'img',
          value: 'http://touxiang.fzlol.com/pic/20141216/1275_1418705548_1.jpg',
        },
      },
    },
    nodeConfig: {
      radius: 5,
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
        width: 4,
        arrowRadius: 8,
        color: 'yellow',
      },
    },
  };

  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <GraphTimeline
        {...demo1Data}
        {...graphConfig}
        yAxis={{ width: 80 }}
        style={{ height: 400, padding: 30 }}
        onNodeClick={onNodeClick}
        activeNodeIds={activeNodeIds}
      />
    </div>
  );
};
