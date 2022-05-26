import { Title } from '@/components/common';
import { Layout } from '@/components/Layout';
import { CatalogueGrid } from '@/components/Layout/components/CatalogueGrid/CatalogueGrid';
import { SupportUsSection } from '../Home/components/Sections';
import styles from './Catalogue.module.css';

export const Catalogue = ({
  data: { title, subtitle, s2, creators, cards },
}) => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.shadow}></div>
          <Title>{title}</Title>
          <div className={styles.paragraph}>{subtitle}</div>
          <Title>Forma</Title>
          <div className={styles.paragraph}>{s2}</div>
          <CatalogueGrid data={cards} />
          <Title>Zespół twórców</Title>
          {creators?.map((creator) => (
            <div
              key={creator.per}
              className={`${styles.person} ${styles.paragraph}`}
            >
              <span>{creator.name}</span>
              {creator.title ? ` ${creator.title}` : null} - {creator.des}
            </div>
          ))}
          <SupportUsSection />
        </div>
      </Layout>
    </>
  );
};
