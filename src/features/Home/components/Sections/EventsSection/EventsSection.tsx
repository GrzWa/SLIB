import { Title } from '@/components/common';
import { EventsGrid } from '@/components/Layout/components/EventsGrid';

export const EventsSection = ({ data }) => {
  return (
    <>
      <Title title="Nadchodzące wydarzenia" alignment="center" />
      <EventsGrid data={data} />
    </>
  );
};
