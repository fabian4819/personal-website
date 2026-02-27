import { motion } from 'motion/react';
import { Code, Database, Blocks, Wrench, Layers } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-emerald-400 to-teal-500',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Kotlin'],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-blue-400 to-indigo-500',
      skills: ['Laravel', 'Node.js', 'Express', 'REST APIs', 'Golang'],
    },
    {
      title: 'Blockchain',
      icon: Blocks,
      color: 'from-violet-400 to-purple-500',
      skills: ['Solidity', 'Foundry', 'Web3.js', 'Ethers.js', 'Smart Contracts'],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-rose-400 to-red-500',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Docker', 'Git', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_400px,#3b82f610,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800" />
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Layers className="text-indigo-400" />
            Stack <span className="text-indigo-400">Expertise</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Subtle Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-500`} />
                
                <div className="relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md h-full flex flex-col hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                      <Icon className="w-6 h-6 text-zinc-950" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 rounded-xl bg-zinc-950/50 border border-white/5 text-zinc-400 text-sm font-light hover:text-white hover:border-emerald-500/30 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
