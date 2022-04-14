import styles from './Button.module.scss';
import { FC } from 'react';
import clsx from 'clsx';

interface Props {
  variant: 'yellow' | 'white' | 'black';
}

export const Button: FC<Props> = ({ children, variant = `yellow` }) => {
  const cls = clsx([
    styles.button,
    variant === `yellow` && styles[`button--yellow`],
    variant === `white` && styles[`button--white`],
    variant === `black` && styles[`button--black`],
  ]);

  return (
    <>
      <button type="button" className={cls}>
        {children}
      </button>
    </>
  );
};
