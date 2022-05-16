import styles from './NewsGrid.module.css';
import hoppe from '../../../public/images/news/hoppe.png';
import img1 from '../../../public/images/news/img1.png';
import img2 from '../../../public/images/news/img2.png';
import img3 from '../../../public/images/news/img3.png';
import img4 from '../../../public/images/news/img4.png';
import czytaj from '../../../public/images/news/czytaj.png';
import calendar from '../../../public/images/logo/calendar.svg';
import person_icon from '../../../public/images/logo/person_icon.svg';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

export const NewsGrid = () => {

  const card1 = {img: img1, date: '27 stycznia 2021', text: `Brad Polumbo – Tulsi Gabbard i Thomas Massie w obronie 4.
  poprawki`}
  const card2 = {img: img2, date: '27 stycznia 2021', text: `Łukasz Frontczak – Co robić, gdy znikniemy z Facebooka?`}
  const card3 = {img: img3, date: '27 stycznia 2021', text: `Audiobook z „Libertariańskimi dylematami” Jakuba Bożydara
  Wiśniewskiego`}
  const card4 = {img: img4, date: '', text: ``}

  return (
    <>
      <div className="container">
        <Row className={styles.center}>
          <Col lg={6} md={12} className={styles[`col-big`]}>
            <div className={styles.card}>
              <p className={styles.data}>
                <Image src={calendar} alt="kalendarz" />
                27 stycznia <Image src={person_icon} alt="osoba" />
                2021 Konto Administracyjne
              </p>
              <div className={styles.title}>
                Hans-Hermann Hoppe o lockdownach
              </div>
              <p className={styles.text}>
                W dobie z jednej strony coraz powszechniejszego buntu przeciwko
                rządowym lockdownom powodującym ekonomiczną ruinę tysięcy
                przedsiębiorstw, z drugiej zaś – wciąż wysokiej dziennej liczby
                zakażeń i zgonów wywołanych koronawirusem SARS-CoV-2, na nowo
                rozgorzała debata na temat dopuszczalnych granic w poświęcaniu
                przez rząd majątków i wolności obywateli w imię walki z...
              </p>
              <div className={styles.buttons}>
                <button
                  type="button"
                  className={`btn ${styles[`custom-btn2`]}`}
                >
                  Informacje prasowe
                </button>
                <button
                  type="button"
                  className={`btn ${styles[`custom-btn2`]}`}
                >
                  COVID-19
                </button>
                <button
                  type="button"
                  className={`btn ${styles[`custom-btn2`]}`}
                >
                  Polski
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className={styles[`col-big`]}>
            <Image src={hoppe} alt="Hoppe o lockdownach" />
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6}>
            <div className="card" style={{ height: `35rem` }}>
              <Image src={img1} className="card-img-top" alt="img1" />
              <div className="card-body">
                <p className="card-text mb-5">
                  <small className="text-muted">27 stycznia 2021</small>
                </p>
                <h5 className="card-title">
                  Brad Polumbo – Tulsi Gabbard i Thomas Massie w obronie 4.
                  poprawki
                </h5>
                <Image src={czytaj} alt="Idź" />
              </div>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="card" style={{ height: `35rem` }}>
              <Image src={img2} className="card-img-top" alt="img2" />
              <div className="card-body">
                <p className="card-text  mb-5">
                  <small className="text-muted">27 stycznia 2021</small>
                </p>
                <h5 className="card-title">
                  Łukasz Frontczak – Co robić, gdy znikniemy z Facebooka?
                </h5>
                <Image src={czytaj} alt="Idź" />
              </div>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="card" style={{ height: `35rem` }}>
              <Image src={img3} className="card-img-top" alt="img3" />
              <div className="card-body">
                <p className="card-text mb-5">
                  <small className="text-muted">27 stycznia 2021</small>
                </p>
                <h5 className="card-title">
                  Audiobook z „Libertariańskimi dylematami” Jakuba Bożydara
                  Wiśniewskiego
                </h5>
                <a
                  href="#"
                  className="btn d-flex justify-content-md-end position-absolute bottom-0 end-0 pb-4 pe-4"
                >
                  <Image src={czytaj} alt="Idź" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="card" style={{ height: `35rem` }}>
              <Image src={img4} className="card-img-top" alt="img4" />
              <div className="card-body"></div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
