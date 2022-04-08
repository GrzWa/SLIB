// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { LogoSL } from '@/components/Icons';
import { Menu } from '@/components/Layout/components/Menu';

export const Header = () => {
  const data = [`Aktualności`];
  return (
    <Container>
      <Row>
        <Col lg={2}>
          <LogoSL />
        </Col>
        <Col lg={8}>
          {/* <div style={{ backgroundColor: `red` }}>Aktualności</div> */}
          <Menu data={data} />
        </Col>
        <Col lg={1}>bhbh</Col>
      </Row>
      <Row>
        <Col lg={1}>Hello </Col>
      </Row>
    </Container>
  );
};
