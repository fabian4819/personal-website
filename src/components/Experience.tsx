import { motion } from 'motion/react';
import { Calendar, Award, Trophy } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Blockchain Developer',
      organization: 'Individual',
      period: '2025 - Present',
      description: 'Developing smart contracts and DApps for DeFi platforms. Implemented NFT marketplace features and token economics.',
      icon: Calendar,
    },
    {
      title: 'AI Operations Intern',
      organization: 'PT Packet Systems Indonesia',
      period: '2025 (Jan - Mar)',
      description: 'Assisted in developing AI-driven solutions for IT operations. Contributed to automating incident response and improving system reliability.',
      icon: Calendar,
    },
    {
      title: 'Fullstack Developer Freelance',
      organization: 'ArachnoVa',
      period: '2024 - Present',
      description: 'Built scalable SaaS applications using React and Laravel. Led development of real-time booking system serving 10k+ users.',
      icon: Calendar,
    },
    {
      title: 'Most Potential Project Hackaton Bulding Campus Web3 Literacy on Blockchain Cardano',
      organization: 'DevWeb3Jogja, Andamio, Gimbalabs',
      period: '2025',
      description: 'Awarded Most Potential Project for developing a web3 literacy platform on Cardano blockchain, promoting decentralized education solutions.',
      icon: Trophy,
    },
    {
      title: 'PIMNAS 2024 Finalist',
      organization: 'Direktorat Jenderal Pembelajaran dan Kemahasiswaan (Belmawa) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia',
      period: '2024',
      description: 'Finalist in National Student Scientific Week for research on mobile applications in health management system, showcasing innovative use of technology.',
      icon: Award,
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-4xl sm:text-5xl mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative md:ml-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[4.5rem] top-6 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 ring-4 ring-slate-950" />
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500" />
                    
                    <div className="relative p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-white text-xl mb-1">{exp.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                            <span className="text-cyan-400">{exp.organization}</span>
                            <span className="hidden sm:inline text-slate-600">•</span>
                            <span className="text-slate-500 text-sm">{exp.period}</span>
                          </div>
                          <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
