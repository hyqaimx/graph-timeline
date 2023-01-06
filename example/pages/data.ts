export const data = {
  nodes: [
    { id: 'node0', size: 50, x: 100, y: 100 },
    { id: 'node1', size: 30, x: 400, y: 100 },
    { id: 'node2', size: 30 },
    { id: 'node3', size: 30 },
    { id: 'node4', size: 30 },
    { id: 'node5', size: 30 },
    { id: 'node6', size: 15 },
    { id: 'node7', size: 15 },
    { id: 'node8', size: 15 },
    { id: 'node9', size: 15 },
    { id: 'node10', size: 15 },
    { id: 'node11', size: 15 },
    { id: 'node12', size: 15 },
    { id: 'node13', size: 15 },
    { id: 'node14', size: 15 },
    { id: 'node15', size: 15 },
    { id: 'node16', size: 15 },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node1', target: 'node6' },
    { source: 'node1', target: 'node7' },
    { source: 'node2', target: 'node8' },
    { source: 'node2', target: 'node9' },
    { source: 'node2', target: 'node10' },
    { source: 'node2', target: 'node11' },
    { source: 'node2', target: 'node12' },
    { source: 'node2', target: 'node13' },
    { source: 'node3', target: 'node14' },
    { source: 'node3', target: 'node15' },
    { source: 'node3', target: 'node16' },
  ],
};

export const transNodes = (nodes) => {
  return nodes.map(item => {
    return {
      ...item,
      name: item.id
    }
  })
}

export const timelineNodes = [
  {id:"1",name:"事件1", nodeId: '1', nodeName: '节点1', "date":"2022-08-04 00:00:00"},
  {id:"2",name:"事件2", nodeId: '2', nodeName: '节点1', "date":"2022-08-04 00:00:00"},
  {id:"3",name:"事件3", nodeId: '2', nodeName: '节点1', "date":"2022-08-05 00:00:00"},
  {id:"4",name:"事件4", nodeId: '3', nodeName: '节点3', "date":"2022-08-06 00:00:00"},
  {id:"5",name:"事件5", nodeId: '3', nodeName: '节点3', "date":"2022-08-05 00:00:00"},
  {id:"6",name:"事件6", nodeId: '4', nodeName: '节点4', "date":"2022-08-06 00:00:00"},
  {id:"7",name:"事件7", nodeId: '5', nodeName: '节点3', "date":"2022-08-07 00:00:00"},
  {id:"8",name:"事件8", nodeId: '5', nodeName: '节点3', "date":"2022-08-07 00:00:00"},
  {id:"9",name:"事件9", nodeId: '6', nodeName: '节点3', "date":"2022-08-07 00:00:00"},
  {id:"10",name:"事件10", nodeId: '7', nodeName: '节点3', "date":"2022-08-07 00:00:00"},
  {id:"11",name:"事件11", nodeId: '8', nodeName: '节点3', "date":"2022-08-07 00:00:00"},
  {id:"12",name:"事件12", nodeId: '9', nodeName: '节点3', "date":"2022-08-07 00:00:00"},
  {id:"14",name:"事件14", nodeId: '10', nodeName: '节点4', "date":"2022-08-07 00:00:00"},
  {id:"15",name:"事件15", nodeId: '11', nodeName: '节点5', "date":"2022-08-07 00:00:00"},
  {id:"16",name:"事件16", nodeId: '12', nodeName: '节点6', "date":"2022-08-07 00:00:00"},
  {id:"17",name:"事件17", nodeId: '13', nodeName: '节点7', "date":"2022-08-07 00:00:00"},
  {id:"18",name:"事件18", nodeId: '14', nodeName: '节点8', "date":"2022-08-07 00:00:00"},
  {id:"19",name:"事件19", nodeId: '15', nodeName: '节点9', "date":"2022-08-07 00:00:00"},
  {id:"20",name:"事件20", nodeId: '16', nodeName: '节点10', "date":"2022-08-07 00:00:00"},
  {id:"21",name:"事件21", nodeId: '17', nodeName: '节点11', "date":"2022-08-07 00:00:00"},
  {id:"22",name:"事件22", nodeId: '18', nodeName: '节点12', "date":"2022-08-07 00:00:00"},
  {id:"23",name:"事件23", nodeId: '19', nodeName: '节点13', "date":"2022-08-07 00:00:00"},
  {id:"24",name:"事件24", nodeId: '20', nodeName: '节点14', "date":"2022-08-07 00:00:00"},
]
