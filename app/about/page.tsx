"use client";
import React from "react";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

const Content = [
  {
    description: (
      <>
        Swoją przygodę z programowaniem rozpocząłem od serii kursów tworzenia stron internetowych MMC School. Nauczyłem się wtedy 
        HTML, CSS i podstaw JavaScript. Poznałem również ważne koncepcje jak Responsive Web Design, stylowanie stron przy pomocy SCSS oraz BEM i dobre 
        praktyki pisania kodu. W międzyczasie próbowałem swoich sił w C++, Pythonie. Potrafię również dobrze poruszać się po terminalu. Moim głównym celem jest rozwój w kierunku Reacta. Obecnie najczęściej tworzę swoje projekty używając Next.js i rozwijam swoją wiedzę w tym zakresie. Następny 
        przystanek po opanowaniu Reacta, chciałbym poznać backendowy język Nest.js
      </>
    ),
    badge: "Programowanie",
    image:
      "https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923_960_720.png",
  },
  {
    description: (
      <>
        Od początku szkoły średniej moim głównym zainteresowaniem są mieszane sztuki walki. Jestem fanem federacji UFC i sam chciałbym 
        sprawdzić się jeszcze na zawodach, na poziomie amatorskim lub zawodowym. Jedna wspólna cecha sztuk walki i programowania to 
        bezustanny rozwój a druga to nagradzanie kreatywności i dyscypliny co skłoniło mnie do podjęcia nauki. 
      </>
    ),
    badge: "Sztuki walki",
    image:
      "https://cdn.pixabay.com/photo/2023/07/06/21/35/bjj-8111391_960_720.jpg",
  },
  {
    description: (
      <>
        Moje zainteresowania są dość różnorodne i obejmują wiele obszarów życia. Interesuję się rynkiem finansowym, ponieważ lubię śledzić dynamikę biznesu oraz globalną polityką, ponieważ uważam, że ważne jest rozumienie wydarzeń na świecie. W literaturze przyciągają mnie książki fantasy, historyczne oraz te, które oferują inspirujące perspektywy rozwoju osobistego - ostatnio zafascynowałem się Musashim Miyamoto.
        Jestem również fanem sportu, zwłaszcza piłki nożnej, która dostarcza mi wielu emocji i radości. Gry komputerowe, które lubię najbardziej, to bijatyki, strzelanki oraz te z otwartymi światami, szczególnie te fantastyczne, gdzie mogę eksplorować nowe środowiska i podejmować nowe wyzwania.
      </>
    ),
    badge: "Pozostałe",
    image:
      "https://cdn.pixabay.com/photo/2017/01/13/08/08/tori-1976609_1280.jpg",
  },
];

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto pt-8 mt-8 mb-12">
  <PageTitle>O mnie</PageTitle>
  {Content.map((item, index) => (
    <div
      key={`content-${index}`}
      className="mb-20 bg-secondary shadow-md p-6 rounded-lg dark:bg-card-dark max-md:ml-4 max-md:mr-4"
    >
      <div className="text-center">
        <h2 className="bg-primary text-primary-foreground rounded-full text-lg px-6 py-3 mb-4 inline-block">
          {item.badge}
        </h2>
      </div>
      <div className="text-sm">
        {item?.image && (
          <div className="relative h-80 max-md:h-80 overflow-hidden mb-6">
            <Image
              src={item.image}
              alt="blog thumbnail"
              width={640}
              height={426}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
        )}
        <p className="text-justify mb-4">{item.description}</p>
      </div>
    </div>
  ))}
</div>
  );
}
