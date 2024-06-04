import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center text-secondary">
        <div className="mb-2 flex items-center justify-center lg:mb-4">
          <h1 className="text-8xl font-bold text-primary">404</h1>
        </div>
        <p className="mb-8 text-xl font-bold text-primary md:text-2xl lg:text-3xl ">
          Nie znaleziono takiej strony...
        </p>
        <Link href="/" className="underline lg:text-lg text-primary">
          Powrót do strony głównej
        </Link>
      </div>
    </div>
  );
}