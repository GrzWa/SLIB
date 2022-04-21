import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './EventsCard.module.css';
import { FC } from 'react';
import clsx from 'clsx';
interface Props {
  data: any;
  variant?: 'yellow' | 'light' | 'dark';
}

export const EventsCard: FC<Props> = ({ data, variant = `light` }) => {
  const cls = clsx([
    styles.col,
    variant === `yellow` && styles[`col--yellow`],
    variant === `light` && styles[`col--light`],
    variant === `dark` && styles[`col--dark`],
  ]);

  return (
    <Container className={styles.container}>
      <Row>
        <Col className={cls}>
          <Image src={data.image} alt="obrazek" className={styles.img} />
        </Col>
      </Row>
      <Row>
        <Col className={cls}>
          <div className={styles.date}>{data.date}</div>
          <div className={styles.text}>{data.text}</div>
        </Col>
      </Row>
    </Container>
  );
};
