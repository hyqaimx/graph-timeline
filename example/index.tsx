import React from 'react';
import ReactDOM from 'react-dom';
import GraphTimeLine from '../src';

const App = () => {
  const nodes = [
    {id: '1', name: '节点1', date: '2021-10-19 12:00:00'},
    {id: '1-1', name: '节点1-1', date: '2021-10-19 12:00:00'},
    {id: '2', name: '节点2', date: '2021-10-20 12:00:00'},
    {id: '2-1', name: '节点2-1', date: '2021-10-20 12:00:00'},
    {id: '3', name: '节点3', date: '2021-10-21 12:00:00'},
    {id: '4', name: '节点4', date: '2021-10-22 12:00:00'},
    {id: '5', name: '节点5', date: '2021-10-23 12:00:00'},
    {id: '6', name: '节点6', date: '2021-10-24 12:00:00'},
  ]
  const links = [
    {source: '1', target: "1-1"},
    {source: '2', target: "2-1"},
  ]
  return (
    <GraphTimeLine
      nodes={nodes}
      links={links}
      usBrush={false}
      onBrushChange={ (value) => {console.log(value)}}
      timeLabelFormat={ (date) => date.toLocaleDateString()}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


