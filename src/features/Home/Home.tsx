import { Layout } from '@/components/Layout';
import {
  HeroSection,
  NewsSection,
  OurValuesSection,
  SupportUsSection,
} from './components/Sections';
import { CatalogueSection } from './components/Sections/CatalogueSection';
import { EventsSection } from './components/Sections/EventsSection';
import { OurPublicationsSection } from './components/Sections/OurPublicationsSection';
import { VideoSection } from './components/Sections/VideoSection';

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
        <CatalogueSection />
        <VideoSection />
      </Layout>
    </>
  );
}
