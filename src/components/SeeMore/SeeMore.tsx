import { Col, Row } from 'react-bootstrap';
import styles from './SeeMore.module.css';

export const SeeMore = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={3} xl={2} className={styles[`col-more`]}>
          <div className={styles.more}>Zobacz więcej</div>
        </Col>
      </Row>
    </>
  );
};
