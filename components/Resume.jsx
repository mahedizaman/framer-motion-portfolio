"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const resumeData = {
  education: [
    {
      year: "2020 - 2024",
      title: "BSc in Computer Science",
      institution: "Your University Name",
      description:
        "Focused on software engineering, data structures, and web technologies.",
    },
    {
      year: "2018 - 2020",
      title: "Dania University College",
      institution: "Your College Name",
      description:
        "Science background with a focus on Mathematics and Physics.",
    },
  ],
  experience: [
    {
      year: "2025 - Present",
      title: "Frontend Developer",
      institution: "Scan IT (UK Based)",
      description:
        "Working with React, Next.js, and Tailwind CSS to build modern web applications.",
    },
    {
      year: "2024 - 2025",
      title: "Junior Web Developer",
      institution: "Local Tech Firm",
      description:
        "Assisted in developing responsive UI components and bug fixing.",
    },
  ],
};

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center gap-4">
          <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
            Years of Experience
          </h2>
          <h1 className="text-5xl font-extrabold">My Resume</h1>
          <motion.a
            href="/myResume.pdf"
            download="Md_Mahedi_Zaman_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-full font-bold transition-colors w-fit"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-3xl font-bold mb-8 border-l-4 border-cyan-400 pl-4">
              Education
            </h3>
            <div className="space-y-8">
              {resumeData.education.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#111] p-8 rounded-2xl hover:bg-[#1a1a1a] transition-all border border-gray-800"
                >
                  <span className="text-cyan-400 font-mono text-sm">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold mt-2">{item.title}</h4>
                  <p className="text-gray-400 mt-1">{item.institution}</p>
                  <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 border-l-4 border-emerald-400 pl-4">
              Experience
            </h3>
            <div className="space-y-8">
              {resumeData.experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#111] p-8 rounded-2xl hover:bg-[#1a1a1a] transition-all border border-gray-800"
                >
                  <span className="text-emerald-400 font-mono text-sm">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold mt-2">{item.title}</h4>
                  <p className="text-gray-400 mt-1">{item.institution}</p>
                  <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
