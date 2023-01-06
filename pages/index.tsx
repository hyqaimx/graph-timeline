import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { nodes as ns, links as ls } from './data';
import GraphTimeLine from '../src';
import './index.less'

const App = () => {
  const [nodes, setNodes] = useState([
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
  ]);
  const [links, setLinks] = useState([
    {source: '1', target: '2'},
    {source: '3', target: '5'},
  ]);

  const [selectedItem, setSelectedItem] = useState(['1']);

  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 5000)
  // }, [])

  // const newData = useMemo(() => {
  //   return nodes.map(item => ({
  //     ...item,
  //     nodeId: Math.round(Math.random() * 30),
  //     nodeName: item.name
  //   }))
  // }, [nodes])

  return (
    <GraphTimeLine
      height={500}
      nodes={nodes}
      links={links}
      // useBrush={false}
      options={{
        colors: {
          '节点0': 'purple',
        },
        yAxis: {
          tickColor: '#e5e5e5',
          direction: 'topToBottom'
        },
        link: {
          selectedColor: 'yellow'
        }
      }}
      tooltip={{
        show: true
      }}
      selectedItem={selectedItem}
      onBrushChange={ (value) => {console.log(value)}}
      // timeLabelFormat={ (date) => date.toLocaleDateString()}
      onSelect={(selectedData, show, d) => {console.log(selectedData, d, show)}}
      onSelectedNodesChange={
        (current, selectedData) => {
          console.log('onSelectedNodesChange', 'current', current);
          console.log('onSelectedNodesChange', 'selectedData', selectedData);
        }
      }
      onSelectedLinksChange={
        (current, selectedData) => {
          console.log('onSelectedLinksChange', 'current', current);
          console.log('onSelectedLinksChange', 'selectedData', selectedData);
        }
      }
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


