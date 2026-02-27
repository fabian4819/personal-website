import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname === '/cv' ? 'cv' : 'projects';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = currentPage === 'home'
    ? [
        { label: 'Home', action: () => scrollToSection('hero') },
        { label: 'About', action: () => scrollToSection('about') },
        { label: 'Skills', action: () => scrollToSection('skills') },
        { label: 'Projects', action: () => scrollToSection('projects') },
        { label: 'Contact', action: () => scrollToSection('contact') },
      ]
    : currentPage === 'cv'
    ? [
        { label: 'Home', action: () => navigate('/') },
        { label: 'Projects', action: () => navigate('/projects') },
        { label: 'Contact', action: () => { navigate('/'); setTimeout(() => scrollToSection('contact'), 100); } },
      ]
    : [
        { label: 'Home', action: () => navigate('/') },
        { label: 'All Projects', action: () => scrollToSection('all-projects') },
        { label: 'Contact', action: () => navigate('/') },
      ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full max-w-4xl px-6 h-14 rounded-2xl transition-all duration-300 border ${
          isScrolled 
            ? 'bg-zinc-950/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-400 to-indigo-500 group-hover:rotate-12 transition-transform">
            <Code2 className="w-5 h-5 text-zinc-950" />
          </div>
          <span className="text-white font-medium tracking-tight hidden sm:block">FABIAN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
            </button>
          ))}

          <div className="w-px h-4 bg-zinc-800" />

          <Link to="/cv">
            <button className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
              CV
            </button>
          </Link>

          {currentPage === 'home' && (
            <Link to="/projects">
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 rounded-xl h-9 px-4"
              >
                Projects
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-lg font-medium text-zinc-300 hover:text-emerald-400 text-left py-2 border-b border-zinc-900"
                >
                  {link.label}
                </button>
              ))}
              <Link to="/cv" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-900">
                CV
              </Link>
              {currentPage === 'home' && (
                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="pt-2">
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 rounded-xl text-zinc-950 font-bold"
                  >
                    View All Projects
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
