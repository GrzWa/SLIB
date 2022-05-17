import { Title } from '@/components/common';
import { CatalogueGrid } from '@/components/Layout/components/CatalogueGrid/CatalogueGrid';

export const CatalogueSection = ({ data }) => {
  return (
    <>
      <Title
        title={`Katalog wiedzy na temat libertarianizmu`}
        alignment={`center`}
      />
      <CatalogueGrid data={data} />
    </>
  );
};
