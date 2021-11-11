# graph-timeline
是一个用于图分析中分析节点的时间关系的组件

## 使用示例
```typescript
  import NpmTimeLine from 'graph-timeline';
  function App() {
    const nodes = [
      {id: '1', name: '节点1', date: '2021-10-19 12:00:00'},
      {id: '1-1', name: '节点1-1', date: '2021-10-19 12:00:00'},
      {id: '2', name: '节点2', date: '2021-10-20 12:00:00'},
      {id: '2-1', name: '节点2-1', date: '2021-10-20 12:00:00'},
      {id: '3', name: '节点3', date: '2021-10-21 12:00:00'},
      {id: '4', name: '节点4', date: '2021-10-22 12:00:00'},
      {id: '5', name: '节点5', date: '2021-10-23 12:00:00'},
      {id: '6', name: '节点6', date: '2021-10-24 12:00:00'},
    ];
    const links = [
      {source: '1', target: "1-1"},
      {source: '2', target: "2-1"},
    ];
    return (
      <>
        <NpmTimeLine
          nodes={nodes}
          links={links}
          onBrushChange={ (value) => {console.log(value)}}
          // options={{
          //   background: '#234dad',
          //   xAxis: {
          //     color: 'red',
          //     tickColor: 'red',
          //     axisColor: 'red'
          //   },
          //   yAxis: {
          //     color: 'red',
          //     tickColor: 'red',
          //     axisColor: 'red'
          //   },
          //   node: {
          //     color: 'blue',
          //     size: 10
          //   },
          //   arrowColor: 'blue'
          // }}
        />
      </>
    );
  }
```
![alt 运行效果](./src/assets/example.png)
**可以进行时间拖拽和缩放。点击框选可以选择节点**

## 配置项Props
* nodes
> 配置节点对应的数据，数组中的对象`id`、`name`、`date`属性是必须的
* links
> 配置节点之间的连接关系，其中`source`和`target`均对应nodes中的节点id。
* onBrushChange
> 框选的回调函数，参数是被框选的节点的信息。
* options
> 图标样式设置
```
  options:{
    background: '#234dad', // 整体的背景颜色
    xAxis: {
      color: 'red',        // x轴的文本颜色
      tickColor: 'red',    // x轴的分割线颜色
      axisColor: 'red'     // x轴的轴线颜色
    },
    yAxis: {
      color: 'red',        // y轴的文本颜色
      tickColor: 'red',    // y轴的分割线颜色
      axisColor: 'red'     // y轴的轴线颜色
    },
    node: {                
      color: 'blue',       // 节点颜色
      size: 10             // 节点的大小
    },
    arrowColor: 'blue'     // 连线的颜色
  }
```