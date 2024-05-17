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
import { IconHome, IconMessage, IconUser, IconPackage, IconSun, IconMoon } from "@tabler/icons-react"; // Zmiana importu na ikony z @tabler/icons-react
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { ModeToggle } from '@/components/ModeToggle'

const Navbar = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
 

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const scrolledDown = scrollYProgress.get() > scrollYProgress.getPrevious();
      setVisible(scrollYProgress.get() <= 0 || !scrolledDown);
    }
  });

  

  const navItems = [
    { name: "Home", link: "/",  icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />, },
    { name: "O mnie", link: "/about",  icon: <IconUser className="h-6 w-6 text-neutral-500 dark:text-white" />, },
    { name: "Projekty", link: "/projects", icon: <IconPackage className="h-6 w-6 text-neutral-500 dark:text-white" />, },
    { name: "Kontakt", link: "/contact", icon: (
      <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />
    ), },
  ];

  return (
    <AnimatePresence>
  {visible && (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-xl top-3 fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl- py-2 items-center justify-between" // changed justify-center to justify-between
      )}
    >
      <div className="ml-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Nawrocki.dev logo" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex space-x-4">
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 {isActive ? : "
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </div>
<div className="mr-5">

      <ModeToggle></ModeToggle>
</div>
    </motion.div>
  )}
</AnimatePresence>

  );
};

export default Navbar;