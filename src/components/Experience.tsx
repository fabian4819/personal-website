import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Award, Trophy, Briefcase } from 'lucide-react';
import { useRef } from 'react';

export function Experience() {
  const experiences = [
    {
      title: 'Blockchain Developer',
      organization: 'Individual',
      period: '2025 - Present',
      description: 'Developing smart contracts and DApps for DeFi platforms. Implemented NFT marketplace features and token economics.',
      icon: Briefcase,
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'AI Operations Intern',
      organization: 'PT Packet Systems Indonesia',
      period: '2025 (Jan - Mar)',
      description: 'Assisted in developing AI-driven solutions for IT operations. Contributed to automating incident response and improving system reliability.',
      icon: Briefcase,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Fullstack Developer Freelance',
      organization: 'ArachnoVa',
      period: '2024 - Present',
      description: 'Built scalable SaaS applications using React and Laravel. Led development of real-time booking system serving 10k+ users.',
      icon: Briefcase,
      color: 'from-indigo-400 to-violet-500'
    },
    {
      title: 'Most Potential Project Hackaton Web3',
      organization: 'DevWeb3Jogja, Andamio, Gimbalabs',
      period: '2025',
      description: 'Awarded Most Potential Project for developing a web3 literacy platform on Cardano blockchain.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'PIMNAS 2024 Finalist',
      organization: 'Belmawa Kemdikbudristek RI',
      period: '2024',
      description: 'Finalist in National Student Scientific Week for research on mobile applications in health management system.',
      icon: Award,
      color: 'from-rose-400 to-red-500'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800" />
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Calendar className="text-emerald-400" />
            Milestones <span className="text-emerald-400">&</span> History
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800" />
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-900 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ pathLength, scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-indigo-500 to-transparent -translate-x-1/2 hidden md:block"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-800 -translate-x-1/2 z-20 hidden md:block">
                    <motion.div 
                      whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1] }}
                      className="w-full h-full rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" 
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-500 hover:bg-zinc-900/60">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform ${isEven ? 'md:ml-auto' : ''}`}>
                        <Icon className="w-6 h-6 text-zinc-950" />
                      </div>

                      <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">{exp.period}</span>
                      <h3 className="text-white text-xl font-bold mb-1 tracking-tight">{exp.title}</h3>
                      <p className="text-zinc-500 text-sm font-medium mb-4">{exp.organization}</p>
                      <p className="text-zinc-400 text-sm font-light leading-relaxed">{exp.description}</p>
                      
                      {/* Decoration */}
                      <div className="absolute top-4 right-4 text-zinc-800 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Icon size={40} />
                      </div>
                    </div>
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="hidden md:block w-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
