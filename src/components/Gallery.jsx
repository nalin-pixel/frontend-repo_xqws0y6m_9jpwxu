import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555617981-dac3880fb6ac?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Random Photos</h2>
          <p className="mt-2 text-sm text-white/70">A playful stream of visuals that inspire my builds.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img
                src={src}
                alt="Random tech"
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
