import { Catalogue } from '@/features/Catalogue';

export const CatalogueScreen = () => {
  const data = {
    title: `Katalog wiedzy na temat libertarianizmu`,
    subtitle: (
      <>
        Z dumą prezentujemy przygotowany przez{` `}
        <strong>Stowarzyszenie Libertariańskie</strong> we współpracy z{` `}
        <em>Fundacją Wolności i Przedsiębiorczości</em> oraz{` `}
        <em>Instytutem Misesa</em> Katalog wiedzy na temat libertarianizmu.
        <br />
        <br />
        Myślą, jaka stała za stworzeniem tej bazy wiedzy, było m.in.:
        <br />
        <br />
        Stworzenie źródła wiedzy dla osób początkujących, zaczynających swoją
        przygodę z libertarianizmem – dla tych osób dedykowane są materiały
        oznaczone jako <strong>poziom podstawowy</strong>,
        <br />
        <br />
        Bardziej szczegółowe opracowanie tematów, które posłużą osobom już
        zaznajomionym z ideą wolności do pogłębienia swojej wiedzy w konkretnych
        tematach. Dla nich przewidzieliśmy zawartość oznaczoną jako{` `}
        <strong>poziom zaawansowany</strong> oraz{` `}
        <strong>materiały dodatkowe</strong>,
        <br />
        <br />
        Przygotowanie materiałów, które będą mogły zostać wykorzystane podczas
        prelekcji na spotkaniach lokalnych kół i oddziałów Stowarzyszenia
        Libertariańskiego
      </>
    ),
    s2: (
      <>
        Należy optymistycznie zauważyć, że w ostatnich latach mieliśmy do
        czynienia ze wzrostem zainteresowania ideą libertariańską, co przełożyło
        się na większą dostępność tekstów w języku polskim, traktujących o
        rozmaitych jego aspektach. Zdecydowaliśmy się nie tworzyć całego kursu
        od początku, co przy założonym przez nas stopniu szczegółowości zajęłoby
        kilka tomów i pochłonęło znacznie więcej zasobów niż obecnie posiadamy.
        {` `}
        <strong>
          Postawiliśmy na zebranie, usystematyzowanie i opatrzenie komentarzem
          już dostępnych tekstów
        </strong>
        {` `}
        tak, by umożliwić do nich dostęp szerszej publiczności.
        <br />
        <br />
        Lista tematów dostępnych tematów (14) razem z planowanymi dodatkowymi
        rozdziałami (zaznaczone gwiazdką):
      </>
    ),
    creators: [
      {
        name: `Marcin Chmielowski `,
        title: `(przedstawiciel Fundacji Wolności i Przedsiębiorczości)`,
        des: `redakcja i wsparcie merytoryczne`,
      },
      {
        name: `Jan Lewiński`,
        title: `(przedstawiciel Instytutu Misesa)`,
        des: `rozdziały: Anarchokapitalizm, Kapitalizm i wolny rynek w libertarianizmie, Korzenie Libertarianizmu – austriacka szkoła w ekonomii, Korzenie libertarianizmu – prawo naturalne`,
      },
      {
        name: `Łukasz Frontczak`,
        des: `rozdział: Wybrane kontrowersje z zakresu myśli libertariańskiej`,
      },
      {
        name: `Cezary Marciniak`,
        des: `rozdziały: Obiektywizm, Przykłady działania państw libertariańskich i bliskich`,
      },
      {
        name: `Mateusz Krzysztof`,
        des: `rozdział: „Libertarianizm przed libertarianizmem” i wybrane niemarksistowskie teorie konfliktu`,
      },
      {
        name: `Wiktor Gonczaronek`,
        des: `rozdział: „Prawica” i „lewica” w libertarianizmie – paleolibertarianizm`,
      },
      {
        name: `Damian Karaszewski`,
        des: `rozdział: Minarchizm oraz Prawo własności w libertarianizmie`,
      },
      { name: `Kamil Przespolewski`, des: `rozdział: Anarchoindywidualizm` },
      { name: `Maciej Machl`, des: `rozdział: Libertarianizm a anarchizm` },
      {
        name: `Wojciech Siwiera`,
        des: `rozdział: Definiowanie libertarianizmu`,
      },
      {
        name: `Hubert Jarosz`,
        des: `rozdział: Wybrane kontrowersje z zakresu myśli libertariańskiej`,
      },
      {
        name: `Daniel Komarzyca`,
        des: `rozdział: Libertarianizm a liberalizm`,
      },
      { name: `Michał Nawrot`, des: `rozdział: Libertarianizm a marksizm` },
      { name: `Mikołaj Noga`, des: `szef projektu oraz rozdział: Agoryzm` },
    ],
    cards: {
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
  };
  return (
    <>
      <Catalogue data={data} />
    </>
  );
};
