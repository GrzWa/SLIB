import { Layout } from '@/components/Layout';
import {
  HeroSection,
  NewsSection,
  OurValuesSection,
  SupportUsSection,
} from './components/Sections';
import { CatalogueSection } from './components/Sections/CatalogueSection';
import { EventsSection } from './components/Sections/EventsSection';
import { MembersSection } from './components/Sections/MembersSection';
import { NewsletterSection } from './components/Sections/NewsletterSection';
import { OurPublicationsSection } from './components/Sections/OurPublicationsSection';
import { ParagraphSection } from './components/Sections/ParagraphSection';
import { PartnersSection } from './components/Sections/PartnersSection';
import { RecommendedSection } from './components/Sections/RecommendedSection';
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
        <ParagraphSection />
        <RecommendedSection />
        <MembersSection />
        <PartnersSection />
        <NewsletterSection />
      </Layout>
    </>
  );
}
