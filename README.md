# graph-timeline
是一个用于图分析中分析节点的时间关系的组件

## 安装
````
npm install graph-timeline
````
## 使用示例
```typescript
  import NpmTimeLine from 'graph-timeline';
  function App() {
    const nodes = [
      {id: '1',name: '节点1', date: '2021-11-25 10:10:10'},
      {id: '2',name: '节点1', date: '2021-11-23 11:00:10'},
      {id: '3',name: '节点1', date: '2021-11-26 20:10:10'},
      {id: '4',name: '节点2', date: '2021-11-23 11:00:10'},
      {id: '5',name: '节点3', date: '2021-11-24 18:10:10'},
      {id: '6',name: '节点3', date: '2021-11-24 15:10:10'},
      {id: '7',name: '节点3', date: '2021-11-24 23:10:10'},
      {id: '8',name: '节点4', date: '2021-11-23 12:10:10'},
      {id: '9',name: '节点5', date: '2021-11-25 15:12:10'},
      {id: '10',name: '节点5', date: '2021-11-24 18:10:10'},
    ];
    const links = [
      {source: '2', target: '4'},
      {source: '2', target: '4'},
    ];
    return (
      <>
        <NpmTimeLine
          height={500}
          nodes={nodes}
          links={links}
          usBrush
          selectedItem={['节点1']}
          onBrushChange={ (value) => {console.log(value)}}
          // timeLabelFormat={ (date) => date.toLocaleDateString()}
          onSelect={(selectedData, show, d) => {console.log(selectedData, d, show)}}
          onSelectedNodesChange={
            (current, selectedData) => {
              console.log(`当前选中数据：${JSON.stringify(current)}, 已选中数据：${JSON.stringify(selectedData)}`)
            }
          }
          // options={{
          //   background: '#234dad',
          //   xAxis: {
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
![alt zoom运行效果](./src/assets/zoomExp.png)
![alt brush运行效果](./src/assets/brushExp.png)
**可以进行时间拖拽和缩放。点击右上角图标可以切换拖拽和缩放，点击左侧文字可以选中当前行**

## 配置项Props
* width?: number | '100%'
> 宽度，默认100%
* height?: number
> 高度，默认300px
* padding?: [number, number, number, number]
> 内边距，值为长度为4的数据，分别对应上、右、下、左。默认值[20, 20, 20, 50]
* nodes: []
> 配置节点对应的数据，数组中的对象`id`、`name`、`date`属性是必须的
* links: []
> 配置节点之间的连接关系，其中`source`和`target`均对应nodes中的节点id。
* useBrush?: boolean
> 配置是否启用框选功能，默认为`true`。如果启用则会展示框选按钮
* selectedItem?: string[]
> 配置初始选中的节点，如果有值，则y轴对应的节点会选中
* timeLabelFormat?: (date: Date) => string
> 对x轴的时间展示文本进行格式化，接收一个Date作为参数，返回值为字符串
* onBrushChange?: (value: []) => void;
> 框选的回调函数，参数是被框选的节点的信息。
* onSelect?: <T>(d: T, show: boolean, selectedData: T[]) => void;
> 点击y轴选中某一行的回调函数。
* onSelectedNodesChange?: <T>(d: T, show: boolean, selectedData: T[]) => void;
> 节点选中变化事件，按住alt键可以多选
* options?: {}
> 图标样式设置
```
  options:{
    background: '#234dad', // 整体的背景颜色
    colors: string[],      // 根据该色板循环设置y轴每个item的颜色      
    xAxis: {
      color: 'red',        // x轴的文本颜色
      tickColor: 'red',    // x轴的分割线颜色
      axisColor: 'red'     // x轴的轴线颜色
    },
    node: {                
      color: 'blue',       // 节点颜色
      size: 10             // 节点的大小
    },
    arrowColor: 'blue'     // 连线的颜色
  }
```
## 变更日志
### v1.0.2
* 增加了`useBrush`选项，用于切换是否使用框选功能
* 增加了`timeLabelFormat`选项，可以用于自定义x轴的label展示
* readme文件修改
### v1.0.3
* 修改了缩放时节点及连线超出轴线范围的情况
* y轴节点及横线样式修改，去除了轴线展示
* 去除了y轴的配置项
* readme文件修改

### v1.0.4
* 修改了y轴样式修改的代码，减少了入参
* y轴增加了点击事件，可以点击文本选中当前行
* 增加了y轴点击事件的回调函数
* 增加了纵向的滚动条，当分类变多时展示可以更美观
* 修改了缩放时x轴展示的问题

### v1.0.5
* 将选中当前行变为多选，回调函数参数增加已选数据
* 框选按钮调整到右上方，样式优化

### v1.0.6
* 增加了colors色板参数，可以控制横向线条及文本的颜色循环
* 节点数据对象中可以增加color属性，用来单点控制某一项的颜色
* 修改了nodes参数的处理方式。这个需要额外说明：之前只有在id一致的时候节点才可能出现在同一行，但是这个很明显不符合实际的使用情况，一个节点很可能存在于多个时间点，如果id一致的话那么这些一行的节点将无法区分（只能通过时间区分，但是也有对应的问题），现在修改为id作为所有节点的唯一标识，通过name来判断是否是同一节点的不同时刻。
* 修改了tooltip的展示，将以前的展示id更改为展示name
* readme文件修改

### v1.0.7
* 增加了参数tooltip，用于控制tooltip展示以及自定义内容
* 修改了生成的元素的id，使其更句有标识性，避免与其他库冲突

### v1.0.8 & v1.0.9
* 解决了箭头反向时的展示异常[issue#9](https://github.com/hyqaimx/graph-timeline/issues/9)
* 箭头展示大小优化，根据节点大小动态变化
* 缩放时箭头展示，x轴样式调整

### v1.1.0
* 增加了节点的选中事件，按住alt键可以多选
* 增加了初始化是默认选中的节点，注意，这个是针对y轴的选项，也就是对应到实际分析图中的节点
* 从这个版本开始要逐渐考虑实际使用中涉及的交互，我认为这是一个较大的版本变动，所以加到1.1.0版本

## 题外话
这个组件是从部门内部的需求衍生出来的一个组件，起初只是为了满足业务需求。
由于所在部门的调整，现在这个组件被叫停了，我也只能在原来的基础上进行一些功能的优化。
非常感谢我们的产品**大黄蜂**，提出很多的指导和建议，对组件功能的推进有很大的帮助。
目前的组件基本已经完善，保证了基础的使用，但是有很多的功能还没有实现（比如缩放热力图），一方面是功能实现比较复杂，另一方面的话也没有太多的精力去专门开发。但是我内心也不想放弃这个我认为很不错的组件。
在和产品大大协商之后，我们决定发起一个赞助，如果赞助超`2000`的话我们就一起继续推进这个项目。也希望各位可以多多支持。
<div align="center"><img src="./src/assets/zanshangma.jpg" width="30%">
  
# 组件功能说明文档
## 组件定位

  本组件主要应用场景是对带有时间属性的动态图（Dynamic network）进行可视分析。可以独立使用，也可配合图可视化或地理位置图进行交互分析。

  动态图定义，我们定义一个图：
  ![image](https://user-images.githubusercontent.com/76591446/159164551-8e8deda7-a109-4135-8848-86e67dd46a16.png)
![image](https://user-images.githubusercontent.com/76591446/159164558-9bb76026-3d2b-44e9-9374-6b88175f787f.png)

  其中：
  V是图的节点，![image](https://user-images.githubusercontent.com/76591446/159164606-6935714d-68a8-42f1-8949-19fdfcec863e.png)
是节点出现和消失的时间点。
  E是图的边，连接u、v两个节点，![image](https://user-images.githubusercontent.com/76591446/159164618-94232734-50c2-4aa2-a7d5-d2a17024fc60.png)
,![image](https://user-images.githubusercontent.com/76591446/159164625-8fb04319-4642-4629-b560-dfb5c03c9df5.png)
是边出现和消失的时间点。
简单理解就是图的节点和边都有不同的时间属性。
例如我们在对电话通联数据进行分析的时候，每个电话用一条边E来代表，其通话的开始时间与结束时间就可以作为时间属性。
  
## 为什么需要一个特殊的组件
  我们在分析的时候仅仅依靠这样的网络图,是无法在时间维度去细致分析的。
  
  
  ![image](https://user-images.githubusercontent.com/76591446/159164667-e00264e8-0ab4-4fd2-b8a8-7fb5edcfe063.png)
   
  图片引用自cambridge-intelligence

  因此需要一个时间面板。
但是如果只是对通话次数进行聚合，以时间柱状图（折线图）的形式进行分析，无法具体到每一个电话通联在时间轴的位置，以及到底是谁跟谁发生了关系。因而还是不能进行更加细节的分析。
  
  
  ![image](https://user-images.githubusercontent.com/76591446/159164683-ead65120-8174-4e43-89c7-abf6ba1d9c58.png)
   
  图片引用自cambridge-intelligence

  因此我们需要引入这样的时间面板，我们暂时叫他“关联时间面板”
  
  
  ![image](https://user-images.githubusercontent.com/76591446/159164694-7f4c4c56-382b-4210-9e10-4fedf253fcfb.png)
   
  图片引用自cambridge-intelligence

## 组件主要功能
在“关联时间面板”中：

  @时间轴从左往右，在底部标明不同的时刻；

  @每一个节点会与时间线平行展开一个轨迹，节点在最左侧可有有标签，节点的颜色可以用来区分不同的类别；

  @节点之间在不同时刻的关联关系，表现为不同轨道之间的有向线段，鼠标放在上面会有详情提示；

  @整体时间轴可以通过鼠标滚轮进行缩放，从而改版查看数据的多少与时间颗粒度。

  
  ![image](https://user-images.githubusercontent.com/76591446/159164752-6c0b5433-a2c9-4d8f-8d79-ea2023b8cabe.png)

  当缩放到一定程度，时间轴承载的数据量过大的时候，我们就需要将展示形式转化为热力图。从而在更大尺度上对关联数据的时间模式进行探索。这个功能我们还未开发出来，长的样子应该跟cambridge-intelligence的时间组件一样，像这样：
  
  
  ![image](https://user-images.githubusercontent.com/76591446/159164824-6190febd-5257-4d94-b7e1-4021e5764328.png)

  当捐助到一定节点，我们就投入这个功能的开发！！！

  如果有大神感兴趣也可以马上投入时间，我们一起开发！！！
  
  
  
