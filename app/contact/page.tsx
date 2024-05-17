import { Metadata } from "next";
import  PageTitle  from "@/components/PageTitle";
import { ContactForm } from "@/components/ContactForm";

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
    <p className="text-center  mb-4">
      Masz pytanie, ofertę współpracy? Skorzystaj z&nbsp;formularza
      kontaktowego lub&nbsp;napisz bezpośrednio na{" "}
      <a
        href="mailto:szymonjakubnawrocki@gmail.com"
        className="font-semibold text-primary hover:underline"
      >
        szymonjakubnawrocki@gmail.com
      </a>
    </p>
  </div>

  <div className="w-full max-w-lg mb-4">
    <ContactForm />
  </div>
</div>


  </>
  
  );
}