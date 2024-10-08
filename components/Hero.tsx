import Image from 'next/image';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Link from 'next/link';

export default function Page() {
  return (
   <div>
      <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 2xl:mt-20 mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center md:space-y-0 md:space-x-8 mt-12 max-md:mt-6">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="w-full max-w-sm md:max-w-full mx-auto rounded-md overflow-hidden">
            <Image
              src="/cyberpunk.png"
              alt="Description of the image"
              className="w-full h-auto rounded-md"
              width={300}
              height={300}
              />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-4xl text-center md:text-left font-sans font-bold mb-4">
            Hi! My name is <span className='text-primary'>Szymon Nawrocki</span>.
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto md:mx-0 my-2 text-sm md:text-base text-center md:text-left">
          I started my programming adventure in October 2022. I am a second year computer science student and my direction of development <span className='text-primary'>Full Stack Development</span>.
          </p>
        </div>
      </div>
      <div className='justify-center flex gap-11'>
      <Link href="/szymonnawrocki.cv.pdf" target='_blank' passHref>
        <HoverBorderGradient>
          <span>Download CV</span>
        </HoverBorderGradient>
        </Link>
   </div>
   </div>
  );
}
