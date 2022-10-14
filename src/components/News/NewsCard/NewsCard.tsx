import Image from 'next/image';
import styles from './NewsCard.module.css';
import calendar from '@/public/images/logo/calendar.svg';
import person_icon from '@/public/images/logo/person_icon.svg';
import { Button } from '@/components/Button';
import clsx from 'clsx';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
interface Props {
  data: any;
  variant?: 'vertical' | 'horizontal' | 'compact';
}

export const NewsCard: FC<Props> = ({ data, variant = `vertical` }) => {
  const { image, date, author, title, subtitle, buttons } = data;

  const clsImageContainer = clsx([
    variant === `vertical` && styles[`image-narrow`],
    variant === `compact` && styles.square,
  ]);

  const clsImage = clsx([variant === `compact` && styles[`image-fit`]]);

  const clsContent = clsx([
    styles.content,
    variant === `compact` && styles.square,
  ]);

  const clsCard = clsx([
    styles.card,
    variant === `vertical` && styles[`card-vertical`],
  ]);

  const imageJSX = (
    <>
      {image ? (
        <Image
          src={image}
          alt=""
          className={clsImage}
          layout="fill"
          objectFit={variant === `vertical` ? `cover` : `contain`}
        />
      ) : null}
    </>
  );

  const contentJSX = (
    <>
      {title ? (
        <div className={clsContent}>
          {date ? (
            <p className={styles.date}>
              <Image src={calendar} alt="kalendarz" />
              {` `}
              {date}
              {` `}
              {author ? (
                <>
                  <Image src={person_icon} alt="osoba" />
                  {` `}
                  {author}
                </>
              ) : null}
            </p>
          ) : null}

          {title ? <div className={styles.title}>{title}</div> : null}

          {subtitle ? (
            <p className={styles.subtitle}>
              <div className={styles.shadow}></div>
              {subtitle}
            </p>
          ) : null}

          <div className={styles.btns}>
            {buttons?.map((button: any) => (
              <Button variant={button.variant} key={button.label}>
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <>
      {variant === `horizontal` ? (
        <div className="container-fluid">
          <Row className={styles.card}>
            <Col md={12} lg={6} className={styles.col}>
              {contentJSX}
            </Col>
            <Col md={6} className={styles.col}>
              <Image
                src={image}
                alt=""
                className={clsImage}
                layout="fill"
                objectFit="cover"
              />
            </Col>
          </Row>
        </div>
      ) : (
        <div className={clsCard}>
          <div className={clsImageContainer}>{imageJSX}</div>
          {contentJSX}
        </div>
      )}
    </>
  );
};
