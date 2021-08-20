import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { GridContext, screenSize } from './context';
import './styles/row.scss';

/**
 *
 * @param {*} param0
 * align 垂直方向的对齐方式: top, middle, bottom;
 * justify: 水平方向的布局方式: start end center space-around space-between;
 * @returns
 */
const Row = ({ children, gutter, align='top', justify = 'start', className }) => {
  // 根据当前屏幕尺寸来获取gutter,
  gutter = Array.isArray(gutter) ? gutter : [gutter];
  gutter = Array(2).fill(undefined).map((_, index) => gutter[index] ? gutter[index] : 0).map((item) => {
    if (typeof item === 'number') {
      return screenSize.reduce((composed, i) => {
        Object.assign(composed, {
          [i]: item,
        });
        return composed;
      }, {});
    }
    return item;
  });

  const [screen, setScreen] = useState('xs');
  const horizontalGap = gutter[0][screen] / 2;
  const verticalGap = gutter[1][screen] / 2;
  const values = {
    gutter: [horizontalGap, verticalGap],
  };
  const classnames = classNames('row', {
    [`row-align-${align}`]: align,
    [`row-justifiy-${justify}`]: justify,
  }, className)
  return (
    <div
      className={classnames}
      style={{
        marginLeft: -horizontalGap,
        marginRight: -horizontalGap,
        marginTop: -verticalGap,
        marginBottom: -verticalGap,
      }}
    >
      <GridContext.Provider value={values}>
        {children}
      </GridContext.Provider>
    </div>
  )
};

export default Row;
