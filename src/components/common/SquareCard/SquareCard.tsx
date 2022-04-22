import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import styles from './SquareCard.module.css';

export const SquareCard = (props: any) => {
  const variant = props.variant;
  const { num, title, text } = props.data;

  const cls = clsx([
    styles.container,
    variant === `yellow` && styles[`container--yellow`],
    variant === `light` && styles[`container--light`],
    variant === `dark` && styles[`container--dark`],
  ]);

  return (
    <>
      <div className={cls}>
        <div className={styles.content}>
          <Row className={styles[`row-top`]}>
            <Col className={styles.col}>
              <div>{title}</div>
              <span>{text}</span>
            </Col>
          </Row>
          <Row className={styles[`row-bot`]}>
            <Col className={styles.col}>{num}</Col>
          </Row>
        </div>
      </div>
    </>
  );
};
