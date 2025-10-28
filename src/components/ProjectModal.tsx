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
            className="w-full max-w-3xl my-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
              <div className="p-8">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute right-6 top-6 hover:bg-slate-800 z-10 rounded-xl"
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-6 pr-12 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  {project.title}
                </h2>

                {/* Media Gallery */}
                {mediaItems.length > 0 && (
                  <div className="mb-8">
                    <div className="relative bg-slate-950/50 rounded-2xl overflow-hidden border border-slate-800/50">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentMediaIndex}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                          className="flex justify-center items-center p-4"
                          style={{ minHeight: '300px', maxHeight: '500px' }}
                        >
                          {mediaItems[currentMediaIndex]?.type === 'video' ? (
                            <video
                              controls
                              autoPlay
                              muted
                              loop
                              className="max-w-full max-h-full object-contain rounded-lg"
                              poster={mediaItems[currentMediaIndex].poster}
                              preload="auto"
                              key={`video-${currentMediaIndex}`}
                              style={
                                (project.id === 'warasin' || project.id === 'kkn-village-websites' ||
                                 project.id === 'mallvest' || project.id === 'trustbridge' ||
                                 project.id === 'perdana-property' || project.id === 'roetix' ||
                                 project.id === 'novatix')
                                  ? {
                                      maxWidth: '700px',
                                      maxHeight: '400px',
                                      width: 'auto',
                                      height: 'auto'
                                    }
                                  : {
                                      maxWidth: '400px',
                                      maxHeight: '450px',
                                      width: 'auto',
                                      height: 'auto'
                                    }
                              }
                            >
                              <source src={mediaItems[currentMediaIndex].src} type="video/mp4" />
                              <source src={mediaItems[currentMediaIndex].src} type="video/quicktime" />
                              <p className="p-4 text-center text-slate-400">
                                Your browser doesn't support video playback.
                              </p>
                            </video>
                          ) : (
                            <img
                              src={mediaItems[currentMediaIndex]?.src}
                              alt={`${project.title} - ${currentMediaIndex + 1}`}
                              className="max-w-full max-h-full object-contain rounded-lg"
                              style={
                                (project.id === 'warasin' || project.id === 'kkn-village-websites' ||
                                 project.id === 'mallvest' || project.id === 'trustbridge' ||
                                 project.id === 'perdana-property' || project.id === 'roetix' ||
                                 project.id === 'novatix')
                                  ? {
                                      maxWidth: '700px',
                                      maxHeight: '400px',
                                      width: 'auto',
                                      height: 'auto'
                                    }
                                  : {
                                      maxWidth: '400px',
                                      maxHeight: '450px',
                                      width: 'auto',
                                      height: 'auto'
                                    }
                              }
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      {mediaItems.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={prevMedia}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-slate-900/90 hover:bg-slate-800 text-white rounded-full z-30 transition-all hover:scale-110"
                            style={{ left: '1rem' }}
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button
                            type="button"
                            onClick={nextMedia}
                            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-slate-900/90 hover:bg-slate-800 text-white rounded-full z-30 transition-all hover:scale-110"
                            style={{ right: '1rem' }}
                          >
                            <ChevronRight className="h-6 w-6" />
                          </button>
                        </>
                      )}

                      {/* Media counter */}
                      {mediaItems.length > 1 && (
                        <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-sm border border-slate-700/50 z-10">
                          {currentMediaIndex + 1} / {mediaItems.length}
                        </div>
                      )}
                    </div>

                    {/* Media indicators */}
                    {mediaItems.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {mediaItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentMediaIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentMediaIndex
                                ? 'bg-cyan-500 scale-110'
                                : 'bg-slate-700 hover:bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {/* Technologies */}
                {displayTechnologies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {displayTechnologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-400 bg-cyan-500/5 rounded-lg hover:bg-cyan-500/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {demoUrl && (
                    <Button
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl"
                      onClick={() => window.open(demoUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                  {codeUrl && (
                    <Button
                      variant="outline"
                      className="flex-1 border-violet-500/30 text-violet-400 hover:bg-violet-500/10 rounded-xl"
                      onClick={() => window.open(codeUrl, '_blank')}
                    >
                      <Github className="mr-2 w-4 h-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
