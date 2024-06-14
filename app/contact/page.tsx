import { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import { ContactForm } from "@/components/ContactForm";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 lg:mt-14 space-y-10">
        <div className="max-w-[80%] mx-auto mb-10 lg:mb-14">
          <PageTitle>Kontakt</PageTitle>
        </div>

        <div className="max-w-lg w-full mb-10 lg:mb-0">
          <p className="text-center mb-4">
            Masz pytanie, ofertę współpracy? Skorzystaj z&nbsp;formularza
            kontaktowego lub&nbsp;napisz bezpośrednio na{" "}
            <a
              href="mailto:kontakt@szymonnawrocki.dev"
              className="font-semibold text-primary hover:underline"
            >
              kontakt@szymonnawrocki.dev
            </a>
          </p>
        </div>

        <div className="w-full max-w-lg mb-4">
          <ContactForm />
        </div>

        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-primary hover:text-" size={30} />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-primary hover:text-" size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-primary hover:text-" size={30} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-primary hover:text-" size={30} />
          </a>
        </div>
      </div>
    </>
  );
}
