import { Nav } from 'react-bootstrap';
import styles from './MenuItems.module.css';

export const MenuItems = ({ data }: any) => {
  return (
    <>
      {data?.map((props: any) => {
        if (true) {
          return (
            <Nav.Link href="#" className={styles.element} key={Math.random()}>
              {props}
            </Nav.Link>
          );
        }
      })}
    </>
  );
};
