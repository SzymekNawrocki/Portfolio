
import { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import { ContactForm } from "@/components/ContactForm";
import Socials from '@/components/Socials';

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 xl:px-24">
      <div className="flex flex-col items-center mt-10">
        <div className="mb-10 lg:mb-14">
          <PageTitle>Kontakt</PageTitle>
        </div>
        <div className="border border-primary p-6 md:p-10 lg:p-14 rounded-xl w-full max-w-4xl">
          <p className="text-center mb-6 md:mb-10">
            Masz pytanie? Skorzystaj z formularza kontaktowego lub&nbsp;napisz bezpośrednio na{" "}
            <a
              href="mailto:kontakt@szymonnawrocki.dev"
              className="font-semibold text-primary hover:underline"
            >
              kontakt@szymonnawrocki.dev
            </a>
          </p>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
        <div className="mt-12">
          <Socials />
        </div>
      </div>
    </div>
  );
}
