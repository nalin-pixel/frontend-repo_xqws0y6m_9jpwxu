import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-3">
            <User className="h-5 w-5 text-cyan-400" />
            <h3 className="text-lg font-semibold">Who I Am</h3>
          </div>
          <p className="text-slate-300">
            I’m Dimas Farrel Aditya, an IT student and full‑stack developer who loves turning ideas into smooth, interactive products. I focus on clean code, accessible UI, and delightful micro‑interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-3">
            <Rocket className="h-5 w-5 text-sky-400" />
            <h3 className="text-lg font-semibold">What I Do</h3>
          </div>
          <p className="text-slate-300">
            I build full‑stack apps with modern JavaScript, REST APIs, and cloud‑ready services. I care about performance, scalability, and crafting memorable user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur"
        >
          <div className="mb-4 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg font-semibold">Aspirations</h3>
          </div>
          <p className="text-slate-300">
            My goal is to join a team building impactful products, contribute to open‑source, and explore real‑time 3D and AI to create meaningful, playful experiences for the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
