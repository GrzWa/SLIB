import { Layout } from '@/components/Layout';
import {
  HeroSection,
  NewsSection,
  OurValuesSection,
  SupportUsSection,
} from './components/Sections';
import { EventsSection } from './components/Sections/EventsSection';
import { OurPublicationsSection } from './components/Sections/OurPublicationsSection';

export function Home() {
  return (
    <>
      <Layout>
        <HeroSection />
        <NewsSection />
        <SupportUsSection />
        <OurValuesSection />
        <EventsSection />
        <OurPublicationsSection />
      </Layout>
    </>
  );
}
