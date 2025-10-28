import { motion } from 'motion/react';
import { Code, Zap, Rocket, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    { icon: Code, label: 'Clean Code', color: 'from-cyan-500 to-blue-500' },
    { icon: Zap, label: 'Performance', color: 'from-violet-500 to-purple-500' },
    { icon: Rocket, label: 'Innovation', color: 'from-pink-500 to-rose-500' },
    { icon: Shield, label: 'Security', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section id="about" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-4xl sm:text-5xl mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-800/50 backdrop-blur-sm bg-slate-800/30 max-h-[500px]">
              <ImageWithFallback
                src="/my-photo.jpeg"
                alt="Habib Fabian Fahlesi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Hi! I'm Habib Fabian Fahlesi, a passionate Fullstack and Blockchain Developer dedicated to building innovative solutions that bridge traditional web technologies with the decentralized future.
              </p>
              <p className="text-slate-400 leading-relaxed">
                With expertise spanning React, Laravel, and Solidity, I specialize in creating scalable web applications and smart contracts. My journey in tech has led me to work on diverse projects from SaaS platforms to Web3 music investment ecosystems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I'm driven by the challenge of solving complex problems and turning ideas into reality through clean, efficient code. Whether it's building IoT-based energy management systems or NFT marketplaces, I bring a holistic approach to every project.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-transform"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-300">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
