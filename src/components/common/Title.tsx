import clsx from 'clsx';
import { FC } from 'react';
import styles from './Title.module.css';

interface Props {
  text?: 'black' | 'white' | 'thin';
  underline?: 'yellow' | 'dark' | 'grey';
  alignment?: 'center' | 'left';
  padding?: 'reduced';
}

export const Title: FC<Props> = ({
  children,
  text = `black`,
  underline = `yellow`,
  alignment = `center`,
  padding = ``,
}) => {
  const cls = clsx(
    styles.title,
    text === `black` && styles[`t-black`],
    text === `white` && styles[`t-white`],
    text === `thin` && styles[`t-thin`],
    underline === `yellow` && styles[`u-yellow`],
    underline === `dark` && styles[`u-dark`],
    underline === `grey` && styles[`u-grey`],
    alignment === `center` && styles.center,
    alignment === `left` && styles.left,
    padding === `reduced` && styles.reduced,
  );

  return (
    <>
      <div className={cls}>
        <span>{children}</span>
      </div>
    </>
  );
};
