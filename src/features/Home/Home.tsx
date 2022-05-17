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

export function Home({ data }) {
  const {
    heroSection,
    newsSection,
    ourValuesSection,
    eventsSection,
    ourPublicationsSection,
    catalogueSection,
    videoSection,
    paragraphSection,
    recommendedSection,
    membersSection,
    partnersSection,
  } = data;
  return (
    <>
      <Layout>
        <HeroSection data={heroSection} />
        <NewsSection data={newsSection} />
        <SupportUsSection />
        <OurValuesSection data={ourValuesSection} />
        <EventsSection data={eventsSection} />
        <OurPublicationsSection data={ourPublicationsSection} />
        <CatalogueSection data={catalogueSection} />
        <VideoSection data={videoSection} />
        <ParagraphSection data={paragraphSection} />
        <RecommendedSection data={recommendedSection} />
        <MembersSection data={membersSection} />
        <PartnersSection data={partnersSection} />
        <NewsletterSection />
      </Layout>
    </>
  );
}
