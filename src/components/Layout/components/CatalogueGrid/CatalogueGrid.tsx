import { SquareCard } from '@/components/common/SquareCard';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './CatalogueGrid.module.css';
import arrow_left from '@/public/images/icons/arrow_left.svg';
import Image from 'next/image';
import { SeeMore } from '@/components/SeeMore';

export const CatalogueGrid = () => {
  const sqr01 = { num: `01`, title: `Definiowanie libertarianizmu` };
  const sqr02 = { num: `02`, title: `Libertarianizm a liberalizm` };
  const sqr03 = { num: `03`, title: `Libertarianizm a anarchizm` };
  const sqr04 = { num: `04`, title: `Libertarianizm a marksizm` };
  const sqr09 = { num: `09`, title: `Minarchizm` };
  const sqr10 = { num: `10`, title: `Anarchokapitalizm` };
  const sqr11 = {
    num: `11`,
    title: `„Prawica” i „lewica” w libertarianizmie`,
    text: `„Lewicowy” libertarianizm – agoryzm
  
    „Lewicowy” libertarianizm – mutualizm
    
    „Prawicowy” libertarianizm – paleolibertarianizm`,
  };
  const sqr12 = { num: `12`, title: `Obiektywizm` };
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col lg={3} md={4} sm={6} className={styles.col}>
            <SquareCard variant="light" data={sqr01} />
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            className={`d-none d-sm-inline ${styles.col}`}
          >
            <SquareCard data={sqr02} variant="dark" />
          </Col>
          <Col lg={3} md={4} className={`d-none d-md-inline ${styles.col}`}>
            <SquareCard data={sqr03} variant="light" />
          </Col>
          <Col lg={3} className={`d-none d-lg-inline ${styles.col}`}>
            <SquareCard data={sqr04} variant="dark" />
          </Col>
        </Row>
        <div className={styles.arrows}>
          <div className={styles[`arrow-left`]}>
            <Image src={arrow_left} alt="left" />
          </div>
          <div className={styles[`arrow-right`]}>
            <Image src={arrow_left} alt="right" />
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}

        <Row>
          <Col lg={3} md={4} sm={6} className={styles.col}>
            <SquareCard variant="dark" data={sqr09} />
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            className={`d-none d-sm-inline ${styles.col}`}
          >
            <SquareCard data={sqr10} variant="yellow" />
          </Col>
          <Col lg={3} md={4} className={`d-none d-md-inline ${styles.col}`}>
            <SquareCard data={sqr11} variant="dark" />
          </Col>
          <Col lg={3} className={`d-none d-lg-inline ${styles.col}`}>
            <SquareCard data={sqr12} variant="light" />
          </Col>
        </Row>
      </Container>
      <SeeMore />
    </>
  );
};

{
  /* <>
      <Container>
        <Row>
          <Col xl={3} lg={4} md={6} sm={12} className={styles.col}>
            <SquareCard variant="light" data={sqr01} />
          </Col>
          <Col
            xl={3}
            lg={4}
            md={6}
            className={`d-none d-md-inline ${styles.col}`}
          >
            <SquareCard data={sqr02} variant="dark" />
          </Col>
          <Col xl={3} lg={4} className={`d-none d-lg-inline ${styles.col}`}>
            <SquareCard data={sqr03} variant="light" />
          </Col>
          <Col xl={3} className={`d-none d-xl-inline ${styles.col}`}>
            <SquareCard data={sqr04} variant="dark" />
          </Col>
        </Row>
        <Row>
          <Col xl={3} lg={4} md={6} sm={12} className={styles.col}>
            <SquareCard variant="dark" data={sqr09} />
          </Col>
          <Col
            xl={3}
            lg={4}
            md={6}
            className={`d-none d-md-inline ${styles.col}`}
          >
            <SquareCard data={sqr10} variant="yellow" />
          </Col>
          <Col xl={3} lg={4} className={`d-none d-lg-inline ${styles.col}`}>
            <SquareCard data={sqr11} variant="dark" />
          </Col>
          <Col xl={3} className={`d-none d-xl-inline ${styles.col}`}>
            <SquareCard data={sqr12} variant="light" />
          </Col>
        </Row>
      </Container>
    </> */
}
