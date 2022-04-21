import { Title } from '@/components/common';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './OurPublicationsSection.module.css';
import pub1 from '@/public/images/img/pub1.png';
import pub2 from '@/public/images/img/pub2.png';
import pub3 from '@/public/images/img/pub3.png';
import pub4 from '@/public/images/img/pub4.png';
import pub5 from '@/public/images/img/pub5.png';
import pub6 from '@/public/images/img/pub6.png';
import Image from 'next/image';
import { Button } from '@/components/Button';

export const OurPublicationsSection = () => {
  return (
    <>
      <Title title={`Nasze publikacje`} alignment={`center`} />
      <Container className={styles.container}>
        <Row>
          <Col lg={12} xl={6}>
            <Row className={styles[`row-left`]}>
              <Col sm={6} className={`${styles.col} ${styles.light}`}>
                <Image src={pub1} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col}`}>
                <Image src={pub2} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col}`}>
                <Image src={pub3} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col} ${styles.light}`}>
                <Image src={pub4} alt="obraz" className={styles.img} />
              </Col>
              <Col sm={6} className={`${styles.col} ${styles.yellow}`}>
                <div className={styles.content}>
                  Libertarianizm jako praktyka polityczna wobec problemów
                  współczesnego świata
                  <div className={styles.author}>Eryk Hałas</div>
                </div>
              </Col>
              <Col sm={6} className={`${styles.col}`}>
                <Image src={pub5} alt="obraz" className={styles.img} />
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
                  <span>Przeciw państwu</span>
                  <br />
                  Biografia Murraya N. Rothbarda
                </div>
                <div className={styles.text}>
                  Przeciw Państwu Justina Raimondo jest jedyną biografią Murraya
                  N. Rothbarda. Autor książki był przyjacielem Rothbarda i miał
                  dostęp do całej jego prywatnej korespondencji, a także odbył
                  wiele rozmów z wdową po Maurycym. Książka ukazuje Murraya
                  Rothbarda jako człowieka i działacza, ze wszystkimi jego
                  wadami i zaletami – „Przeciw Państwu” opowiada wszystkich jego
                  wzlotach i upadkach. Szczególnie interesujące są ukazane w
                  książce wieloletnie związki łączące go z Ludwigiem von Misesem
                  i Ayn Rand.
                </div>
              </div>
            </Row>
            <Row>
              <Col sm={5}>
                <Button variant="yellow">Zobacz więcej</Button>
              </Col>
              <Col sm={7} className={styles.img}>
                <Image src={pub6} alt="obrazek" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
