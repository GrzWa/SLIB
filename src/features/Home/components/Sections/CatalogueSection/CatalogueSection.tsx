import { Title } from '@/components/common';
import { CatalogueGrid } from '@/components/Layout/components/CatalogueGrid/CatalogueGrid';

export const CatalogueSection = ({ data }) => {
  return (
    <>
      <Title alignment={`center`}>
        Katalog wiedzy na temat libertarianizmu
      </Title>
      <CatalogueGrid data={data} />
    </>
  );
};
