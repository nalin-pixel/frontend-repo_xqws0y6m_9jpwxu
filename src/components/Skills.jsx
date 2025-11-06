import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 75 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 78 },
  { name: 'Tailwind CSS', level: 86 },
  { name: 'FastAPI', level: 72 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Skills
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">{skill.name}</span>
                <span className="text-xs text-white/60">{skill.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
