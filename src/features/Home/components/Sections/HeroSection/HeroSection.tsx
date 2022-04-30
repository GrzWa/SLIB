import Image from 'next/image';
import styles from './HeroSection.module.css';
import Murray_Rothbard from '@/public/images/backgrounds/Murray_Rothbard.png';
import { Button } from '@/components/Button/';

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
          <div className={styles.title}>Lorem ipsum</div>
          <div className={styles.subtitle}>
            iusto odio dignissimos ducimus qui blanditiis
          </div>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus.
          </p>
          <div className={styles.button}>
            <Button variant="yellow">Consequatur</Button>
            <Button variant="black">Similique sunt</Button>
          </div>
      </div>
      <div className={styles.background}>
        <div className={styles.img}>
          <Image src={Murray_Rothbard} alt="Murray Rothbard"/>
        </div>
      </div>
    </div>
    );
};
