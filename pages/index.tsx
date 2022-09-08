import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { nodes as ns, links as ls } from './data';
import GraphTimeLine from '../src';

const App = () => {
  // const [nodes, setNodes] = useState([
  //   {id: '1',name: '节点1', date: '2021-11-25 10:10:10', color: 'green'},
  //   {id: '2',name: '节点1', date: '2021-11-23 11:00:10'},
  //   {id: '3',name: '节点1', date: '2021-11-26 20:10:10'},
  //   {id: '4',name: '节点2', date: '2021-11-23 11:00:10'},
  //   {id: '5',name: '节点3', date: '2021-11-24 18:10:10'},
  //   {id: '6',name: '节点3', date: '2021-11-24 15:10:10'},
  //   {id: '7',name: '节点3', date: '2021-11-24 23:10:10'},
  //   {id: '8',name: '节点4', date: '2021-11-23 12:10:10'},
  //   {id: '9',name: '节点5', date: '2021-11-25 15:12:10'},
  //   {id: '10',name: '节点5', date: '2021-11-24 18:10:10'},
  // ]);
  // const [links, setLinks] = useState([
  //   {source: '2', target: '4'},
  //   {source: '10', target: '5'},
  // ]);

  const [nodes, setNodes] = useState(ns);
  const [links, setLinks] = useState(ls);

const [selectedItem, setSelectedItem] = useState(['节点1']);

// useEffect(() => {
//   setTimeout(() => {
//     setSelectedItem(['节点1', '节点2'])
//   }, 2000)
// }, [])
  // useEffect(() => {
  //   const date = new Date();
  //   const getStrDate = (date) => {
  //     const year = date.getFullYear();
  //     const month = date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  //     const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  //     const hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  //     const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  //     const seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
  //     return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  //   }
  //   const arr = new Array(1000).fill(0).map((item, index) => ({
  //     id: String(Math.floor(Math.random() * 1000)),
  //     name: '节点' + (index + 1),
  //     date: getStrDate(new Date(date.valueOf() - (1000*index))),
  //     // color: "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, "f")
  //   }));

  //   const createLinks = Array.from({length: 500}).fill(0).map((item, index) => ({
  //     source: arr[Math.floor(Math.random() * 999)].id,
  //     target: arr[Math.floor(Math.random() * 999)].id
  //   }));
  //   console.log(arr,createLinks)
  //   setNodes([...arr]);
  //   setLinks([...createLinks]);
  // }, [])
  return (
    <GraphTimeLine
      height={1000}
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


