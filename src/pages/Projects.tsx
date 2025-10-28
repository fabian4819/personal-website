import { motion } from 'motion/react';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { ProjectCard, Project } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Footer } from '../components/Footer';
import { projects, web3Projects } from '../data/projects';
import { Button } from '../components/ui/button';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'blockchain', label: 'Web3/Blockchain' },
    { id: 'web2', label: 'Web2' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'saas', label: 'SaaS' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'blockchain'
      ? web3Projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section id="all-projects" className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-5xl sm:text-6xl mb-6">
              All Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A collection of projects I've built across Web, SaaS, and Blockchain ecosystems. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
              <Filter className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-400 text-sm">Filter:</span>
            </div>
            
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                className={`rounded-xl ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        project={selectedProject}
      />
    </div>
  );
}
