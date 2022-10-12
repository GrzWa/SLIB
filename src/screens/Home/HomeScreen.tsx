import { Home } from '@/features/Home';
import Murray_Rothbard from '@/public/images/backgrounds/Murray_Rothbard.png';
import Image from 'next/image';
import img3 from '@/public/images/news/img3.png';
import img4 from '@/public/images/news/img4.png';
import img5 from '@/public/images/news/img5.png';
import img6 from '@/public/images/news/img6.png';
import hoppe from '@/public/images/news/hoppe.png';

import meditate from '@/public/images/logo/meditate.svg';
import mind from '@/public/images/logo/mind.svg';
import stairs from '@/public/images/logo/stairs.svg';
import person from '@/public/images/logo/person.svg';
import obrazek1 from '@/public/images/img/obrazek1.png';

import stock1 from '@/public/images/img/stock1.png';
import stock2 from '@/public/images/img/stock2.png';
import stock3 from '@/public/images/img/stock3.png';
import stock4 from '@/public/images/img/stock4.png';

import pub1 from '@/public/images/img/pub1.png';
import pub2 from '@/public/images/img/pub2.png';
import pub3 from '@/public/images/img/pub3.png';
import pub4 from '@/public/images/img/pub4.png';
import pub5 from '@/public/images/img/pub5.png';
import pub6 from '@/public/images/img/pub6.png';

import yt_temp from '@/public/images/img/yt_temp.png';

import rec1 from '@/public/images/img/rec1.png';
import rec2 from '@/public/images/img/rec2.png';
import rec3 from '@/public/images/img/rec3.png';
import rec4 from '@/public/images/img/rec4.png';

import os1 from '@/public/images/members/os1.png';
import os2 from '@/public/images/members/os2.png';
import os3 from '@/public/images/members/os3.png';
import os4 from '@/public/images/members/os4.png';

import s1 from '@/public/images/sponsors/s1.png';
import s2 from '@/public/images/sponsors/s2.png';
import s3 from '@/public/images/sponsors/s3.png';
import s4 from '@/public/images/sponsors/s4.png';
import s5 from '@/public/images/sponsors/s5.png';
import s6 from '@/public/images/sponsors/s6.png';
import s7 from '@/public/images/sponsors/s7.png';
import s8 from '@/public/images/sponsors/s8.png';
import { useEffect, useState } from 'react';

const data = {
  heroSection: {
    title: `Lorem ipsum`,
    subtitle: `iusto odio dignissimos ducimus qui blanditiis`,
    description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.`,
    buttons: [
      { link: `insertlink`, label: `Consequatur`, color: `yellow` },
      { link: `insertlink`, label: `Similique sunt`, color: `black` },
    ],
    image: <Image src={Murray_Rothbard} alt="Murray Rothbard" />,
  },
  newsSection: {
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
    // card2: { image: hoppe },
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
    card6: { image: img6 },
  },
  ourValuesSection: {
    card: { image: obrazek1 },
    value1: {
      image: meditate,
      title: `Wolność`,
      subtitle: `brak przymusu; jest sferą dobrowolności, w której człowiek ma możliwość rozwoju samego siebie i osiągania postawionych sobie celów. Jest podstawowym warunkiem społecznego współistnienia w pokoju i harmonii.`,
    },
    value2: {
      image: mind,
      title: `Otwartość ideologiczna i realistyczna`,
      subtitle: `to nastawienie bez uprzedzeń na nowe doświadczenia, punkty widzenia i znajomości. Zatrzaśnięcie się na dynamicznie zmieniający się świat, jest jak zamykanie oczu przed trudnościami, których chcemy uniknąć.`,
    },
    value3: {
      image: stairs,
      title: `Możliwość`,
      subtitle: `wolność pozytywna; to okazja lub sytuacja, którą przy odpowiednim postępowaniu, można przekuć w sukces. Tylko w wolnym świecie jest dostępna dla każdego.`,
    },
    value4: {
      image: person,
      title: `Profesjonalizm`,
      subtitle: `standardy i procedury; to wysoki poziom osiągnięcia kompetentności. To synergia, w której postępujemy w zgodzie z innymi, wedle przyjętych zasad. Szczerością w kontaktach, rzetelnością w działaniu i odpowiedzialnością za efekt końcowy.`,
    },
  },
  eventsSection: {
    card1: {
      date: `20 marca | 15:00`,
      text: `At vero eos et accusamus et iusto odio dignissimos`,
      image: stock1,
    },
    card2: {
      date: `5 kwietnia | 12:00`,
      text: `Nam libero tempore`,
      image: stock2,
    },
    card3: {
      date: `3 maja | 12:00`,
      text: `Dolore magnam aliquam quaerat voluptatem`,
      image: stock3,
    },
    card4: {
      date: `6 maja | 10:30`,
      text: `Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae`,
      image: stock4,
    },
  },
  ourPublicationsSection: {
    book1: { image: pub1, title: ``, author: `` },
    book2: { image: pub2, title: ``, author: `` },
    book3: { image: pub3, title: ``, author: `` },
    book4: { image: pub4, title: ``, author: `` },
    book5: { image: pub5, title: ``, author: `` },
    book6: { image: pub6, title: ``, author: `` },
    feature: {
      title: `Przeciw państwu`,
      subtitle: `Biografia Murraya N. Rothbarda`,
      text: `Przeciw Państwu Justina Raimondo jest jedyną biografią Murraya
    N. Rothbarda. Autor książki był przyjacielem Rothbarda i miał
    dostęp do całej jego prywatnej korespondencji, a także odbył
    wiele rozmów z wdową po Maurycym. Książka ukazuje Murraya
    Rothbarda jako człowieka i działacza, ze wszystkimi jego
    wadami i zaletami – „Przeciw Państwu” opowiada wszystkich jego
    wzlotach i upadkach. Szczególnie interesujące są ukazane w
    książce wieloletnie związki łączące go z Ludwigiem von Misesem
    i Ayn Rand.`,
      image: pub6,
    },
  },
  catalogueSection: {
    sqr01: { num: `01`, title: `Definiowanie libertarianizmu` },
    sqr02: { num: `02`, title: `Libertarianizm a liberalizm` },
    sqr03: { num: `03`, title: `Libertarianizm a anarchizm` },
    sqr04: { num: `04`, title: `Libertarianizm a marksizm` },
    sqr09: { num: `09`, title: `Minarchizm` },
    sqr10: { num: `10`, title: `Anarchokapitalizm` },
    sqr11: {
      num: `11`,
      title: `„Prawica” i „lewica” w libertarianizmie`,
      text: `„Lewicowy” libertarianizm – agoryzm
  
    „Lewicowy” libertarianizm – mutualizm
    
    „Prawicowy” libertarianizm – paleolibertarianizm`,
    },
    sqr12: { num: `12`, title: `Obiektywizm` },
  },
  videoSection: {
    card1: { title: `Młodzież Kontra` },
    card2: {
      title: `Wykłady 
  i prelekcje`,
    },
    card3: { title: `Bez Retuszu` },
    card4: { title: `Wywiady` },
    card5: { title: `Inne` },
    video: {
      image: yt_temp,
      title: `Młodzież kontra 636: Jacek Wilk (Wolność) 14.04.2018`,
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni.`,
    },
  },
  paragraphSection: {
    text1: (
      <>
        <span>„Zmień Paragraf”</span> jest inicjatywą polegającą na zbieraniu
        konkretnych pomysłów na zmiany w prawie, które ułatwią życie nam
        wszystkim oraz szlifowaniu ich aż do formy projektów ustaw. Polskie
        prawo często stawia obywatelom zupełnie
        <span>niepotrzebne przeszkody</span>. Ideą tej akcji jest zebranie
        wiedzy o takich problemach, opracowanie rozwiązań, następnie zaś
        lobbowanie na rzecz ich wdrożenia. Do tego celu potrzebujemy jednak
        uzyskać wiedzę na temat konkretnych przepisów i ich wpływu na wolność
        gospodarczą lub osobistą.
      </>
    ),
    text2: (
      <>
        Chętnych pomóc nam osiągnąć te plany zapraszamy do
        <span>wypełnienia poniższego formularza</span>. Podanie dokładnego
        źródła omawianych przepisów oraz uzasadnienie ich liberalizacji jest
        konieczne (pola oznaczone gwiazdką). Zachęcamy również do pozostawienia
        swoich danych kontaktowych, dzięki czemu będziemy mogli ustalić
        szczegóły i ewentualnie nawiązać z Państwem bliższą współpracę. Zebrane
        za pomocą formularza dane zostaną wykorzystane do prac w Centrum Analiz
        SL. Najciekawsze propozycje będziemy zamieszczać na stronie akcji na
        facebooku.
      </>
    ),
  },
  recommendedSection: {
    image1: rec1,
    image2: rec2,
    image3: rec3,
    image4: rec4,
  },
  membersSection: {
    member1: { name: `Przemysław Hankus`, title: `Prezes Zarządu`, img: os1 },
    member2: {
      name: `Wojciech Walczak`,
      title: `Wiceprezes Zarządu`,
      img: os2,
    },
    member3: {
      name: `Radosław Maziarka`,
      title: `Przewodniczący komisji rewizyjnej`,
      img: os3,
    },
    member4: {
      name: `Marek Granowicz`,
      title: `Koordynator oddziału wrocławskiego`,
      img: os4,
    },
  },
  partnersSection: {
    image1: s1,
    image2: s2,
    image3: s3,
    image4: s4,
    image5: s5,
    image6: s6,
    image7: s7,
    image8: s8,
  },
};

export const HomeScreen = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState<any>();

  useEffect(() => {
    setScrollbarWidth(window.innerWidth - document.body.clientWidth);
    console.log(window.innerWidth - document.body.clientWidth);
  }, []);

  useEffect(() => {
    document.body.style.setProperty(`--scrollbarWidth`, `${scrollbarWidth}px`);
    console.log(scrollbarWidth);
  }, [scrollbarWidth]);

  return (
    <>
      <Home data={data} />
    </>
  );
};
