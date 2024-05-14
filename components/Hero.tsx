import { motion } from 'framer-motion';
import Image from 'next/image';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function Page() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 2xl:mt-20 mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center md:space-y-0 md:space-x-8 mt-12 max-md:mt-6"
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full max-w-sm md:max-w-full mx-auto rounded-md overflow-hidden"
        >
          <Image
            src="/szymon-nawrocki.jpg"
            alt="Description of the image"
            className="w-full h-auto rounded-md"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-4xl text-center md:text-left font-sans font-bold mb-4"
        >
          Cześć! Nazywam się <span className='text-primary'>Szymon Nawrocki</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-500 max-w-lg mx-auto md:mx-0 my-2 text-sm md:text-base text-center md:text-left"
        >
          Swoją przygodę z programowaniem zacząłem w październiku 2022 roku. Jestem studentem informatyki, a mój obecny kierunek rozwoju w IT to <span className='text-primary'>Web Development</span>.
        </motion.p>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className='justify-center flex gap-11'
    >
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Skontaktuj się</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Pobierz CV</span>
      </HoverBorderGradient>
    </motion.div>
  </>
  
  

  );
}
