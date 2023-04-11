import { TimeLocaleDefinition } from 'd3';
import { INodeGroupStyle, IYAxisStyle, IXAxisStyle, IEdgeGroupStyle } from '../types';

export const classPrefix = 'graph-timeline';

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// 定义中文时间格式化字符串
export const TIME_LOCALE_FORMAT: TimeLocaleDefinition = {
  dateTime: '%Y年%m月%d日 %H:%M:%S',
  date: '%Y年%m月%d日',
  time: '%H:%M:%S',
  periods: ['上午', '下午'],
  days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  shortDays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  shortMonths: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
};

export const DEFAULT_YAXIS_STYLE: IYAxisStyle = {
  // TODO 左侧内容的宽度（最好是能够自适应，目前是配置形式）
  width: 100,
};
export const DEFAULT_XAXIS_STYLE: IXAxisStyle = {};

export const FROM_KEY = {
  type: 'type',
};

export const DEFAULT_NODE_TYPE_STYLE: INodeGroupStyle = {
  // 默认节点颜色
  color: '#8c8c8c',
  // 半径
  radius: 3,
  // 默认不透明
  strokeOpacity: 1,
  // 背景线实线还是虚线
  strokeStyle: 'solid',
};
export const DEFAULT_EDGE_TYPE_STYLE: IEdgeGroupStyle = {
  // 颜色默认起始节点到中止节点渐变，也可特殊定义
  color: 'gradient',
  // 宽度
  width: 2,
  // 渐变是否反向。不反向：起始节点到中止节点渐变；反向： 中止节点到起始节点渐变；
  reverse: false,
};
