import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from './ui/button';

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            {/* <span className="text-white">HFF</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <Link to="/cv">
              <button className="text-slate-300 hover:text-cyan-400 transition-colors">
                CV
              </button>
            </Link>

            {currentPage === 'home' && (
              <Link to="/projects">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 rounded-xl"
                >
                  View All Projects
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-slate-800/50">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <Link to="/cv" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2">
                CV
              </button>
            </Link>
            {currentPage === 'home' && (
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 rounded-xl"
                >
                  View All Projects
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
