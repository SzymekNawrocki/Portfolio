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
        'I am most proficient in Next.js, which is my main tool for building applications with server-side rendering and static SEO-optimised pages.'
    },
    React: {
      icon: <FaReact className="text-blue-500 w-12 h-12" />,
      title: 'React',
      description:
        'I have a solid knowledge of React, which I am constantly developing. It is my favourite library for building user interfaces. Furthermore, I am working intensively on React Native. In future projects, I intend to further develop my skills in React, using it for both web and mobile applications',
    },
    CMS: {
      icon: <SiContentful className="text-green-600 w-12 h-12" />,
      title: 'CMS',
      description:
        'I have experience of working with modern headless CMSs such as Wordpress, DatoCMS and Hygraph (formerly GraphCMS).These tools allow easy integration with web applications to speed up the implementation of dynamic sites.',
    },
    TailwindCSS: {
      icon: <SiTailwindcss className="text-blue-400 w-12 h-12" />,
      title: 'Tailwind CSS',
      description:
        'Tailwind CSS is my favourite tool for quickly creating user interfaces and efficient, responsive websites.',
    },
    GitHub: {
      icon: <FaGithub className="text-gray-800 w-12 h-12" />,
      title: 'GitHub',
      description:
        'GitHub is my main tool for version control and project collaboration.',
    },
    AI: {
      icon: <AiOutlineRobot className="text-blue-400 w-12 h-12" />,
      title: 'AI',
      description:
        'For my projects, I often use Chat GPT and the Canva image generator.',
    },
    JavaScript: {
      icon: <FaJsSquare className="text-yellow-500 w-12 h-12" />,
      title: 'JavaScript',
      description:
        'JavaScript is a language that is crucial for any developer to master. Having completed two courses in JavaScript and used it in a series of four courses on web development, I have a good understanding of the basics of the language and am ready to continue learning and working with it.',
    },
    CSS: {
      icon: <SiCss3 className="text-blue-500 w-12 h-12" />,
      title: 'CSS',
      description:
        'I have solid skills in CSS, allowing me to create clean, responsive and aesthetically pleasing user interfaces.I am familiar with techniques such as Flexbox and CSS Grid. I also strive to ensure optimisation for performance and accessibility.',
    },
    HTML: {
      icon: <SiHtml5 className="text-orange-500 w-12 h-12" />,
      title: 'HTML',
      description:
        'HTML is the foundation of any web application.I use it to create structured and semantic content, with accessibility and performance in mind.I pay attention to the use of appropriate markup and optimisation for SEO.',
    },
    Sass: {
      icon: <SiSass className="text-pink-400 w-12 h-12" />,
      title: 'SaSS',
      description:
        'I use Sass to write more structured and modular CSS.I use the BEM (Block Element Modifier) methodology in my work.Thanks to Sass and BEM, I can organise my code efficiently.',
    },
    DotNet: {
      icon: <SiDotnet className="text-purple-500 w-12 h-12" />,
      title: '.NET',
      description:
        'I am in the process of going through a roadmap created by .NET developer Jakub Kozera. My goal is to become a Full Stack Developer of React x .NET',
    },
    Redux: {
      icon: <SiRedux className="text-violet-500 w-12 h-12" />,
      title: 'Redux',
      description:
        'I am familiar with the Redux library, which makes it easier to manage application state in more complex React projects.',
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
