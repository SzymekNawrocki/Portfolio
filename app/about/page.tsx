"use client";
import { motion } from 'framer-motion';
import React from "react";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function page() {
  return (
    <div className="max-w-2xl mx-auto pt-8 mt-8 mb-12">
    <PageTitle>O mnie</PageTitle>
      
      {Content.map((item, index) => (
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="mb-20 bg-secondary shadow-md p-6 rounded-lg dark:bg-card-dark max-md:ml-4 max-md:mr-4"
        >
          <div className="text-center ">
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
                  width={640} // Przykładowa szerokość
                  height={426} // Przykładowa wysokość
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </div>
            )}
            <p className="text-center mb-4">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}




const Content = [
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
      "https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374_1280.jpg",
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
      "https://cdn.pixabay.com/photo/2016/12/07/21/11/mma-1890458_960_720.jpg",
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
      "https://cdn.pixabay.com/photo/2017/01/13/08/08/tori-1976609_1280.jpg",
  },
 
];
