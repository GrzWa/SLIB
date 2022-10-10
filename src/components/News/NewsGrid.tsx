import styles from './NewsGrid.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { NewsCard } from './NewsCard';
import { FC } from 'react';
interface Props {
  data: any;
}

export const NewsGrid: FC<Props> = ({ data }) => {
  const { card1, card2, card3, card4, card5, card6 } = data;
  return (
    <div className={styles.section}>
      <div className={styles.background}></div>

      <Row className={styles.row}>
        <Col md={12} lg={12} className={styles[`col-large`]}>
          <NewsCard data={card1} variant="horizontal" />
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={6} className={styles[`col-small`]}>
          <NewsCard data={card3} variant="compact" />
        </Col>
        <Col lg={3} md={6} className={styles[`col-small`]}>
          <NewsCard data={card4} variant="compact" />
        </Col>
        <Col lg={3} md={6} className={styles[`col-small`]}>
          <NewsCard data={card5} variant="compact" />
        </Col>
        <Col lg={3} md={6} className={styles[`col-small`]}>
          <NewsCard data={card6} variant="compact" />
        </Col>
      </Row>
    </div>
  );
};
