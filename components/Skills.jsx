"use client"
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    title: "Framer Motion",
    icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    desc: "The personal portfol category includes websites or physic Your Journey Your Story",
  },
  {
    id: 2,
    title: "Tailwind",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    desc: "The personal portfol category includes websites or physic Your Journey Your Story",
  },
  {
    id: 5,
    title: "React",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    desc: "The personal portfol category includes websites or physic Your Journey Your Story",
  },
  {
    id: 6,
    title: "Next.js",
    icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    desc: "The personal portfol category includes websites or physic Your Journey Your Story",
  },
];

const SkillSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6 md:px-12 lg:px-24 rounded-[40px] m-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-5/12 md:sticky top-20">
          <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase">
            My Skill
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mt-4 mb-6 leading-tight">
            My Experts Areas Where I Gained Skill
          </h2>
          <button className="mt-8 px-6 py-3 bg-emerald-700 border border-gray-200 rounded-full font-semibold hover:bg-emerald-900 hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[30px] border border-gray-100 flex flex-col items-start shadow-sm"
            >
              <div className="w-14 h-14 mb-8 bg-gray-50 rounded-full flex items-center justify-center p-3">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
