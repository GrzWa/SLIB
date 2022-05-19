import { Title } from '@/components/common';
import { EventsGrid } from '@/components/Layout/components/EventsGrid';

export const EventsSection = ({ data }) => {
  return (
    <>
      <Title alignment="center">Nadchodzące wydarzenia</Title>
      <EventsGrid data={data} />
    </>
  );
};
