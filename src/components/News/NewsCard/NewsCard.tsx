import Image from 'next/image';
import styles from './NewsCard.module.css';
import calendar from '@/public/images/logo/calendar.svg';
import person_icon from '@/public/images/logo/person_icon.svg';
import { Button } from '@/components/Button';
import clsx from 'clsx';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
interface Props {
  variant?: 'vertical' | 'horizontal' | 'compact';
}

export const NewsCard: FC<Props> = ({ data, variant = `vertical` }) => {
  const { image, date, author, title, subtitle, buttons } = data;

  const clsImage = clsx([
    variant === `vertical` && styles[`image-narrow`],
    // variant === `horizontal` && styles[`image-full`],
    variant === `compact` && styles.square,
  ]);

  const clsContent = clsx([
    styles.content,
    variant === `compact` && styles.square,
  ]);

  const imageJSX = (
    <>
      {image ? (
        <div className={clsImage}>
          <Image src={image} alt="" />
        </div>
      ) : null}
    </>
  );

  const contentJSX = (
    <>
      {title ? (
        <div className={clsContent}>
          {date ? (
            <p className={styles.data}>
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

          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}

          <div className={styles.buttons}>
            {buttons?.map((button) => (
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
    <div className={styles.card}>
      {variant === `horizontal` ? (
        <>
          <Row>
            <Col sm={6} className={styles.col}>
              {contentJSX}
            </Col>
            <Col sm={6} className={styles.col}>
              {imageJSX}
            </Col>
          </Row>
        </>
      ) : (
        <>
          {imageJSX}
          {contentJSX}
        </>
      )}
    </div>
  );
};
