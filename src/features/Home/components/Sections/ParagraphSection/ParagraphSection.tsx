import { Title } from '@/components/common';
import { FormElement } from '@/components/FormElement';
import { SeeMore } from '@/components/SeeMore';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './ParagraphSection.module.css';

export const ParagraphSection = () => {
  return (
    <>
      <Title title="Zmień paragraf" />
      <Container className={styles.container}>
        <div className={styles.background} />
        <Row className={styles.row}>
          <Col sm={12} md={6} className={styles.left}>
            <FormElement title='Przepis*'/>
            <FormElement title='Źródło przepisu*' description='Proszę podać dokładne źródło aktu prawnego z Dziennika Ustaw oraz wyszczególnić, które fragmenty aktu prawnego są omawiane'/>
            <FormElement title='Opis regulacji*' description='Jak działa? Jaka jest jej istota?'/>
            <FormElement title='Dziedzina*' />
            <FormElement title='Uzasadnienie liberalizacji*' />
            <FormElement title='Proponowana nowa treść przepisu' />
          </Col>
            <div className={styles['see-more']}>
                <SeeMore alignment="center" />
            </div>
          <Col sm={12} md={6} className={styles.right}>
            <div className={styles.content}>
              <div className={styles.paragraph}>
                <span>„Zmień Paragraf”</span> jest inicjatywą polegającą na
                zbieraniu konkretnych pomysłów na zmiany w prawie, które ułatwią
                życie nam wszystkim oraz szlifowaniu ich aż do formy projektów
                ustaw. Polskie prawo często stawia obywatelom zupełnie{` `}
                <span>niepotrzebne przeszkody</span>. Ideą tej akcji jest
                zebranie wiedzy o takich problemach, opracowanie rozwiązań,
                następnie zaś lobbowanie na rzecz ich wdrożenia. Do tego celu
                potrzebujemy jednak uzyskać wiedzę na temat konkretnych
                przepisów i ich wpływu na wolność gospodarczą lub osobistą.
              </div>
              <div className={styles.paragraph}>
                Chętnych pomóc nam osiągnąć te plany zapraszamy do{` `}
                <span>wypełnienia poniższego formularza</span>. Podanie
                dokładnego źródła omawianych przepisów oraz uzasadnienie ich
                liberalizacji jest konieczne (pola oznaczone gwiazdką).
                Zachęcamy również do pozostawienia swoich danych kontaktowych,
                dzięki czemu będziemy mogli ustalić szczegóły i ewentualnie
                nawiązać z Państwem bliższą współpracę. Zebrane za pomocą
                formularza dane zostaną wykorzystane do prac w Centrum Analiz
                SL. Najciekawsze propozycje będziemy zamieszczać na stronie
                akcji na facebooku.
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};
