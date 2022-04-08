// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { LogoSL } from '@/components/Icons';
import { Menu } from '@/components/Layout/components/Menu';
import mainbg from '../../../../../public/images/backgrounds/mainbg.svg';
import Image from 'next/image';
import styles from './header.module.css';

export const Header = () => {
  const data = [
    `Aktualności`,
    `O nas`,
    `Centrum analiz`,
    `Nasze wideo`,
    `Oddziały`,
    `Baza wiedzy`,
    ` Kontakt`,
    `Dołącz!`,
  ];
  return (
    <>
      <div className={styles.bg}>
        <Image src={mainbg} alt={`Tło`} layout="responsive" />
      </div>
      <Container style={{ maxWidth: `85vw` }}>
        <Row style={{ alignItems: `center` }}>
          <Col lg={2}>
            <LogoSL />
          </Col>
          <Col lg={8}>
            <Menu data={data} />
          </Col>
          <Col lg={2}>*Ikona i koń*</Col>
        </Row>
      </Container>
    </>
  );
};
