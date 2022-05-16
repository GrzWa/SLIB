import Image from 'next/image';
import styles from './HeroSection.module.css';
import Murray_Rothbard from '@/public/images/backgrounds/Murray_Rothbard.png';
import { Button } from '@/components/Button/';

const buttons = [
  {
    label: "Button",
    color: "",
    link: 'http;//'
  },
  {
    label: "Button",
    link: 'http;//'
  }
]

export const HeroSection = ({data:{title, subtitle, decription, buttons }}) => {
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
            {/* {buttons?.map()} */}
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
