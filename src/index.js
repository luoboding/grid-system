import React from 'react';
import ReactDom from 'react-dom';
import { Row, Col } from './grid';

ReactDom.render((
  <Row gutter={[24, 24]}>
      <Col span={2} offset={2}>abc</Col>
      <Col span={2} offset={2}>abc</Col>
      <Col span={2} offset={2}>abc</Col>
  </Row>
), document.querySelector('#root'));
