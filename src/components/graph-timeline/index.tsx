import React, { CSSProperties, useRef } from 'react';
import { classPrefix } from '../../common/constants';
import { useService, GraphTimeService } from './service';
import Graph from './graph';
import type { IServiceProps } from './service';

import './index.less';

export interface IProps extends Omit<IServiceProps, 'containerRef'> {
  wrapperClassName?: string;
  className?: string;
  style?: CSSProperties;
}

const GraphTimeline: React.FC<IProps> = ({
  wrapperClassName = '',
  className = '',
  style,
  yAxis: yStyleSettings,
  xAxis: xStyleSettings,
  ...data
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const value = useService({
    containerRef,
    xAxis: xStyleSettings,
    yAxis: yStyleSettings,
    ...data,
  });

  return (
    <GraphTimeService.Provider value={value}>
      <div className={`${classPrefix}-wrapper ${wrapperClassName}`}>
        <div
          className={`${classPrefix} ${className}`}
          ref={containerRef}
          style={{ ...style, overflowY: 'auto' }}
        >
          <Graph />
        </div>
      </div>
    </GraphTimeService.Provider>
  );
};

export default GraphTimeline;
