"use client";
import Link from "next/link";
import Container from "./Container";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const navMenu = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Contact", href: "/contact" },
    { id: 3, name: "Work", href: "/work" },
  ];
  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed  top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-20 px-4"
      ></motion.div>
      <header className="relative z-10 py-6">
        <Container>
          <div className="flex justify-between items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 80,
              }}
              className="text-3xl font-bold"
            >
              <Link href={"/"}>
                MD <span className="text-emerald-500">.</span> MAHEDI
              </Link>
            </motion.div>
            <motion.div
              className="hidden md:flex gap-8"
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 80,
              }}
            >
              {navMenu.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="text-lg font-semibold hover:text-emerald-400 transition-colors cursor-pointer uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
            <div
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
          </div>
        </Container>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-[80%] bg-[#102010] border-l border-emerald-900/30 p-10 z-20 flex flex-col gap-8 shadow-2xl"
          >
            <div onClick={() => setIsOpen(false)}>
              <X size={30} className="text-white" />
            </div>
            {navMenu.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold hover:text-emerald-400 transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
