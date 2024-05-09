import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Szymon Nawrocki. Wszelkie prawa zastrzeżone.</p>
                </div>
                <div className="flex justify-center md:justify-end space-x-4">
                  
                </div>
            </div>
        </footer>
    );
}
