import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.css';
import { LogoSL } from '@/components/Icons';
import { FooterColumn } from './FooterColumn';
import FB from '@/public/images/icons/FB.svg';
import TW from '@/public/images/icons/TW.svg';
import clsx from 'clsx';

export const Footer = () => {
  const col1 = { top: [`Aktualności`, `Kontakt`, `Dołącz!`] };
  const col2 = {
    top: [`O nas`],
    bot: [`Publikacje`, `Finanse`, `Statut`, `Brandbook`, `Wesprzyj mas`],
  };
  const col3 = {
    top: [`Centrum analiz`],
    bot: [
      `Zespół`,
      `Interpelacje`,
      `Analizy i raporty`,
      `Wystąpienia publiczne`,
      `Projekty legislacyjne`,
      `Petycje`,
      `Zmień paragraf`,
    ],
  };
  const col4 = {
    top: [`Nasze video`],
    bot: [
      `Młodzieź kontra`,
      `Wykłady i prelekcje`,
      `Bez retuszu`,
      `Wywiady`,
      `Inne`,
    ],
  };
  const col5 = {
    top: [`Baza wiedzy`],
    bot: [
      `Katalog wiedzy nt. libertarianizmu`,
      `Krajowe projekty`,
      `Artykuły`,
      `Blog`,
      `Fanpage`,
      `Ksiąka`,
      `Organizacja`,
      `Serwis internetowy`,
    ],
  };
  const col6 = {
    top: [`Oddziały`],
    bot: [
      `Stwórz oddział`,
      `Białystok`,
      `Bielsko-biała`,
      `Bydgoszcz`,
      `Katowice`,
      `Kielce`,
      `Koszalin`,
      `Kraków`,
      `Londyn`,
      `Łódź`,
      `Olsztyn`,
      `Poznań`,
      `Tomaszów Mazowiecki`,
      `Toruń`,
      `Trójmiasto`,
      `Warszawa`,
      `Wrocław`,
    ],
  };

  const clsContainer = clsx([`container-fluid`, styles.container]);

  return (
    <>
      <div className={clsContainer}>
        <Row>
          <Col className={styles.logo}>
            <LogoSL />
          </Col>
          <FooterColumn data={col1} />
          <FooterColumn data={col2} />
          <FooterColumn data={col3} />
          <FooterColumn data={col4} />
          <FooterColumn data={col5} />
          <FooterColumn data={col6} />
        </Row>
        <Row className={styles.bottom}>
          <Col sm={4} className={styles.left}>
            © 2021 Stowarzyszenie Libertariańskie. All Rights Reserved
          </Col>
          <Col sm={8} className={styles.right}>
            <div className={styles.img}>
              <Image src={FB} alt="Facebook" />
            </div>
            <div className={styles.img}>
              <Image src={TW} alt="Twitter" className={styles.img} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
