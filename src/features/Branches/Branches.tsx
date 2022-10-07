import { Title } from '@/components/common';
import { Layout } from '@/components/Layout';
import { BlankPage } from '@/components/Layout/components/BlankPage';
import { SupportUsSection } from '../Home/components/Sections';
import { BranchesMap } from './components/BranchesMap';

export const Branches = ({ data }) => {
  return (
    <Layout>
      <BlankPage>
        <Title>Oddziały</Title>
        <BranchesMap data={data} />
        <SupportUsSection />
      </BlankPage>
    </Layout>
  );
};
