import { Title } from '@/components/common';
import { RecommendedCards } from '@/components/RecommendedCards';

export const RecommendedSection = ({ data }) => {
  return (
    <>
      <Title title="Polecamy" />
      <RecommendedCards data={data} />
    </>
  );
};
