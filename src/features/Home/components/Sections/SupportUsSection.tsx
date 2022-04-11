import { Button } from '@/components/Button';
import Image from 'next/image';
import rectangle_navy from '../../../../../public/images/backgrounds/rectangle_navy.svg';
import trapezoid_yellow from '../../../../../public/images/backgrounds/trapezoid_yellow.svg';
import styles from './SupportUsSection.module.css';

export const SupportUsSection = () => {
  return (
    <div className={styles.images}>
      <div className={styles.navy}>
        <div className={styles.content}>
          <div className={styles.title}>Wolność tworzy możliwości!</div>
          <div className={styles.text}>
            Wesprzyj naszą działalność - wpłać dowoloną kwotę lub zgłoś chęć
            wolontariatu
          </div>
          <Button background="#FFDC4e">Darowizna</Button>
          <Button outline="white" text="white">
            Wolontariat
          </Button>
        </div>
        <Image src={rectangle_navy} alt="background" />
      </div>
      <div className={styles.yellow}>
        <Image src={trapezoid_yellow} alt="background" />
      </div>
    </div>
  );
};
