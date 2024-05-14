import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="mt-11 bg-border py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
          <div className="text-center md:text-left mb-4 md:mb-0 md:flex-grow">
            <p>&copy; {new Date().getFullYear()} Szymon Nawrocki. Wszelkie prawa zastrzeżone.</p>
          </div>
          <div className="flex justify-center md:justify-end md:flex-grow space-x-4">
            <p><Link href="/polityka-prywatnosci">Polityka prywatności</Link></p>
          </div>
        </div>
      </div>
    );
}
