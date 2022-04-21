import { Col, Container, Row } from 'react-bootstrap';
import styles from './EventsGrid.module.css';
import stock1 from '@/public/images/img/stock1.png';
import stock2 from '@/public/images/img/stock2.png';
import stock3 from '@/public/images/img/stock3.png';
import stock4 from '@/public/images/img/stock4.png';
import { EventsCard } from './EventsCard';

export const EventsGrid = () => {
  const data1 = {
    date: `20 marca | 15:00`,
    text: `At vero eos et accusamus et iusto odio dignissimos`,
    image: stock1,
  };
  const data2 = {
    date: `5 kwietnia | 12:00`,
    text: `Nam libero tempore`,
    image: stock2,
  };
  const data3 = {
    date: `3 maja | 12:00`,
    text: `Dolore magnam aliquam quaerat voluptatem`,
    image: stock3,
  };
  const data4 = {
    date: `6 maja | 10:30`,
    text: `Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae`,
    image: stock4,
  };

  return (
    <>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col sm={12} md={6} lg={4} xl={3} className={styles.col}>
            <EventsCard data={data1} />
          </Col>
          <Col
            md={6}
            lg={4}
            xl={3}
            className={`${styles.col} d-none d-md-inline`}
          >
            <EventsCard variant="yellow" data={data2} />
          </Col>
          <Col lg={4} xl={3} className={`${styles.col} d-none d-lg-inline`}>
            <EventsCard data={data3} />
          </Col>
          <Col xl={3} className={`${styles.col} d-none d-xl-inline`}>
            <EventsCard data={data4} variant="dark" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4} lg={3} xl={2} className={styles[`col-more`]}>
            <div className={styles.more}>Zobacz więcej</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
