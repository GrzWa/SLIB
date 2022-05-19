import { Title } from '@/components/common';
import { RecommendedCards } from '@/components/RecommendedCards';

export const RecommendedSection = ({ data }) => {
  return (
    <>
      <Title>Polecamy</Title>
      <RecommendedCards data={data} />
    </>
  );
};
