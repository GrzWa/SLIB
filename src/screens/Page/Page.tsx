import { NewsCard } from '@/components/News/NewsCard';
import { SideBar } from '@/components/SideBar';
import { Page as GenericPage } from '@/features/Page';
import hoppe from '@/public/images/news/hoppe.png';
import img3 from '@/public/images/news/img3.png';
import img4 from '@/public/images/news/img4.png';
import img5 from '@/public/images/news/img5.png';

export const Page = () => {
  //------------------------- MAIN DATA -------------------------
  const cards = {
    card1: {
      image: hoppe,
      date: `27 stycznia 2021`,
      author: `Konto Administracyjne`,
      title: `Hans-Hermann Hoppe o lockdownach`,
      subtitle: `W dobie z jednej strony coraz powszechniejszego buntu przeciwko rządowym
      lockdownom powodującym ekonomiczną ruinę tysięcy przedsiębiorstw, z
      drugiej zaś – wciąż wysokiej dziennej liczby zakażeń i zgonów wywołanych
      koronawirusem SARS-CoV-2, na nowo rozgorzała debata na temat
      dopuszczalnych granic w poświęcaniu przez rząd majątków i wolności
      obywateli w imię walki z...`,
      buttons: [
        { variant: `black`, link: ``, label: `Informacje prasowe` },
        { variant: `black`, link: ``, label: `COVID-19` },
        { variant: `black`, link: ``, label: `Polski` },
      ],
    },
    card2: {
      image: hoppe,
      date: `27 stycznia 2021`,
      author: `Konto Administracyjne`,
      title: `Hans-Hermann Hoppe o lockdownach`,
      subtitle: `W dobie z jednej strony coraz powszechniejszego buntu przeciwko rządowym
      lockdownom powodującym ekonomiczną ruinę tysięcy przedsiębiorstw, z
      drugiej zaś – wciąż wysokiej dziennej liczby zakażeń i zgonów wywołanych
      koronawirusem SARS-CoV-2, na nowo rozgorzała debata na temat
      dopuszczalnych granic w poświęcaniu przez rząd majątków i wolności
      obywateli w imię walki z...`,
      buttons: [
        { variant: `black`, link: ``, label: `Informacje prasowe` },
        { variant: `black`, link: ``, label: `COVID-19` },
        { variant: `black`, link: ``, label: `Polski` },
      ],
    },
    card3: {
      image: img3,
      date: `27 stycznia 2021`,
      title: `Brad Polumbo – Tulsi Gabbard i Thomas Massie w obronie 4.
  poprawki`,
    },
    card4: {
      image: img4,
      date: `27 stycznia 2021`,
      title: `Łukasz Frontczak – Co robić, gdy znikniemy z Facebooka?`,
    },
    card5: {
      image: img5,
      date: `27 stycznia 2021`,
      title: `Audiobook z „Libertariańskimi dylematami” Jakuba Bożydara
  Wiśniewskiego`,
    },
  };
  const main = (
    <>
      <NewsCard data={cards.card1} />
      <NewsCard data={cards.card2} variant="compact" />
    </>
  );

  //------------------------- SIDE DATA -------------------------
  const sideBarData = {
    title: {
      title: `KATEGORIE POSTÓW`,
      underline: `grey`,
      text: `thin`,
    },
    list: {
      type: `numbered`,
      items: [
        `Definiowanie libertarianizmu`,
        `Libertarianizm a liberalizm`,
        `Libertarianizm a anarchizm`,
        `Libertarianizm a marksizm`,
        `„Libertarianizm przed libertarianizmem” i wybrane niemarksistowskie teorie konfliktu`,
        <>
          Korzenie libertarianizmu
          <br />
          <br />
          Austriacka szkoła ekonomii Anarchoindywidualizm Prawo naturalne
        </>,
        `Prawo własności w libertarianizmie`,
      ],
    },
  };
  const side = <SideBar data={sideBarData} />;

  //------------------------- WHOLE DATA -------------------------
  const data = {
    title: `This is a generic page with a very long title that should span at least two lines`,
    date: `27 stycznia 2021`,
    author: `Pan Mateusz`,
    main: main,
    side: side,
    backButton: { link: ``, label: `Wróć do katalogu` },
  };

  return (
    <>
      <GenericPage data={data} />
    </>
  );
};
