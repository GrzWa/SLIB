import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from './CardValues.module.css';
export const CardValues = (props: any) => {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col sm={3} className={styles.image}>
          <Image src={props.content.image} alt="obrazek" />
        </Col>
        <Col sm={9} className={styles.col}>
          <div className={styles.right}>
            <div className={styles.title}>{props.content.title}</div>
            <div className={styles.text}>{props.content.subtitle}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
