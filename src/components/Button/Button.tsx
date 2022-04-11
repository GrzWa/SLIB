import styles from './Button.module.css';
export const Button = ({
  children,
  text = `black`,
  background = `transparent`,
  outline = `transparent`,
}: any) => {
  const classes = `btn rounded-pill ${styles[`custom-btn`]}`;

  // yellow
  //   ? `btn rounded-pill ${styles[`custom-btn`]} ${styles[`ylw`]}`
  //   : `btn btn-light btn-outline-dark rounded-pill ${styles[`custom-btn`]}`;
  return (
    <>
      <button
        type="button"
        className={classes}
        style={{
          color: `${text}`,
          background: `${background}`,
          outline: `1px solid ${outline}`,
        }}
      >
        {children}
      </button>
    </>
  );
};
