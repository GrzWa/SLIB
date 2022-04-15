import { Title } from '@/components/common';
import { EventsGrid } from '@/components/Layout/components/EventsGrid';

export const EventsSection = () => {
  return (
    <>
      <Title title="Nadchodzące wydarzenia" alignment="center" />
    <EventsGrid />
    </>
  );
};
