import { Layout } from '@/components/Layout';
import {
  HeroSection,
  NewsSection,
  SupportUsSection,
} from './components/Sections';

export function Home() {
  return (
    <Layout>
      <HeroSection />
      <NewsSection />
      <SupportUsSection />
    </Layout>
  );
}
