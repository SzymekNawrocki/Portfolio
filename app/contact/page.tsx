'use client'
import { ReactElement, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import PageTitle from '@/components/PageTitle'
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

export default function Page(): ReactElement {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) {
      newErrors.email = "Email jest wymagany.";
    }
    if (!formData.subject) {
      newErrors.subject = "Temat jest wymagany.";
    }
    if (!formData.message) {
      newErrors.message = "Wiadomość jest wymagana.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Wyślij formularz
      console.log("Wysyłanie formularza...", formData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-8 mt-7">
      <PageTitle>Kontakt</PageTitle>
      <div className=" max-w-md rounded-lg shadow-md bg-secondary p-4 max-md:ml-3 max-md:mr-3">
        <p className="mb-4">
          Skontaktować się ze mną możesz pod adresem e-mail szymonjakubnawrocki@gmail.com lub poprzez formularz
          kontaktowy.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="mb-1 ml-1 block text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.email ? "border-destructive" : "border-gray-300"
              }`}
              placeholder="Wprowadź swój adres email"
            />
            {errors.email && <p className="text-destructive mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="mb-1 ml-1 block text-sm font-semibold ">
              Temat:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.subject ? "border-destructive" : "border-gray-300"
              }`}
              placeholder="Wprowadź temat"
            />
            {errors.subject && <p className="text-destructive mt-1">{errors.subject}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-1 ml-1 block text-sm font-semibold">
              Wiadomość:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.message ? "border-destructive" : "border-gray-300"
              }`}
              placeholder="Wpisz swoją wiadomość"
            />
            {errors.message && <p className="text-red-500 mt-1 ml-1">{errors.message}</p>}
          </div>
          <HoverBorderGradient
        containerClassName="rounded-full w-full"
        className="dark:bg-black bg-white text-black dark:text-white w-full"
      >
        <span>Wyślij</span>
      </HoverBorderGradient>
        </form>
      </div>
      <hr className="w-1/4 border-t-2 border-primary mb-8 mt-11 max-md:w-2/3"/>
      <div className="mb-11 flex justify-center items-center space-x-4">
        <a href="https://www.linkedin.com/in/szymon-nawrocki-660940204/" className="text-blue-500 hover:text-blue-700">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/SzymekNawrocki" className="text-gray-800 hover:text-gray-600">
          <FaGithub size={32} />
        </a>
        <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.facebook.com/szymon.nawrocki.10/" className="text-blue-700 hover:text-blue-900">
          <FaFacebook size={32} />
        </a>
      </div>
    </div>
  );
}
