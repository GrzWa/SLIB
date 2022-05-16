import { Home } from '@/features/Home';

const data = {
  heroSections: {
    title: "xD",
    subtitle: "XD",
    buttons: [
      {link: 'XD', label: 'XD', color: 'XD'}
    ]
  }
}

export const HomeScreen = () => {
  return (
    <>
      <Home data={data} />
    </>
  );
};
