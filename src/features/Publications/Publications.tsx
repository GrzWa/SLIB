import { Title } from '@/components/common';
import { PublicationGrid } from './components/PublicationGrid';
import styles from './Publications.module.css';

export const Publications = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.shadow}></div>

        <Title>Publikacje</Title>

        {data?.map((book, index) => (
          <div key={book.title}>
            <PublicationGrid data={book} odd={(index + 1) % 2 === 1} />
          </div>
        ))}
      </div>
    </>
  );
};
