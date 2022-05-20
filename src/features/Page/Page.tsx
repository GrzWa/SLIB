import { Title } from '@/components/common';
import { Layout } from '@/components/Layout';
import { Col, Row } from 'react-bootstrap';
import { SupportUsSection } from '../Home/components/Sections';
import styles from './Page.module.css';
import arrow_left from '@/public/images/icons/arrow_left.svg';
import kalendarz from '@/public/images/logo/calendar.svg';
import person from '@/public/images/logo/person_icon.svg';
import Image from 'next/image';

export const Page = ({
  data: { title, date, author, main, side, backButton },
}) => {
  console.log(side);
  return (
    <Layout>
      <div className={styles.container}>
        {backButton ? (
          <div className={styles[`back-button`]}>
            <Image src={arrow_left} />
            {backButton.label}
          </div>
        ) : null}
        <div className={styles.title}>
          <Title alignment="left" padding="reduced">
            {title}
          </Title>
        </div>
        {date ? (
          <div className={styles.date}>
            <span>
              <Image src={kalendarz} alt="" /> {date}
            </span>
            {author ? (
              <span>
                <Image src={kalendarz} alt="" /> {author}
              </span>
            ) : null}
          </div>
        ) : null}
        <Row>
          <Col sm={8}>{main}</Col>
          <Col sm={4}>{side}</Col>
        </Row>
      </div>
      <SupportUsSection />
    </Layout>
  );
};
