# 组件功能说明文档

## 组件定位

本组件主要应用场景是对带有时间属性的动态图（Dynamic network）进行可视分析。可以独立使用，也可配合图可视化或地理位置图进行交互分析。

动态图定义，我们定义一个图： ![image](https://user-images.githubusercontent.com/76591446/159164551-8e8deda7-a109-4135-8848-86e67dd46a16.png) ![image](https://user-images.githubusercontent.com/76591446/159164558-9bb76026-3d2b-44e9-9374-6b88175f787f.png)

其中： V 是图的节点，![image](https://user-images.githubusercontent.com/76591446/159164606-6935714d-68a8-42f1-8949-19fdfcec863e.png) 是节点出现和消失的时间点。 E 是图的边，连接 u、v 两个节点，![image](https://user-images.githubusercontent.com/76591446/159164618-94232734-50c2-4aa2-a7d5-d2a17024fc60.png) ,![image](https://user-images.githubusercontent.com/76591446/159164625-8fb04319-4642-4629-b560-dfb5c03c9df5.png) 是边出现和消失的时间点。简单理解就是图的节点和边都有不同的时间属性。例如我们在对电话通联数据进行分析的时候，每个电话用一条边 E 来代表，其通话的开始时间与结束时间就可以作为时间属性。

## 为什么需要一个特殊的组件

我们在分析的时候仅仅依靠这样的网络图,是无法在时间维度去细致分析的。

![image](https://user-images.githubusercontent.com/76591446/159164667-e00264e8-0ab4-4fd2-b8a8-7fb5edcfe063.png)

图片引用自 cambridge-intelligence

因此需要一个时间面板。但是如果只是对通话次数进行聚合，以时间柱状图（折线图）的形式进行分析，无法具体到每一个电话通联在时间轴的位置，以及到底是谁跟谁发生了关系。因而还是不能进行更加细节的分析。

![image](https://user-images.githubusercontent.com/76591446/159164683-ead65120-8174-4e43-89c7-abf6ba1d9c58.png)

图片引用自 cambridge-intelligence

因此我们需要引入这样的时间面板，我们暂时叫他“关联时间面板”

![image](https://user-images.githubusercontent.com/76591446/159164694-7f4c4c56-382b-4210-9e10-4fedf253fcfb.png)

图片引用自 cambridge-intelligence

## 组件主要功能

组件元素定义 ![image](https://user-images.githubusercontent.com/76591446/178099282-98f5dc78-d05b-4ddd-832e-754f284ce23b.png) 在“关联时间面板”中：

@时间轴从左往右，在底部标明不同的时刻；

@每一个节点会与时间线平行展开一个轨迹，节点在最左侧可有有标签，节点的颜色可以用来区分不同的类别；

@节点之间在不同时刻的关联关系，表现为不同轨道之间的有向线段，鼠标放在上面会有详情提示；

@整体时间轴可以通过鼠标滚轮进行缩放，从而改版查看数据的多少与时间颗粒度。

![image](https://user-images.githubusercontent.com/76591446/159164752-6c0b5433-a2c9-4d8f-8d79-ea2023b8cabe.png)

当缩放到一定程度，时间轴承载的数据量过大的时候，我们就需要将展示形式转化为热力图。从而在更大尺度上对关联数据的时间模式进行探索。这个功能我们还未开发出来，长的样子应该跟 cambridge-intelligence 的时间组件一样，像这样：

![image](https://user-images.githubusercontent.com/76591446/159164824-6190febd-5257-4d94-b7e1-4021e5764328.png)

当捐助到一定节点，我们就投入这个功能的开发！！！

如果有大神感兴趣也可以马上投入时间，我们一起开发！！！
