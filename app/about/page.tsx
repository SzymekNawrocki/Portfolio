"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function page() {
  return (
    
    <div className="max-w-3xl mx-auto pt-10 mt-20 mb-12">
   
      <h2 className="text-center text-3xl font-bold mb-20">O mnie</h2>
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-20 bg-white shadow-md p-6 rounded-lg">
          <div className="text-center">
            <h2 className="bg-gray-800 text-white rounded-full text-lg px-6 py-3 mb-4 inline-block">
              {item.badge}
            </h2>
          </div>
          <div className="text-sm prose dark:prose-invert text-gray-700">
            {item?.image && (
              <div className="relative w-full h-96 overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
            <p className="text-center mb-4">{item.description}</p>
          </div>
        </div>
      ))}
 
    </div>
  );
}

const dummyContent = [
  {
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      
      </>
    ),
    badge: "Programowanie",
    image:
      "https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg",
  },
  {
   
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      
      </>
    ),
    badge: "Sztuki walki",
    image:
      "https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg",
  },
  {
   
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      
      </>
    ),
    badge: "Pozostałe",
    image:
      "https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg",
  },
 
];
