import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from './Button';

export default function Footer() {
    return (
        <div className="mt-11 bg-border py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
          <div className="text-center md:text-left mb-4 md:mb-0 md:flex-grow">
            <p>&copy; {new Date().getFullYear()} <span className='font-bold'>szymonnawrocki.dev All rights reserved.</span> </p>
          </div>
          <div className="flex justify-center md:justify-end md:flex-grow space-x-4">
              <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    );
}
