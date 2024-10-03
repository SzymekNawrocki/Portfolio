import { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

interface TechDetailProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClose: () => void;
}

export default function TechDetail({ icon, title, description, onClose }: TechDetailProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="border-accent bg-secondary rounded-lg shadow-lg p-8 relative w-80 md:w-96">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-4">{icon}</div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-foreground text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}
