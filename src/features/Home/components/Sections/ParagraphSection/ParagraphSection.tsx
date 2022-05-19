import { Title } from '@/components/common';
import { FormElement } from '@/components/FormElement';
import { SeeMore } from '@/components/SeeMore';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ParagraphSection.module.css';

export const ParagraphSection = ({ data: { text1, text2 } }) => {
  return (
    <>
      <Title>Zmień paragraf</Title>
      <Container className={styles.container}>
        <div className={styles.background} />
        <Row className={styles.row}>
          <Col sm={12} md={6} className={styles.left}>
            <FormElement title="Przepis*" />
            <FormElement
              title="Źródło przepisu*"
              description="Proszę podać dokładne źródło aktu prawnego z Dziennika Ustaw oraz wyszczególnić, które fragmenty aktu prawnego są omawiane"
            />
            <FormElement
              title="Opis regulacji*"
              description="Jak działa? Jaka jest jej istota?"
            />
            <FormElement title="Dziedzina*" />
            <FormElement title="Uzasadnienie liberalizacji*" />
            <FormElement title="Proponowana nowa treść przepisu" />
          </Col>
          <div className={styles[`see-more`]}>
            <SeeMore alignment="center" />
          </div>
          <Col sm={12} md={6} className={styles.right}>
            <div className={styles.content}>
              <div className={styles.paragraph}>{text1}</div>
              <div className={styles.paragraph}>{text2}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
