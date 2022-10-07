import { Branches } from '@/features/Branches';

export const BranchesScreen = () => {
  const data = {
    branches: [
      `Białystok`,
      `Bielsko-biała`,
      `Bydgoszcz`,
      `Katowice`,
      `Kielce`,
      `Koszalin`,
      `Kraków`,
      `Londyn`,
      `Łódź`,
      `Olsztyn`,
      `Poznań`,
      `Tomaszów Mazowiecki`,
      `Toruń`,
      `Trójmiasto`,
      `Warszawa`,
      `Wrocław`,
    ],
  };
  return (
    <>
      <Branches data={data} />
    </>
  );
};
