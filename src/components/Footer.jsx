import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 py-10 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <p>
          © {new Date().getFullYear()} Dimas Farrel Aditya — Crafted with React, Tailwind, and a dash of 3D.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
