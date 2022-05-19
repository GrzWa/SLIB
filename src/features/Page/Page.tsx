import { Title } from '@/components/common';
import { Layout } from '@/components/Layout';
import { Col, Row } from 'react-bootstrap';
import { SupportUsSection } from '../Home/components/Sections';
import styles from './Page.module.css';
import arrow_left from '@/public/images/icons/arrow_left.svg';
import Image from 'next/image';

export const Page = ({ data: { title, main, side, backButton } }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles[`back-button`]}>
          <Image src={arrow_left} />
          {backButton.label}
        </div>
        <Title alignment="left">{title}</Title>
        <Row>
          <Col sm={8}>{main}</Col>
          <Col sm={4}>{side}</Col>
        </Row>
      </div>
      <SupportUsSection />
    </Layout>
  );
};
