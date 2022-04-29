// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink, Row } from 'react-bootstrap';
import { LogoSL } from '@/components/Icons';
import { Menu } from '@/components/Layout/components/Menu';
import mainbg from '../../../../../public/images/backgrounds/mainbg.svg';
import Image from 'next/image';
import styles from './header.module.css';
import lupa from '@/public/images/icons/lupa.svg'
import YT from '@/public/images/icons/YT.svg'
import TW from '@/public/images/icons/TW.svg'
import FB from '@/public/images/icons/FB.svg'

export const Header = () => {
  const img_lupa = <Image src={lupa} alt='icon' />
  const img_YT = <Image src={YT} alt='icon' />
  const img_TW = <Image src={TW} alt='icon' />
  const img_FB = <Image src={FB} alt='icon' />

  const data1 = [
    `Aktualności`,
    `O nas`,
    `Centrum analiz`,
    `Nasze wideo`,
    `Oddziały`,
    `Baza wiedzy`,
    ` Kontakt`,
    `Dołącz!`,
  ];
  const data2 = [
    img_lupa,
    img_YT,
    img_TW,
    img_FB,
    <>PL<br />EN</>,
  ];
  return (
    <>
      <div className={styles.bg}>
        <Image src={mainbg} alt={`Tło`} layout="responsive" />
      </div>

      <Navbar expand='xl' className={styles.navbar}>
        <div className={styles.container}>
          <NavbarBrand className={styles['nav-brand']}>
            <LogoSL />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.collapsed}/>
          <Navbar.Collapse id='bacic-navbar-nav'>
            <div className={styles.menu}>
              <Nav className={styles['bar-left']}>
                <Menu data={data1} />
              </Nav>
              <Nav className={styles['bar-right']}>
                <Menu data={data2} />
              </Nav>
            </div>
          </Navbar.Collapse>
          </div>
      </Navbar>
    </>
  );
};
