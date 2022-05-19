import { Title } from '@/components/common';
import { CheckeredBackground } from '@/components/common/CheckeredBackground';
import { NewsGrid } from '@/components/News';

export const NewsSection = ({ data }) => {
  return (
    <>
      <CheckeredBackground />
      <Title>Aktualności</Title>
      <NewsGrid data={data} />
    </>
  );
};
