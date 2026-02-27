import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState, useEffect, useRef } from 'react';
import type { Project } from './ProjectCard';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const prevProjectIdRef = useRef<string | undefined>();

  // Reset media index when project changes
  useEffect(() => {
    if (project?.id !== prevProjectIdRef.current) {
      prevProjectIdRef.current = project?.id;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentMediaIndex(0);
    }
  }, [project?.id]);

  if (!project) return null;

  // Create media array with video and images
  const mediaItems: Array<{ type: 'video' | 'image'; src: string; poster?: string }> = [];

  if (project.video) {
    const posterImage = project.image || (project.images && project.images[0]);
    mediaItems.push({ type: 'video', src: project.video, poster: posterImage });
  }

  // Add all images (either from images array or single image)
  if (project.images && project.images.length > 0) {
    project.images.forEach(imgSrc => {
      mediaItems.push({ type: 'image', src: imgSrc });
    });
  } else if (project.image) {
    mediaItems.push({ type: 'image', src: project.image });
  }

  console.log('Project:', project.id, 'Media items:', mediaItems.length, mediaItems);

  const nextMedia = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const newIndex = (currentMediaIndex + 1) % mediaItems.length;
    console.log('Next: from', currentMediaIndex, 'to', newIndex);
    setCurrentMediaIndex(newIndex);
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const newIndex = (currentMediaIndex - 1 + mediaItems.length) % mediaItems.length;
    console.log('Prev: from', currentMediaIndex, 'to', newIndex);
    setCurrentMediaIndex(newIndex);
  };

  const displayTechnologies = project.technologies || project.tags || [];
  const demoUrl = project.liveUrl || project.demoLink;
  const codeUrl = project.githubUrl || project.codeLink;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-4xl my-8 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_-12px_rgba(52,211,153,0.2)] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glows */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] pointer-events-none" />

            <div className="p-8 md:p-12 relative z-10">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-6 top-6 hover:bg-white/5 z-20 rounded-full border border-white/5 text-zinc-400 hover:text-white transition-all active:scale-95"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Side: Media Gallery */}
                <div className="lg:col-span-7">
                  {mediaItems.length > 0 ? (
                    <div className="relative aspect-video lg:aspect-square bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 group">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentMediaIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          className="w-full h-full flex justify-center items-center p-4"
                        >
                          {mediaItems[currentMediaIndex]?.type === 'video' ? (
                            <video
                              controls
                              autoPlay
                              muted
                              loop
                              className="w-full h-full object-contain rounded-xl"
                              poster={mediaItems[currentMediaIndex].poster}
                              preload="auto"
                              key={`video-${currentMediaIndex}`}
                            >
                              <source src={mediaItems[currentMediaIndex].src} type="video/mp4" />
                              <source src={mediaItems[currentMediaIndex].src} type="video/quicktime" />
                            </video>
                          ) : (
                            <img
                              src={mediaItems[currentMediaIndex]?.src}
                              alt={`${project.title} - ${currentMediaIndex + 1}`}
                              className="w-full h-full object-contain rounded-xl"
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      {mediaItems.length > 1 && (
                        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            type="button"
                            onClick={prevMedia}
                            className="w-12 h-12 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white rounded-full transition-all hover:bg-emerald-500/20 hover:border-emerald-500/30 active:scale-90"
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button
                            type="button"
                            onClick={nextMedia}
                            className="w-12 h-12 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white rounded-full transition-all hover:bg-emerald-500/20 hover:border-emerald-500/30 active:scale-90"
                          >
                            <ChevronRight className="h-6 w-6" />
                          </button>
                        </div>
                      )}

                      {/* Media counter */}
                      {mediaItems.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-950/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 tracking-widest uppercase">
                          {currentMediaIndex + 1} / {mediaItems.length}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-square bg-zinc-900/50 rounded-3xl border border-white/5 flex items-center justify-center">
                      <span className="text-zinc-600">No media available</span>
                    </div>
                  )}

                  {/* Thumbnail Strip */}
                  {mediaItems.length > 1 && (
                    <div className="flex gap-3 mt-6 overflow-x-auto pb-2 no-scrollbar">
                      {mediaItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentMediaIndex(index)}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                            index === currentMediaIndex
                              ? 'border-emerald-500 scale-105'
                              : 'border-transparent opacity-50 hover:opacity-100'
                          }`}
                        >
                          {item.type === 'video' ? (
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-1" />
                              </div>
                            </div>
                          ) : (
                            <img src={item.src} className="w-full h-full object-cover" alt="" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Content */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                    >
                      Featured Project
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight"
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-zinc-400 text-lg leading-relaxed"
                    >
                      {project.longDescription || project.description}
                    </motion.p>
                  </div>

                  {/* Technologies */}
                  {displayTechnologies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-8"
                    >
                      <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Core Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {displayTechnologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-white/10 text-zinc-300 bg-white/5 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default py-1 px-3"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-auto flex flex-col sm:flex-row gap-4"
                  >
                    {demoUrl && (
                      <Button
                        className="flex-1 bg-white text-zinc-950 hover:bg-emerald-400 transition-all font-bold rounded-2xl py-6 group"
                        onClick={() => window.open(demoUrl, '_blank')}
                      >
                        Launch Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    )}
                    {codeUrl && (
                      <Button
                        variant="outline"
                        className="flex-1 border-white/10 text-white hover:bg-white/10 rounded-2xl py-6 font-bold"
                        onClick={() => window.open(codeUrl, '_blank')}
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Source Code
                      </Button>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
