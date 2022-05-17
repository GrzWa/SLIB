import { SquareCard } from '@/components/common/SquareCard';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './CatalogueGrid.module.css';
import arrow_left from '@/public/images/icons/arrow_left.svg';
import Image from 'next/image';
import { SeeMore } from '@/components/SeeMore';

export const CatalogueGrid = ({
  data: {
    sqr01,
    sqr02,
    sqr03,
    sqr04,
    sqr05,
    sqr06,
    sqr07,
    sqr08,
    sqr09,
    sqr10,
    sqr11,
    sqr12,
  },
}) => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col lg={3} md={4} sm={6} className={styles.col}>
            <SquareCard variant="lightest" data={sqr01} />
          </Col>
          <Col
            lg={3}
            md={4}
            sm={6}
            className={`d-none d-sm-inline ${styles.col}`}
          >
            <SquareCard data={sqr02} variant="light" />
          </Col>
          <Col lg={3} md={4} className={`d-none d-md-inline ${styles.col}`}>
            <SquareCard data={sqr03} variant="lightest" />
          </Col>
          <Col lg={3} className={`d-none d-lg-inline ${styles.col}`}>
            <SquareCard data={sqr04} variant="light" />
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
            <SquareCard variant="light" data={sqr09} />
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
            <SquareCard data={sqr11} variant="light" />
          </Col>
          <Col lg={3} className={`d-none d-lg-inline ${styles.col}`}>
            <SquareCard data={sqr12} variant="lightest" />
          </Col>
        </Row>
      </Container>
      <SeeMore />
    </>
  );
};
