import { Title } from '@/components/common';
import { CheckeredBackground } from '@/components/common/CheckeredBackground';
import { NewsGrid } from '@/components/News';

export const NewsSection = () => {
  const title = `Aktualności`;
  const alignment = `center`;

  return (<>
      <CheckeredBackground />
      <Title title={title} alignment={alignment} />
      <NewsGrid />
    </>);
};
