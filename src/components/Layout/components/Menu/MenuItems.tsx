import { Col, Container, Nav, Row } from 'react-bootstrap';
import { MenuItem } from './MenuItem';
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
