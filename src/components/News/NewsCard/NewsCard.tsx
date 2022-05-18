import Image from 'next/image';
import styles from './NewsCard.module.css';
import calendar from '@/public/images/logo/calendar.svg';
import person_icon from '@/public/images/logo/person_icon.svg';
import { Button } from '@/components/Button';

export const NewsCard = ({ data }) => {
  const { image, date, author, title, subtitle, buttons } = data;

  return (
    <div className={styles.card}>
      {image ? (
        <div className={title && !author ? styles.square : styles.image}>
          <Image src={image} alt="" />
        </div>
      ) : null}

      {title ? (
        <div
          className={
            image && !author
              ? `${styles.content} ${styles.square}`
              : styles.content
          }
        >
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
    </div>
  );
};
