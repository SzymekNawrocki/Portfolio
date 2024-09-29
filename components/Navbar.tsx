'use client'
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconHome, IconMessage, IconUser, IconPackage } from "@tabler/icons-react";
import { ModeToggle } from '@/components/ModeToggle';
import Image from 'next/image'

const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("Home"); 

  useMotionValueEvent(scrollYProgress, "change", () => {
    const current = scrollYProgress.get();
    const previous = scrollYProgress.getPrevious();

    if (typeof current === "number" && typeof previous === "number") {
      const scrolledDown = current > previous;
      setVisible(current <= 0 || !scrolledDown);
    }
  });

  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-7 w-7 text-black dark:text-white" /> },
    { name: "O mnie", link: "/about", icon: <IconUser className="h-7 w-7 text-black dark:text-white" /> },
    { name: "Projekty", link: "/projects", icon: <IconPackage className="h-7 w-7 text-black dark:text-white" /> },
    { name: "Kontakt", link: "/contact", icon: <IconMessage className="h-7 w-7 text-black dark:text-white" /> },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-xl top-3 fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl- py-2 items-center justify-between"
          )}
        >
          <div className="ml-5">
            <Link href="/" className="font-bold relative text-black dark:text-white underline decoration-primary decoration-2">
            <Image
        src="/1.png" 
        alt="Opis obrazka"
        width={60} 
        height={50} 
        className="ml-4 rounded-full"
      />
            </Link>
          </div>
          <div className="flex space-x-6">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                onClick={() => setActiveLink(navItem.name)} // 
                className={cn(
                  "relative items-center flex space-x-1",
                  activeLink === navItem.name
                    ? "text-primary dark:text-primary" // 
                    : "text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <div className="mr-5">
            <ModeToggle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
