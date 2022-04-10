import { Layout } from '@/components/Layout';
import { HeroSection, NewsSection } from './components/Sections';

export function Home() {
  return (
    <Layout>
      <HeroSection />
      <NewsSection />
    </Layout>
  );
}
