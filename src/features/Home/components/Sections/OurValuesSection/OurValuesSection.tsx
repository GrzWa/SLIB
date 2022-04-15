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

export const OurValuesSection = () => {
  const title = `Nasze wartości`;
  const alignment = `center`;

  const card1 = {
    img: meditate,
    title: `Wolność`,
    text: `brak przymusu; jest sferą dobrowolności, w której człowiek ma możliwość rozwoju samego siebie i osiągania postawionych sobie celów. Jest podstawowym warunkiem społecznego współistnienia w pokoju i harmonii.`,
  };
  const card2 = {
    img: mind,
    title: `Otwartość ideologiczna i realistyczna`,
    text: `to nastawienie bez uprzedzeń na nowe doświadczenia, punkty widzenia i znajomości. Zatrzaśnięcie się na dynamicznie zmieniający się świat, jest jak zamykanie oczu przed trudnościami, których chcemy uniknąć.`,
  };
  const card3 = {
    img: stairs,
    title: `Możliwość`,
    text: `wolność pozytywna; to okazja lub sytuacja, którą przy odpowiednim postępowaniu, można przekuć w sukces. Tylko w wolnym świecie jest dostępna dla każdego.`,
  };
  const card4 = {
    img: person,
    title: `Profesjonalizm`,
    text: `standardy i procedury; to wysoki poziom osiągnięcia kompetentności. To synergia, w której postępujemy w zgodzie z innymi, wedle przyjętych zasad. Szczerością w kontaktach, rzetelnością w działaniu i odpowiedzialnością za efekt końcowy.`,
  };
  return (
    <div className={styles.section}>
      <div className={styles.background} />
      <Title title={title} alignment={alignment} />

      <Container className={styles.container}>
        <Row className={styles[`row-lg`]}>
          {/* --------------------------------------------------------- */}
          <Col sm={12} md={4} xl={4} xxl={3} className={styles[`col-left`]}>
            <div className={styles.card}>
              <Image
                src={obrazek1}
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
                <CardValues content={card1} />
              </Col>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={card2} />
              </Col>
            </Row>
            <Row className={styles[`row-sm`]}>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={card3} />
              </Col>
              <Col xl={12} xxl={6} className={styles.col}>
                <CardValues content={card4} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

    // <div className={styles.section}>
    //   <div className={styles.background} />
    //   <Title title={title} alignment={alignment} />

    //   <Container className={styles.container}>
    //     <Row className={styles[`row-lg`]}>
    //       {/* --------------------------------------------------------- */}
    //       <Col xl={6} xxl={3} className={styles[`col-left`]}>
    //         <div className={styles.card}>
    //           <Image
    //             src={obrazek1}
    //             alt="Image"
    //             className={styles[`card-img`]}
    //           />
    //           <div className={styles[`card-content`]}>
    //             Helloowd asd adsada awd aw
    //           </div>
    //         </div>
    //       </Col>

    //       {/* --------------------------------------------------------- */}
    //       <Col xl={6} xxl={9} className={styles[`col-right`]}>
    //         <Row className={styles[`row-sm`]}>
    //           <Col xl={12} xxl={6} className={styles.col}>
    //             <CardValues content={card1} />
    //           </Col>
    //           <Col xl={12} xxl={6} className={styles.col}>
    //             <CardValues content={card2} />
    //           </Col>
    //         </Row>
    //         <Row className={styles[`row-sm`]}>
    //           <Col xl={12} xxl={6} className={styles.col}>
    //             <CardValues content={card3} />
    //           </Col>
    //           <Col xl={12} xxl={6} className={styles.col}>
    //             <CardValues content={card4} />
    //           </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};
