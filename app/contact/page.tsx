'use client'
import { ReactElement, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

interface FormData {
  email: string;
  message: string;
}

export default function Page(): ReactElement {
  const [formData, setFormData] = useState<FormData>({
    email: "",
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
    // Walidacja pól
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) {
      newErrors.email = "Email jest wymagany.";
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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-md mx-auto  rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-2xl font-semibold mb-4">Kontakt</h1>
        <p className="text-sm text-gray-600 mb-4">
        Skontaktować się ze mną możesz pod adresem e-mail szymonjakubnawrocki@gmail.com lub poprzez formularz
          kontaktowy.
        </p>
       
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Wprowadź swój adres email"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
              Wiadomość:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Wpisz swoją wiadomość"
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Wyślij
          </button>
        </form>
      </div>
      <hr className="w-1/4 border-t-2 border-gray-300 mb-8" />
      <div className="mb-8 flex justify-center items-center space-x-4">
        <a href="https://www.linkedin.com" className="text-blue-500 hover:text-blue-700">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com" className="text-gray-800 hover:text-gray-600">
          <FaGithub size={32} />
        </a>
        <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.facebook.com" className="text-blue-700 hover:text-blue-900">
          <FaFacebook size={32} />
        </a>
     
      </div>
    </div>
  );
}
