import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-violet-700" />
      ),
      href: "#",
    },

    {
      title: "Facebook",
      icon: (
        <FaFacebook className="h-full w-full text-blue-500" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-[#0A66C2]" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
      <FaInstagram className="h-full w-full text-[#BF1F35]" />
      ),
      href: "#",
    }
   
  ];
  return (
    <div className="flex items-center justify-center h-[20rem] w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
