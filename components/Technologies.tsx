import { useState } from 'react';
import { FaReact, FaJsSquare, FaBrain, FaGithub } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiSass, SiDotnet, SiNextdotjs, SiTailwindcss, SiContentful, SiRedux } from 'react-icons/si';
import TechDetail from './TechDetail';
import { AiOutlineRobot } from 'react-icons/ai';

export default function Technologies() {
  const [activeTech, setActiveTech] = useState<keyof typeof technologies | null>(null);

  const technologies = {
    NextJS: {
      icon: <SiNextdotjs className="text-black w-12 h-12" />,
      title: 'Next.js',
      description:
        'Jestem najbardziej biegły w Next.js, który jest moim głównym narzędziem do budowy aplikacji z renderowaniem po stronie serwera oraz statycznych stron zoptymalizowanych pod kątem SEO.',
    },
    React: {
      icon: <FaReact className="text-blue-500 w-12 h-12" />,
      title: 'React',
      description:
        'Mam solidną wiedzę na temat Reacta, którą ciągle rozwijam. To moja ulubiona biblioteka do budowy interfejsów użytkownika. Co więcej, intensywnie pracuję nad React Native. W przyszłych projektach zamierzam dalej rozwijać swoje umiejętności w React, wykorzystując go zarówno do aplikacji webowych, jak i mobilnych',
    },
    CMS: {
      icon: <SiContentful className="text-green-600 w-12 h-12" />,
      title: 'CMS',
      description:
        'Mam doświadczenie w pracy z nowoczesnymi headless CMS-ami, takimi jak DatoCMS i Hygraph (dawniej GraphCMS).Te narzędzia umożliwiają łatwą integrację z aplikacjami webowymi, co przyspiesza wdrożenia dynamicznych stron. Aktualnie jestem w trakcie zgłębiania WordPressa.',
    },
    TailwindCSS: {
      icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />,
      title: 'Tailwind CSS',
      description:
        'Tailwind CSS jest moim ulubionym narzędziem do szybkiego tworzenia interfejsów użytkownika i wydajnych, responsywnych stron internetowych.',
    },
    GitHub: {
      icon: <FaGithub className="text-gray-800 w-12 h-12" />,
      title: 'GitHub',
      description:
        'GitHub jest moim głównym narzędziem do kontroli wersji oraz współpracy przy projektach.',
    },
    AI: {
      icon: <AiOutlineRobot className="text-blue-400 w-12 h-12" />,
      title: 'AI',
      description:
        'I am really into AI and use it in my daily work. The idea of using AI to improve tasks is something I find exciting.',
    },
    JavaScript: {
      icon: <FaJsSquare className="text-yellow-500 w-12 h-12" />,
      title: 'JavaScript',
      description:
        'JavaScript to język, którego opanowanie jest kluczowe dla każdego dewelopera. Ukończyłem dwa kursy z JavaScriptu i wykorzystałem go w serii czterech kursów dotyczących tworzenia stron internetowych, dzięki czemu dobrze rozumiem podstawy tego języka i jestem gotów do dalszej nauki oraz pracy z nim.',
    },
    CSS: {
      icon: <SiCss3 className="text-blue-500 w-12 h-12" />,
      title: 'CSS',
      description:
        'Mam solidne umiejętności w CSS, pozwalające mi na tworzenie czystych, responsywnych i estetycznych interfejsów użytkownika. Znam techniki, takie jak Flexbox i CSS Grid. Staram się też dbać o optymalizację pod kątem wydajności i dostępności.',
    },
    HTML: {
      icon: <SiHtml5 className="text-orange-500 w-12 h-12" />,
      title: 'HTML',
      description:
        'HTML to fundament każdej aplikacji webowej. Wykorzystuję go do tworzenia strukturalnych i semantycznych treści, z myślą o dostępności i wydajności. Zwracam uwagę na użycie odpowiednich znaczników oraz optymalizację dla SEO.',
    },
    Sass: {
      icon: <SiSass className="text-pink-400 w-12 h-12" />,
      title: 'SaSS',
      description:
        'Korzystam z Sass, aby pisać bardziej zorganizowany i modułowy CSS. W mojej pracy stosuję metodologię BEM (Block Element Modifier). Dzięki Sass i BEM mogę efektywnie organizować kod.',
    },
    DotNet: {
      icon: <SiDotnet className="text-purple-500 w-12 h-12" />,
      title: '.NET',
      description:
        'Jestem w trakcie przechodzenia roadmapy stworzonej przez programistę .NET Jakuba Kozerę. Moim celem jest zostanie Full Stack Developerem React x .NET',
    },
    Redux: {
      icon: <SiRedux className="text-violet-500 w-12 h-12" />,
      title: 'Redux',
      description:
        'Jestem zaznajomiony z biblioteką Redux, która ułatwia zarządzanie stanem aplikacji w bardziej złożonych projektach React.',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16 xl:px-24 rounded-lg">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 text-center">
        {Object.entries(technologies).map(([key, tech]) => (
          <div
            key={key}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setActiveTech(key as keyof typeof technologies)}
          >
            {tech.icon}
            <span className="text-sm font-medium mt-2">{tech.title}</span>
          </div>
        ))}
      </div>
      {activeTech && (
        <TechDetail
          icon={technologies[activeTech].icon}
          title={technologies[activeTech].title}
          description={technologies[activeTech].description}
          onClose={() => setActiveTech(null)}
        />
      )}
    </div>
  );
}
