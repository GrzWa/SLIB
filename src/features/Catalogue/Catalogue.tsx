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
          <p>{subtitle}</p>
          <Title>Forma</Title>
          <p>{s2}</p>
          <CatalogueGrid data={cards} />
          <Title>Zespół twórców</Title>
          {creators?.map((creator) => (
            <div key={creator.per} className={styles.person}>
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
