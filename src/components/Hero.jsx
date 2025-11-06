import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-950/90" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] blur-2xl" />

      {/* Minimal nav */}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-sm font-semibold tracking-wide text-white/90">Dimas Farrel Aditya</span>
        </motion.div>
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#gallery" className="transition hover:text-white">Photos</a>
        </motion.nav>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          Open to internships & freelance
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Full‑Stack Developer
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05 }} className="mx-auto max-w-2xl text-base text-slate-200 sm:text-lg">
          I craft modern web apps with delightful interactions and solid engineering.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#about" className="group relative rounded-full px-7 py-3 text-sm font-medium">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-90 transition group-hover:opacity-100" />
            <span className="relative text-white">Explore Profile</span>
          </a>
          <a href="#skills" className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white">
            View Skills
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-8 flex items-center gap-4">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="mailto:dimas@example.com" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/60 sm:flex">
          <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          Scroll
          <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
