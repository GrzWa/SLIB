import Image from 'next/image';
import styles from './HeroSection.module.css';
import Murray_Rothbard from '@/public/images/backgrounds/Murray_Rothbard.png';
import { Button } from '@/components/Button/';

export const HeroSection = ({
  data: { title, subtitle, description, buttons, image },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <p>{description}</p>
        <div className={styles.button}>
          {buttons?.map((button) => (
            <Button variant={button.color} key={button.label}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.img}>{image}</div>
      </div>
    </div>
  );
};
