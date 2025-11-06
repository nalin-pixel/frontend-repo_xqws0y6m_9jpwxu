import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

const items = [
  {
    icon: Code2,
    title: 'Frontend Craft',
    desc: 'Pixel‑perfect UI with React, Tailwind, and accessible patterns.',
  },
  {
    icon: Database,
    title: 'Backend Logic',
    desc: 'API design, data modeling, and clean architecture with Node & FastAPI.',
  },
  {
    icon: Globe,
    title: 'Deployment',
    desc: 'CI/CD, performance, and monitoring to ship confidently.',
  },
];

const Experience = () => {
  return (
    <section className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl"
        >
          What I Bring
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6"
            >
              <item.icon className="mb-3 h-6 w-6 text-sky-400" />
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
