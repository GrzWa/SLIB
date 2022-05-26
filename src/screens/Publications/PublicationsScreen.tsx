import { Layout } from '@/components/Layout';
import { Publications } from '@/features/Publications';
import b1 from '@/public/images/img/books/b1.png';
import b2 from '@/public/images/img/books/b2.png';
import b3 from '@/public/images/img/books/b3.png';
import b4 from '@/public/images/img/books/b4.png';

export const PublicationsScreen = () => {
  const data = [
    {
      image: b1,
      title: `Przeciw państwu`,
      subtitle: `Biografia Murraya N. Rothbarda`,
      author: `Justin Raimondo`,
      abstract: `Przeciw Państwu Justina Raimondo jest jedyną biografią Murraya N. Rothbarda. Autor książki był przyjacielem Rothbarda i miał dostęp do całej jego prywatnej korespondencji, a także odbył wiele rozmów z wdową po Maurycym. Książka ukazuje Murraya Rothbarda jako człowieka i działacza, ze wszystkimi jego wadami i zaletami – „Przeciw Państwu” opowiada wszystkich jego wzlotach i upadkach. Szczególnie interesujące są ukazane w książce wieloletnie związki łączące go z Ludwigiem von Misesem i Ayn Rand.`,
    },
    {
      image: b2,
      title: `W cieniu błękitnego orła`,
      subtitle: `Czyli co Nowy Ład zrobił gospodarce USA`,
      author: `Jan Jakub Tyszkiewicz`,
      abstract: `Książka jest próbą ujęcia w całość i poddania ocenie wpływu Nowego Ładu na gospodarkę Stanów Zjednoczonych po Wielkim Kryzysie (Great Depression). Autor stara się odpowiedzieć na pytania zawarte we Wstępie: Dlaczego Wielki Kryzys wybuchł z taką siłą? Dlaczego trwał tak długo? Dlaczego mimo głębokiej ingerencji rządu, nic się nie zmieniło? Książka w syntetyczny sposób opisuje krótko i długoterminowe skutki Wielkiego Kryzysu oraz Nowego Ładu – skupiając się na wybranych obszary działalności gospodarczej i reform twórców New Deal (rolnictwo, przemysł ciężki). Nie jest to wolnorynkowa hagiografia, pozycja sytuuje się jako głos w dyskusji o zasadności państwowego protekcjonizmu w opanowywaniu albo łagodzeniu cykli koniunkturalnych.`,
    },
    {
      image: b3,
      title: `Libertariańskie dylematy`,
      author: `Jakub Bożydar Wiśniewski`,
      abstract: `Praca adresowana jest przede wszystkim do osób posiadających przynajmniej podstawową znajomość omawianej libertariańskiej teorii, jednak mamy nadzieję, że powinna zainteresować zarówno osoby sceptyczne, jak i przychylne wobec libertarianizmu.

      Sceptycy mogą znaleźć odpowiedzi na swoje pytania oraz wątpliwości i lepiej uchwycić stanowisko libertarian, co powinno pomóc w wyrobieniu sobie zdania na temat wolnościowej filozofii opartego na jej autentycznej znajomości, a nie na powszechnych nieporozumieniach.

      Zwolennicy libertarianizmu otrzymują natomiast nie tylko świetne narzędzie do pogłębienia swojej wiedzy, ale również nieocenioną pomoc w lepszej prezentacji swojego światopoglądu oraz odpieraniu ewentualnych zarzutów – wszak niełatwo jest ująć niektóre aspekty tej filozofii tak zwięźle i przekonująco, jak uczynił to Jakub Bożydar Wiśniewski. Ponadto na końcu książki zawarte są praktyczne wskazówki dla wszystkich, którzy chcą skuteczniej działać na rzecz wolności.`,
    },
    {
      image: b4,
      title: `Jak zabłysnąć w swojej pierwszej pracy?`,
      author: `Jeffrey Albert Tucker`,
      abstract: `Jak zabłysnąć w swojej pierwszej pracy? to zbiór tekstów adresowany do wszystkich młodych pracowników – zarówno tzw. millenialsów, jak i dopiero wchodzącej na rynek pracy generacji Z.

      Książka zawiera zestaw wskazówek, które sprawią, że znaczenie szybciej dowiecie się tego, co powinniście wiedzieć, gdy zaczynacie karierę zawodową. Większości z nich nikt nie nauczy Was w szkole. Taka wiedza przychodzi zwykle wraz z doświadczeniem. Niniejszy zbiór oferuje możliwość czerpania z tych doświadczeń bez potrzeby bolesnego przerabiania ich na własnej skórze.

      Co najważniejsze, Autorowi udało się zebrać uniwersalny zestaw rad, które jeszcze pewnie przez lata pozostaną aktualne`,
    },
  ];
  return (
    <>
      <Layout>
        <Publications data={data} />
      </Layout>
    </>
  );
};
