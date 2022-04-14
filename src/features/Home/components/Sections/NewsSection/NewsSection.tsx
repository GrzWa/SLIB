import { Title } from '@/components/common';
import { NewsGrid } from '@/components/News';
import Image from 'next/image';
import checkered from '../../../../../../public/images/backgrounds/checkered.svg';
import styles from './NewsSection.module.css';

export const NewsSection = () => {
  const title = `Aktualności`;
  const alignment = `center`;

  return (
    <>
      <div className={styles.checkered}>
        <Image src={checkered} alt="background" />
      </div>
      <Title title={title} alignment={alignment} />
      <NewsGrid />
    </>
  );
};
