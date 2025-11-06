import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 78 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 82 },
  { name: 'MongoDB', level: 80 },
  { name: 'Tailwind CSS', level: 86 },
  { name: 'FastAPI', level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.09),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
          <p className="mt-2 text-sm text-white/70">A blend of front‑end polish and back‑end reliability.</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4"
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
                  transition={{ duration: 0.9, ease: 'easeOut' }}
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
