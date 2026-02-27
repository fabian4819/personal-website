import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  images?: string[];
  video?: string;
  technologies?: string[];
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoLink?: string;
  codeLink?: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const displayTags = project.technologies || project.tags || [];
  const displayImage = project.image || (project.images && project.images[0]);

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        cursor: onClick ? 'pointer' : 'default'
      }}
      className="group relative h-full"
      onClick={onClick}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 rounded-[2rem] blur-2xl transition-opacity duration-500" />

      {/* Main Card Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl overflow-hidden hover:border-white/10 transition-all duration-300 h-full flex flex-col shadow-2xl"
      >
        {/* Image Section */}
        {displayImage && (
          <div className="relative h-64 overflow-hidden">
            <ImageWithFallback
              src={displayImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                {project.category || 'Development'}
              </div>
            </div>

            {/* View Details Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-8 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-white text-2xl font-bold mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 mb-6 flex-1 leading-relaxed font-light text-sm">
            {project.description}
          </p>

          {/* Tech Stack */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-8">
              {displayTags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-md uppercase tracking-tighter group-hover:border-emerald-500/20 group-hover:text-emerald-500/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
              {displayTags.length > 4 && (
                <span className="text-[10px] font-medium text-zinc-700 px-2 py-0.5">+{displayTags.length - 4}</span>
              )}
            </div>
          )}

          {/* Action Links */}
          <div className="flex gap-4">
            {(project.liveUrl || project.demoLink) && (
              <button
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl || project.demoLink, '_blank');
                }}
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </button>
            )}
            {(project.githubUrl || project.codeLink) && (
              <button
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl || project.codeLink, '_blank');
                }}
              >
                <Github size={16} />
                <span>Source</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
