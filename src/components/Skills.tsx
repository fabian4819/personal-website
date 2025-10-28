import { motion } from 'motion/react';
import { Code, Database, Blocks, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Kotlin'],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-violet-500 to-purple-600',
      skills: ['Laravel', 'Node.js', 'Express', 'REST APIs', 'Golang'],
    },
    {
      title: 'Blockchain',
      icon: Blocks,
      color: 'from-pink-500 to-rose-600',
      skills: ['Solidity', 'Foundry', 'Web3.js', 'Ethers.js', 'Smart Contracts'],
    },
    {
      title: 'Database & Tools',
      icon: Wrench,
      color: 'from-emerald-500 to-teal-600',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Docker', 'Git', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-4xl sm:text-5xl mb-4">
            Skills & Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white text-xl">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-slate-400 text-sm">{skill}</span>
                      </motion.div>
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
