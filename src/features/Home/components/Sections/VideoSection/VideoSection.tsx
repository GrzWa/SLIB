import { Title } from '@/components/common';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './VideoSection.module.css';
import yt_temp from '@/public/images/img/yt_temp.png';
import { SquareCard } from '@/components/common/SquareCard';

export const VideoSection = () => {
  const card1 = { title: `Młodzież Kontra` };
  const card2 = {
    title: `Wykłady 
  i prelekcje`,
  };
  const card3 = { title: `Bez Retuszu` };
  const card4 = { title: `Wywiady` };
  const card5 = { title: `Inne` };

  return (
    <div className={styles[`main-container`]}>
      <div className={styles.background} />
      <Title title="Nasze wideo" text="white" underline="dark" />
      <Container>
        <Row>
          <Col md={8} sm={12}>
            <Image src={yt_temp} alt="wideo" />
          </Col>
          <Col md={4} sm={12}>
            <div className={styles.title}>
              Młodzież kontra 636: Jacek Wilk (Wolność) 14.04.2018
            </div>
            <div className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni.
            </div>
          </Col>
        </Row>
        <Row
          className={`row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 ${
            styles[`row-cards`]
          }`}
        >
          <Col className={styles.col}>
            <SquareCard data={card1} variant="dark" />
          </Col>
          <Col className={`${styles.col} d-none d-md-inline`}>
            <SquareCard data={card2} variant="yellow" />
          </Col>
          <Col className={`${styles.col} d-none d-lg-inline`}>
            <SquareCard data={card3} variant="dark" />
          </Col>
          <Col className={`${styles.col} d-none d-xl-inline`}>
            <SquareCard data={card4} variant="dark" />
          </Col>
          <Col className={`${styles.col}`}>
            <SquareCard data={card5} variant="dark" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
