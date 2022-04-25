import { Title } from '@/components/common';
import styles from './VideoSection.module.css';

export const VideoSection = () => {
  return (
    <div className={styles[`main-container`]}>
      <Title title="Nasze wideo" text="white" underline="dark" />
    </div>
  );
};
