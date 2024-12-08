"use client";
import React from "react";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

const Content = [
  {
    description: (
      <>
        I started my programming adventure with the MMC School series of web development courses. I then learned HTML, CSS and JavaScript. After a year of self-study, I enrolled in a part-time online degree programme in Computer Science. Further down the line, I started developing my projects mainly in Next.js technology. As of today, I am working on developing my current projects and developing my competences towards mobile application development (React Native), while this semester I will have the opportunity to learn how to create a backend using the .NET platform. 
      </>
    ),
    badge: "Programming",
    image:
      "https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_960_720.png",
  },
  {
    description: (
      <>
        Since the beginning of high school, my main interest has been mixed martial arts.I am a fan of the UFC federation and I myself would still like to test myself in competition, either at amateur or professional level.I see a lot of similarities in learning martial arts and programming, and my dream is to combine the two fields together in my daily routine.
      </>
    ),
    badge: "Martial Arts",
    image:
      "https://cdn.pixabay.com/photo/2023/07/06/21/35/bjj-8111391_960_720.jpg",
  },
  {
    description: (
      <>
      I am interested in the financial market because I like to follow business dynamics and global politics because I think it is important to understand world events.In literature, I am attracted to fantasy, historical books and those that offer inspiring perspectives on personal development - I have recently become fascinated with Musashi Miyamoto.
      I am also a sports fan, especially football. The computer games I enjoy most are brawlers, shooters and those with open worlds, especially fantasy ones where I can explore new environments and take on new challenges.
      </>
    ),
    badge: "Other",
    image:
      "https://cdn.pixabay.com/photo/2017/01/13/08/08/tori-1976609_1280.jpg",
  },
];

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto pt-8 mt-8 mb-12">
  <PageTitle>About Me</PageTitle>
  {Content.map((item, index) => (
    <div
      key={`content-${index}`}
      className="mb-20 bg-secondary shadow-md p-6 rounded-lg dark:bg-card-dark max-md:ml-4 max-md:mr-4">
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
              className="absolute inset-0 w-full h-full object-cover rounded-md"/>
          </div>
        )}
        <p className="text-justify mb-4">{item.description}</p>
      </div>
    </div>
  ))}
</div>
  );
}
