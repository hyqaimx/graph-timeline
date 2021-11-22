import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import GraphTimeLine from '../src';

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const date = new Date();
    const getStrDate = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      const hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
      const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
      const seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
    const arr = new Array(1000).fill(0).map((item, index) => ({
      id: String(index + 1),
      name: '节点' + (index + 1),
      date: getStrDate(new Date(date.valueOf() - (1000*index)))
    }));

    const createLinks = Array.from({length: 500}).fill(0).map((item, index) => ({
      source: String(index + 1),
      target: String(index + Math.floor(Math.random() * 2) + 1)
    }));

    setNodes([...arr]);
    setLinks([...createLinks]);
  }, [])
  return (
    <GraphTimeLine
      height={500}
      nodes={nodes}
      links={links}
      usBrush={false}
      onBrushChange={ (value) => {console.log(value)}}
      // timeLabelFormat={ (date) => date.toLocaleDateString()}
      onSelect={(d, show, selectedData) => {console.log(d, show, selectedData)}}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


