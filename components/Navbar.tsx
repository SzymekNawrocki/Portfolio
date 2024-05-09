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
import { link } from "fs";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

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
    { name: "Home", link: "/",  icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "About", link: "/about",  icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact", icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
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
            "flex max-w-xl  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl- py-2  items-center justify-center space-x-4",
            className
          )}
        >
          <h1>Logo</h1>
          {navItems.map((navItem, idx) => (
           
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 {isActive ?"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <h1>Dark Mode</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
