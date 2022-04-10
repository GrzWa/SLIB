import styles from './Title.module.css';

export const Title = (props: any) => {
  return (
    <>
      <div className={`${styles[`${props.alignment}`]} ${styles.title}`}>
        <span>{props.title}</span>
      </div>
    </>
  );
};
