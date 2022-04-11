import styles from './NewsGrid.module.css';
import hoppe from '../../../public/images/news/hoppe.png';
import img1 from '../../../public/images/news/img1.png';
import img2 from '../../../public/images/news/img2.png';
import img3 from '../../../public/images/news/img3.png';
import img4 from '../../../public/images/news/img4.png';
import czytaj from '../../../public/images/news/czytaj.png';
import Image from 'next/image';

export const NewsGrid = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-6"
            style={{ marginRight: `0px`, paddingRight: `0px` }}
          >
            <div className="card border-0">
              <div className={`card-body ${styles.card}`}>
                <h5 className="card-title">Hans-Hermann Hoppe o lockdownach</h5>
                <p className="card-text">
                  W dobie z jednej strony coraz powszechniejszego buntu
                  przeciwko rządowym lockdownom powodującym ekonomiczną ruinę
                  tysięcy przedsiębiorstw, z drugiej zaś – wciąż wysokiej
                  dziennej liczby zakażeń i zgonów wywołanych koronawirusem
                  SARS-CoV-2, na nowo rozgorzała debata na temat dopuszczalnych
                  granic w poświęcaniu przez rząd majątków i wolności obywateli
                  w imię walki z...
                </p>
                <div className={styles.buttons}>
                  <button
                    type="button"
                    className={`btn ${styles[`custom-btn2`]}`}
                  >
                    {/* <a
                    href="#"
                    className="card-link text-dark text-decoration-none"
                  > */}
                    Informacje prasowe
                    {/* </a> */}
                  </button>
                  <button
                    type="button"
                    className={`btn ${styles[`custom-btn2`]}`}
                  >
                    {/* <a
                    href="#"
                    className="card-link text-dark text-decoration-none"
                  > */}
                    COVID-19
                    {/* </a> */}
                  </button>
                  <button
                    type="button"
                    className={`btn ${styles[`custom-btn2`]}`}
                  >
                    {/* <a
                    href="#"
                    className="card-link text-dark text-decoration-none"
                  > */}
                    Polski
                    {/* </a> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginLeft: `0px`, paddingLeft: `0px` }}
          >
            <Image src={hoppe} alt="Hoppe o lockdownach" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3 pe-1 ps-1">
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
                <a
                  href="#"
                  className="btn d-flex justify-content-md-end position-absolute bottom-0 end-0 pb-4 pe-4"
                >
                  <Image src={czytaj} alt="Idź" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 pe-1 ps-1">
            <div className="card" style={{ height: `35rem` }}>
              <Image src={img2} className="card-img-top" alt="img2" />
              <div className="card-body">
                <p className="card-text  mb-5">
                  <small className="text-muted">27 stycznia 2021</small>
                </p>
                <h5 className="card-title">
                  Łukasz Frontczak – Co robić, gdy znikniemy z Facebooka?
                </h5>
                <a
                  href="#"
                  className="btn d-flex justify-content-md-end position-absolute bottom-0 end-0 pb-4 pe-4"
                >
                  <Image src={czytaj} alt="Idź" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 pe-1 ps-1">
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
          </div>
          <div className="col-3 pe-1 ps-1">
            <div className="card" style={{ height: `35rem` }}>
              <Image src={img4} className="card-img-top" alt="img4" />
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
