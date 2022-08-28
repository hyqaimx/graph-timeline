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
  { id: '1', name: 'node0', date: '2022-07-19', color: 'red' },
  { id: '2', name: 'node0', date: '2022-05-29' },
  { id: '3', name: 'node1', date: '2022-04-12' },
  { id: '4', name: 'node1', date: '2022-03-05' },
  { id: '5', name: 'node2', date: '2022-03-14' },
  { id: '6', name: 'node2', date: '2022-05-19' },
  { id: '7', name: 'node5', date: '2022-06-09' },
  { id: '8', name: 'node5', date: '2022-06-20' },
  { id: '9', name: 'node5', date: '2022-06-25' },
]
