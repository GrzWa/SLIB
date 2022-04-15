import { Header } from '@/components/Layout/components/Header';
import { Main } from '@/components/Layout/components/Main';
import { Footer } from './components/Footer';


export const Layout = ({ children }: any) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);
