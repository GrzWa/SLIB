import styles from './BlankPage.module.css';

export const BlankPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shadow} />
      {children}
    </div>
  );
};
