import React, { useContext } from 'react';
import classNames from 'classnames';
import { GridContext } from './context';
import './styles/col.scss';

const Col = ({ children, span=1, offset=1, className }) => {
  const { gutter: [horizontalGap, verticalGap] } = useContext(GridContext);
  const style = {
    paddingLeft: horizontalGap,
    paddingRight: horizontalGap,
    paddingTop: verticalGap,
    paddingBottom: verticalGap,
  };
  const classnames = classNames('col', {
    [`col-span-${span}`]: !!span,
    [`col-offset-${offset}`]: !!offset,
  }, className);
  return (<div className={classnames} style={style}>{children}</div>);
}

export default Col;
