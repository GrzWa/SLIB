import styles from './NewsGrid.module.css';
import hoppe from '../../../public/images/news/hoppe.png';
import img3 from '../../../public/images/news/img3.png';
import img4 from '../../../public/images/news/img4.png';
import img5 from '../../../public/images/news/img5.png';
import img6 from '../../../public/images/news/img6.png';
import czytaj from '../../../public/images/news/czytaj.png';
import calendar from '../../../public/images/logo/calendar.svg';
import person_icon from '../../../public/images/logo/person_icon.svg';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { NewsCard } from './NewsCard';

export const NewsGrid = ({
  data: { card1, card2, card3, card4, card5, card6 },
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.background}></div>
      <div className="container">
        <Row className={styles.center}>
          {/* <Col sm={12} className={styles[`col-big`]}> */}
          <NewsCard data={card1} variant="horizontal" />
          {/* </Col> */}
        </Row>
        <Row>
          <Col md={3} sm={6}>
            <NewsCard data={card3} variant="compact" />
          </Col>
          <Col md={3} sm={6}>
            <NewsCard data={card4} variant="compact" />
          </Col>
          <Col md={3} sm={6}>
            <NewsCard data={card5} variant="compact" />
          </Col>
          <Col md={3} sm={6}>
            <NewsCard data={card6} variant="compact" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
