"use client";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-[90vh] flex items-center py-20">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-emerald-500 font-mono text-lg mb-4 block"
          >
            Hi, I am 
          </motion.span>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium mb-8"
          >
            A <span className="text-white font-bold">CSE Graduate</span> &{" "}
            <span className="text-emerald-400 font-bold underline decoration-2 underline-offset-4">
              Frontend Web Developer
            </span>
            . Currently building modern web experiences using React, Next.js,
            and Framer Motion. I love turning complex problems into simple,
            beautiful, and intuitive designs.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4">
            <Link href={"/work"} className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-md hover:bg-emerald-400 transition-all hover:-translate-y-1">
              Check My Work
            </Link>
            <Link href={"/contact"} className="px-8 py-3 border border-emerald-500 text-emerald-500 font-bold rounded-md hover:bg-emerald-500/10 transition-all">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
