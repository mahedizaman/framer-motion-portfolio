"use client"; 
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ContactComponentsLeft = () => {
  
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.h1
        variants={itemVariants}
        className="text-cyan-400 font-bold text-xl uppercase tracking-widest text-glow-cyan"
      >
        Contact
      </motion.h1>

      <motion.div variants={itemVariants} className="py-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Let&apos;s Work <br />
          <span className="text-gray-400">Together</span>
        </h1>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="pb-8 flex flex-col gap-3 text-gray-300 text-lg"
      >
        <p className="hover:text-cyan-400 transition-colors cursor-default">
          Jatrabari Dhaka{" "}
          <span className="text-gray-500 text-sm italic uppercase">
            Bangladesh
          </span>
        </p>
        <p className="hover:text-cyan-400 transition-colors">
          info.zaman.profile@gmail.com
        </p>
        <p className="hover:text-cyan-400 transition-colors">
          Phone : +8801580547673
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-6">
        {[
          { Icon: Linkedin, href: "#" },
          { Icon: Github, href: "#" },
          { Icon: Facebook, href: "#" },
        ].map((social, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 10, color: "#22d3ee" }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 transition-colors"
          >
            <Link href={social.href}>
              <social.Icon className="w-10 h-10 bg-amber-500 text-white p-2 rounded-full" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ContactComponentsLeft;
