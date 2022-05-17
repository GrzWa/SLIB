import { Col, Container, Row } from 'react-bootstrap';
import styles from './EventsGrid.module.css';
import { EventsCard } from './EventsCard';
import { SeeMore } from '@/components/SeeMore';

export const EventsGrid = ({ data: { card1, card2, card3, card4 } }) => {
  return (
    <>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col sm={12} md={6} lg={4} xl={3} className={styles.col}>
            <EventsCard data={card1} />
          </Col>
          <Col
            md={6}
            lg={4}
            xl={3}
            className={`${styles.col} d-none d-md-inline`}
          >
            <EventsCard variant="yellow" data={card2} />
          </Col>
          <Col lg={4} xl={3} className={`${styles.col} d-none d-lg-inline`}>
            <EventsCard data={card3} />
          </Col>
          <Col xl={3} className={`${styles.col} d-none d-xl-inline`}>
            <EventsCard data={card4} variant="dark" />
          </Col>
        </Row>
        <SeeMore />
      </Container>
    </>
  );
};
