import clsx from 'clsx';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './SquareCard.module.css';

interface Props {
  data: any;
  // num?: any;
  // title?: string;
  // text?: string;
  variant?: 'yellow' | 'light' | 'lightest' | 'dark';
}
export const SquareCard: FC<Props> = ({ data, variant = `light` }) => {
  // const variant = props.variant;
  // const { num, title, text } = props.data;

  const cls = clsx([
    styles.container,
    variant === `yellow` && styles[`container--yellow`],
    variant === `light` && styles[`container--light`],
    variant === `lightest` && styles[`container--lightest`],
    variant === `dark` && styles[`container--dark`],
  ]);

  return (
    <>
      <div className={cls}>
        <div className={styles.content}>
          <Row className={styles[`row-top`]}>
            <Col className={styles.col}>
              <div>{data.title}</div>
              <span>{data.text}</span>
            </Col>
          </Row>
          {data.num ? (
            <Row className={styles[`row-bot`]}>
              <Col className={styles.col}>{data.num}</Col>
            </Row>
          ) : null}
        </div>
      </div>
    </>
  );
};
