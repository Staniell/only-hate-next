"use client";

import { motion } from "framer-motion";
import { ArrowRight, EyeOff } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-red-900 selection:text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-80" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/10 border border-red-900/30 text-red-500 text-sm font-medium mb-8"
        >
          <EyeOff className="w-4 h-4" />
          <span>Beta Access Open</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          FILTER THE <span className="text-red-600">NOISE</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-neutral-400 max-w-[600px] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stop wasting time on toxic positivity. OnlyHate highlights the negativity so you can see the real internet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://chromewebstore.google.com/detail/onlyhate/bmokokjcebimehcfeingjocnhooigfle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]"
          >
            Add to Chrome
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 rounded-lg font-bold text-lg transition-all flex items-center justify-center cursor-pointer"
          >
            See How It Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="https://www.producthunt.com/products/onlyhate?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-onlyhate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1056288&theme=light&t=1767302459959"
              alt="OnlyHate - Filter out toxic positivity from social comments | Product Hunt"
              width="250"
              height="54"
              className="w-[250px] h-[54px] transition-all hover:scale-105 duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
