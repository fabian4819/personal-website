import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500" />

      {/* Card */}
      <div className="relative rounded-3xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm overflow-hidden hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        {displayImage && (
          <div className="relative h-56 overflow-hidden">
            <ImageWithFallback
              src={displayImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-white text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all">
            {project.title}
          </h3>
          
          <p className="text-slate-400 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {displayTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-400 bg-cyan-500/5 rounded-lg"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            {(project.liveUrl || project.demoLink) && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-xl group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl || project.demoLink, '_blank');
                }}
              >
                <ExternalLink className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                Live Demo
              </Button>
            )}
            {(project.githubUrl || project.codeLink) && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-violet-400 rounded-xl group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl || project.codeLink, '_blank');
                }}
              >
                <Github className="mr-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
