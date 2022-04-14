import styles from './Main.module.css';
export const Main = ({ children }: any) => (
  <>
    <div className={styles.main}>{children}</div>
  </>
);
