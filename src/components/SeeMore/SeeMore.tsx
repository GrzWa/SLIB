import clsx from 'clsx';
import { FC } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from './SeeMore.module.css';

interface Props {
  alignment?: 'right' | 'center';
  border?: 'yes' | 'no';
}

export const SeeMore: FC<Props> = ({ alignment, border }) => {
  const cls = clsx([styles.more, border === `yes` && styles.border]);

  const cls2 = clsx([
    styles[`col-more`],
    alignment === `center` && styles.center,
  ]);

  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col sm={6} md={4} lg={3} xl={2} className={cls2}>
            <div className={cls}>Zobacz więcej</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
