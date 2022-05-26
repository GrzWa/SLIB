import { Button } from '@/components/Button';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from './PublicationGrid.module.css';

export const PublicationGrid = ({
  data: { image, title, subtitle, author, abstract },
  odd,
}) => {
  const imageCol = (
    <Col sm={6} className={styles[`image-container`]}>
      <div
        className={odd ? styles[`background-odd`] : styles[`background-even`]}
      />
      <div className={odd ? styles[`image-odd`] : styles[`image-even`]}>
        <Image src={image} alt="" height={735} width={500} />
      </div>
    </Col>
  );

  const textCol = (
    <Col sm={6} className={styles[`text-container`]}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.abstract}>{abstract}</div>
      <div className={styles.button}>
        <Button>Zobacz więcej</Button>
      </div>
    </Col>
  );
  return (
    <>
      <Row className={styles.row}>
        {odd ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </Row>
    </>
  );
};
