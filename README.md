# graph-timeline

是一个用于图分析中分析节点的时间关系的组件<br /> 关于组件的业务场景及介绍请看[这里](./Component.md)

## 安装

```
npm install graph-timeline
```

## 使用示例

`docs/demo/basic`文件夹下展示了实际的组件调用

## 配置项 Props

- yAxis?: { width: number }
  > y 轴设置，目前只有 width 选项
- wrapperClassName?: string
  > 设置包裹元素 class 类名
- className?: string;
  > 设置图表元素类型
- style?: CSSProperties;
  > 可以直接设置图表元素展示样式
- nodeGroupBy: string;
  > 设置节点用于分组的字段
- edgeGroupBy: string
  > 设置边用于分组的字段
- nodeGroups?: Record<string, INodeGroupStyle>
  > 用于设置分组后的节点的样式。（key 为`nodeGroupBy`字段实际的值）

```typescript
interface INodeGroupStyle: {
  // 节点颜色
  color?: string;
  // 半径
  radius?: number;
  // 背景线颜色
  strokeColor?: string;
  strokeOpacity?: number;
  // 背景线实线还是虚线；默认 solid 实线
  strokeStyle?: 'solid' | 'dashed' | 'dotted';
  // y轴坐标图标样式
  iconStyle?: INodeGroupIconStyle;
}
```

- nodeConfig?: INodeGlobalStyle;
  > 统一设置节点的展示样式

```typescript
interface INodeGlobalStyle {
  // 节点颜色
  color?: string;
  // 半径
  radius?: number;
  // 背景线颜色
  strokeColor?: string;
  strokeOpacity?: number;
  // 背景线实线还是虚线；默认 solid 实线
  strokeStyle?: 'solid' | 'dashed' | 'dotted';
  // y轴坐标图标样式
  iconStyle?: INodeGroupIconStyle;
}
```

- edgeGroups?: Record<string, IEdgeGroupStyle>
  > 设置分组后的边的样式
- edgeConfig?: IEdgeGroupStyle
  > 设置边的统一展示样式

```typescript
interface IEdgeGroupStyle {
  // 颜色默认起始节点到中止节点渐变，也可特殊定义
  color?: string;
  // 渐变是否反向。不反向：起始节点到中止节点渐变；反向： 中止节点到起始节点渐变；
  reverse?: boolean;
  // 线的宽度
  width?: number;
  // 箭头半径
  arrowRadius?: number;
}
```

- nodes?: INode[];
  > 配置节点对应的数据，数组中的对象`id`、`label`属性是必须的

```typescript
interface INode
  extends Partial<{
    group: string;
    data: Record<string, string>;
    label: string;
  }> {
  id: string;
}
```

- edges?: IEdge[];
  > 配置节点之间的连接关系，其中`source`和`target`均对应 nodes 中的节点 id。

```typescript
interface IEdge {
  source: string;
  target: string;
  time: TTime;
  group: string;
}
```

- activeNodeIds?: string[];
  > 处于 active 状态的 node id
- onNodeClick?: (node: INode, e: MouseEvent) => void;
  > 节点点击事件
- onEdgeClick?: TEdgeEvent;
  > 边点击事件
- onEdgeHover?: TEdgeEvent;
  > 鼠标 hover 到边上触发该事件

```typescript
type TEdgeEvent = (
  type: 'source' | 'target' | 'line',
  edge: IEdge,
  position: { x?: number; s?: number; t?: number },
  e: MouseEvent,
) => void;
```

## 变更日志

### v1.0.2

- 增加了`useBrush`选项，用于切换是否使用框选功能
- 增加了`timeLabelFormat`选项，可以用于自定义 x 轴的 label 展示
- readme 文件修改

### v1.0.3

- 修改了缩放时节点及连线超出轴线范围的情况
- y 轴节点及横线样式修改，去除了轴线展示
- 去除了 y 轴的配置项
- readme 文件修改

### v1.0.4

- 修改了 y 轴样式修改的代码，减少了入参
- y 轴增加了点击事件，可以点击文本选中当前行
- 增加了 y 轴点击事件的回调函数
- 增加了纵向的滚动条，当分类变多时展示可以更美观
- 修改了缩放时 x 轴展示的问题

### v1.0.5

- 将选中当前行变为多选，回调函数参数增加已选数据
- 框选按钮调整到右上方，样式优化

### v1.0.6

- 增加了 colors 色板参数，可以控制横向线条及文本的颜色循环
- 节点数据对象中可以增加 color 属性，用来单点控制某一项的颜色
- 修改了 nodes 参数的处理方式。这个需要额外说明：之前只有在 id 一致的时候节点才可能出现在同一行，但是这个很明显不符合实际的使用情况，一个节点很可能存在于多个时间点，如果 id 一致的话那么这些一行的节点将无法区分（只能通过时间区分，但是也有对应的问题），现在修改为 id 作为所有节点的唯一标识，通过 name 来判断是否是同一节点的不同时刻。
- 修改了 tooltip 的展示，将以前的展示 id 更改为展示 name
- readme 文件修改

### v1.0.7

- 增加了参数 tooltip，用于控制 tooltip 展示以及自定义内容
- 修改了生成的元素的 id，使其更句有标识性，避免与其他库冲突

### v1.0.8 & v1.0.9

- 解决了箭头反向时的展示异常[issue#9](https://github.com/hyqaimx/graph-timeline/issues/9)
- 箭头展示大小优化，根据节点大小动态变化
- 缩放时箭头展示，x 轴样式调整

### v1.1.0

- 增加了节点的选中事件，按住 alt 键可以多选
- 增加了初始化是默认选中的节点，注意，这个是针对 y 轴的选项，也就是对应到实际分析图中的节点
- 从这个版本开始要逐渐考虑实际使用中涉及的交互，我认为这是一个较大的版本变动，所以加到 1.1.0 版本

### v1.1.1

- 增加了边的选中事件，按住 alt 键可以多选
- 修改了原有的节点及边的在选中和未选中的样式
- 优化了在点击画布时一直触发边和节点的选中变化事件

### v1.1.2

- 增加与 antv G6 使用的案例
- 修改了动态修改选择点时无法渲染视图的问题

### v1.1.3 & v1.1.4

- 修改了 example 中的使用案例
- 增加了自定义设置节点颜色的功能，事件节点与节点颜色保持一致，也可通过 nodes 进行单独定制

### v1.1.5

- 解决了切换框选时视图刷新导致的框选范围不准确的问题

### v1.1.6

- 我们经过讨论后，决定对 data 的数据格式进行调整，主要是考虑到存在节点的 ID 不一样但是 label 相同的情况，这种情况下无法通过单独的 name 进行分组
- 解决了当出现竖向滚动条时同时会出现横向滚动条的问题

### v1.1.7

- 解决了在和 antv/g6 组件进行联动时出现的交互问题
- 增加了局部更新的能力
- 优化了滚动条的问题

### v2.0.0

- 底层数据结构变更，将 date 属性放到了 edge 配置中
- 此版本是为了更好的契合实际的使用业务，相当于重新开发了一版，部分功能可能会被移除，例如框选。

## 其他

特别感谢 @bjfecxn 小妞老师的帮助，第二版本的基础能力几乎都是由她来完成的。🙏🙏🙏
