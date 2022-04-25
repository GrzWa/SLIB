import clsx from 'clsx';
import { FC } from 'react';
import styles from './Title.module.css';

interface Props {
  title: string;
  text?: 'black' | 'white';
  underline?: 'yellow' | 'dark';
  alignment?: 'center' | 'left';
}

export const Title: FC<Props> = ({
  title,
  text = `black`,
  underline = `yellow`,
  alignment = `center`,
}) => {
  const cls = clsx(
    styles.title,
    text === `black` && styles[`t-black`],
    text === `white` && styles[`t-white`],
    underline === `yellow` && styles[`u-yellow`],
    underline === `dark` && styles[`u-dark`],
    alignment === `center` && styles.center,
    alignment === `left` && styles.left,
  );

  return (
    <>
      <div className={cls}>
        <span>{title}</span>
      </div>
    </>
  );
};
