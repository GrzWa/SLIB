import { Title } from '@/components/common';
import { NewsGrid } from '@/components/News';

export const NewsSection = () => {
  const title = `Aktualności`;
  const alignment = `center`;

  return (
    <>
      <Title title={title} alignment={alignment} />
      <NewsGrid />
    </>
  );
};
