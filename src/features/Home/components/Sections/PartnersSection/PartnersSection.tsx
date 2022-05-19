import { Title } from '@/components/common';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import styles from './PartnersSection.module.css';

export const PartnersSection = ({
  data: { image1, image2, image3, image4, image5, image6, image7, image8 },
}) => {
  return (
    <>
      <Title>Partnerzy</Title>
      <div className={styles.container}>
        <Col className={styles.col}>
          <Image src={image1} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image2} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image3} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image4} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image5} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image6} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image7} alt="sponsor" />
        </Col>
        <Col className={styles.col}>
          <Image src={image8} alt="sponsor" />
        </Col>
      </div>
    </>
  );
};
