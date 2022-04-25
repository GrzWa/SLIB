import { Title } from '@/components/common';
import { SeeMore } from '@/components/SeeMore';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ParagraphSection.module.css';

export const ParagraphSection = () => {
  return (
    <>
      <Title title="Zmień paragraf" />
      <Container className={styles.container}>
        <div className={styles.background} />
        <Row>
          <Col sm={12} md={6} className={styles.left}>
            <div>lewy</div>
          </Col>
          <Col sm={12} md={6} className={styles.right}>
            prawy
          </Col>
        </Row>
      </Container>
      <SeeMore alignment="center" />
    </>
  );
};
