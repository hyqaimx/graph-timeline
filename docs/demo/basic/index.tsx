import React from 'react';
import { GraphTimeline } from 'graph-timeline-v2';
import demo1Data from './demo1';
import './index.less'

export default () => (
  <GraphTimeline
    {...demo1Data}
    yAxis={{ width: 200 }}
    style={{ height: 800, padding: 30 }}
  />
);