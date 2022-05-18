import clsx from 'clsx';
import styles from './SideList.module.css';

export const SideList = ({ data: { type, items } }) => {
  const cls = clsx([styles.item]);
  return (
    <>
      {items.map((item, index) => (
        <div
          className={
            index % 2 === 0 ? styles.item : `${styles.item} ${styles.dark}`
          }
          key={item}
        >
          {type === `numbered` ? `${index + 1}. ` : null}
          {item}
        </div>
      ))}
    </>
  );
};
