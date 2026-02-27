import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800" />
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase tracking-[0.2em]">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto] md:auto-rows-[180px]">
          
          {/* Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-8 md:row-span-2 p-10 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group min-h-[300px] md:min-h-0"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Bridging Tech & Innovation</h3>
            <div className="space-y-4 text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
              <p>
                I'm <span className="text-emerald-400 font-medium">Habib Fabian Fahlesi</span>, a developer who thrives at the intersection of complex problem-solving and clean architecture.
              </p>
              <p>
                From building scalable <span className="text-white font-normal">SaaS ecosystems</span> with React & Laravel to architecting <span className="text-white font-normal">Decentralized protocols</span> on Ethereum, my goal is to create software that isn't just functional, but exceptional.
              </p>
              <p className="hidden sm:block">
                Currently focusing on the evolution of Web3 and AI-driven automation.
              </p>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 md:row-span-2 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md overflow-hidden relative group aspect-[4/3] md:aspect-auto"
          >
            <ImageWithFallback
              src="/my-photo.jpeg"
              alt="Habib Fabian Fahlesi"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-medium">Yogyakarta, ID</p>
              <p className="text-zinc-400 text-sm">Fullstack & Blockchain</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
