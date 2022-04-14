import { Button } from '@/components/Button';
import Image from 'next/image';
import skarbonka from '../../../../../../public/images/logo/skarbonka.svg';
import styles from './SupportUsSection.module.css';

export const SupportUsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navy}>
        <div className={styles.content}>
          <div className={styles.title}>Wolność tworzy możliwości!</div>
          <div className={styles.text}>
            Wesprzyj naszą działalność - wpłać dowoloną kwotę lub zgłoś chęć
            wolontariatu
          </div>
        </div>
        <div className={styles.buttons}>
          <span className={styles.button}>
            <Button variant="yellow">Darowizna</Button>
          </span>
          <span className={styles.button}>
            <Button variant="white">Wolontariat</Button>
          </span>
        </div>
      </div>
      <div className={styles.yellow}>
        <div className={styles.skarbonka}>
          <Image src={skarbonka} alt="background" className={styles.image} />
        </div>
      </div>
    </div>

    // <div className={styles.images}>
    //   <div className={styles.navy}>
    //     <div className={styles.content}>
    //       <div className={styles.title}>Wolność tworzy możliwości!</div>
    //       <div className={styles.text}>
    //         Wesprzyj naszą działalność - wpłać dowoloną kwotę lub zgłoś chęć
    //         wolontariatu
    //       </div>
    //       <Button variant="yellow">Darowizna</Button>
    //       <Button variant="white">Wolontariat</Button>
    //     </div>
    //     <Image src={rectangle_navy} alt="background" />
    //   </div>
    //   <div className={styles.yellow}>
    //     <Image src={trapezoid_yellow} alt="background" />
    //   </div>
    //   <div className={styles.skarbonka}>
    //     <Image src={skarbonka} alt="background" />
    //   </div>
    // </div>
  );
};
