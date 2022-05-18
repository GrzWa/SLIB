import { Title } from '@/components/common';
import { Layout } from '@/components/Layout';
import { Col, Row } from 'react-bootstrap';
import { SupportUsSection } from '../Home/components/Sections';
import styles from './Page.module.css';

export const Page = ({ data: { title, main, side } }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <Title title={title} alignment="left" />
        <Row>
          <Col sm={8}>{main}</Col>
          <Col sm={4}>{side}</Col>
        </Row>
      </div>
      <SupportUsSection />
    </Layout>
  );
};
