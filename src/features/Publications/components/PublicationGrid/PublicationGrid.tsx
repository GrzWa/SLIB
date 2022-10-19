import { Button } from '@/components/Button';
import clsx from 'clsx';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from './PublicationGrid.module.css';

export const PublicationGrid = ({
  data: { image, title, subtitle, author, abstract },
  odd,
}) => {
  const clsBackground = clsx([
    styles.background,
    odd === true && styles[`background-odd`],
  ]);

  const clsRow = clsx([styles.row, odd === true && styles[`row-odd`]]);

  const imageCol = (
    <Col ex={12} sm={6} className={styles[`image-container`]}>
      <div className={clsBackground} />
      <div className={styles.image}>
        <Image
          src={image}
          alt=""
          height="100%"
          width="100%"
          layout="fill"
          objectFit="contain"
          objectPosition={odd ? `right` : `left`}
        />
      </div>
    </Col>
  );

  const textCol = (
    <Col ex={12} sm={6} className={styles[`text-container`]}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.abstract}>
        <div className={styles.shadow} />
        {abstract}
      </div>
      <div className={styles.button}>
        <Button>Zobacz więcej</Button>
      </div>
    </Col>
  );
  return (
    <>
      <Row className={clsRow}>
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
