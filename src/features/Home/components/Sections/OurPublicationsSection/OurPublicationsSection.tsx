import { Title } from '@/components/common';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OurPublicationsSection.module.css';
import pub1 from '@/public/images/img/pub1.png';
import pub2 from '@/public/images/img/pub2.png';
import pub3 from '@/public/images/img/pub3.png';
import pub4 from '@/public/images/img/pub4.png';
import pub5 from '@/public/images/img/pub5.png';
import Image from 'next/image';

export const OurPublicationsSection = () => {
  return (
    <>
      <Title title={`Nasze publikacje`} alignment={`center`} />
      <Container>
        <Row>
          <Col lg={12} xl={6}>
            <Row className={styles[`row-left`]}>
              <Col className={styles.col}>
                <Image src={pub1} alt="obraz" />
              </Col>
            </Row>
          </Col>

          {/* ---------------------------------------------------------------------- */}

          <Col lg={12} xl={6}>
            2
          </Col>
        </Row>
      </Container>
    </>
  );
};
