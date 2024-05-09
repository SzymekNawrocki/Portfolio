import Image from 'next/image';

export default function page() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center md:space-y-0 md:space-x-8 mt-20">
        <div className="w-full md:w-1/2 md:order-1 mb-8 md:mb-0">
          <Image
            src="/szymon-nawrocki.jpg"
            alt="Description of the image"
            width={300}
            height={300}
            className="w-full max-w-sm md:max-w-full mx-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-2">
          <h1 className="text-xl md:text-4xl text-center md:text-left font-sans font-bold mb-4">
            Cześć! Nazywam się Szymon Nawrocki
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto md:mx-0 my-2 text-sm md:text-base text-center md:text-left">
            Swoją przygodę z programowaniem zacząłem w październiku 2022 roku. Jestem studentem informatyki, a mój obecny kierunek rozwoju w IT to Web Development.
          </p>
          <a>Skontaktuj się ze mną </a>
        </div>
      </div>
    </>
  );
}
