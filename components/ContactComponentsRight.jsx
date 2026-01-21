"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactComponentsRight = () => {
 
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-2xl ml-auto"
    >
      <form className="space-y-8">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-gray-600 font-medium">First Name *</label>
            <input
              type="text"
              placeholder="..."
              className="bg-transparent border-b border-gray-300 py-2 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-300"
            />
          
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-gray-600 font-medium">Last Name *</label>
            <input
              type="text"
              placeholder="..."
              className="bg-transparent border-b border-gray-300 py-2 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-300"
            />
          </motion.div>
        </div>

      
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Email *</label>
          <input
            type="email"
            placeholder="example@mysite.com"
            className="bg-transparent border-b border-gray-300 py-2 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-300"
          />
        </motion.div>

       
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">
            Leave us a message...
          </label>
          <textarea
            rows={4}
            className="bg-transparent border-b border-gray-300 py-2 focus:border-cyan-400 outline-none transition-all resize-none"
          />
        </motion.div>

       
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9333ea] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#a855f7] transition-all"
          >
            Submit
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactComponentsRight;
