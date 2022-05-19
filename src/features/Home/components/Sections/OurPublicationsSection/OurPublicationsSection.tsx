import { Title } from '@/components/common';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OurPublicationsSection.module.css';
import Image from 'next/image';
import { Button } from '@/components/Button';

export const OurPublicationsSection = ({
  data: { book1, book2, book3, book4, book5, book6, feature },
}) => {
  return (
    <>
      <Title>Nasze publikacje</Title>
      <Container className={styles.container}>
        <Row>
          <Col lg={12} xl={6}>
            <Row className={styles[`row-left`]}>
              <Col sm={6} className={`${styles.col} ${styles.light}`}>
                <Image src={book1.image} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col}`}>
                <Image src={book2.image} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col}`}>
                <Image src={book3.image} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col} ${styles.light}`}>
                <Image src={book4.image} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col} ${styles.yellow}`}>
                <div className={styles.content}>
                  Libertarianizm jako praktyka polityczna wobec problemów
                  współczesnego świata
                  <div className={styles.author}>Eryk Hałas</div>
                </div>
              </Col>
              <Col sm={6} className={`${styles.col}`}>
                <Image src={book5.image} alt="obraz" className={styles.img} />
              </Col>
              <div className={styles.plus}>
                <div className={styles.center}>+</div>
              </div>
            </Row>
          </Col>

          {/* ---------------------------------------------------------------------- */}

          <Col lg={12} xl={6} className={styles[`col-right`]}>
            <div className={styles.background} />
            <Row>
              <div className={styles[`content-right`]}>
                <div className={styles.title}>
                  <span>{feature.title}</span>
                  <br />
                  {feature.subtitle}
                </div>
                <div className={styles.text}>{feature.text}</div>
              </div>
            </Row>
            <Row>
              <Col sm={5}>
                <Button variant="yellow">Zobacz więcej</Button>
              </Col>
              <Col sm={7} className={styles.img}>
                <Image src={feature.image} alt="obrazek" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
