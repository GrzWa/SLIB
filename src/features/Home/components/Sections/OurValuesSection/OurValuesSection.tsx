import { Title } from '@/components/common';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OurValuesSection.module.css';
import obrazek1 from '@/public/images/img/obrazek1.png';
import meditate from '@/public/images/logo/meditate.svg';
import mind from '@/public/images/logo/mind.svg';
import stairs from '@/public/images/logo/stairs.svg';
import person from '@/public/images/logo/person.svg';
import Image from 'next/image';
import { CardValues } from '@/components/common/CardValues';

export const OurValuesSection = ({
  data: { card, value1, value2, value3, value4 },
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.background} />
      <Title title={`Nasze wartości`} alignment={`center`} />

      <Container className={styles.container}>
        <Row className={styles[`row-lg`]}>
          {/* --------------------------------------------------------- */}
          <Col sm={12} md={4} xl={4} xxl={3} className={styles[`col-left`]}>
            <div className={styles.card}>
              <Image
                src={card.image}
                alt="Image"
                className={styles[`card-img`]}
              />
              <div className={styles[`card-content`]}>
                <div className={styles[`card-text`]}>
                  Tylko wolność może zapewnić człowiekowi dostatek, spełnienie i
                  szczęście.
                </div>
                <div className={styles[`card-name`]}>Murray N. Rothbard</div>
              </div>
            </div>
          </Col>

          {/* --------------------------------------------------------- */}
          <Col sm={12} md={8} xl={8} xxl={9} className={styles[`col-right`]}>
            <Row className={styles[`row-sm`]}>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={value1} />
              </Col>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={value2} />
              </Col>
            </Row>
            <Row className={styles[`row-sm`]}>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={value3} />
              </Col>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={value4} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
