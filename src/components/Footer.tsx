import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold tracking-tight mb-6 uppercase tracking-widest">
              FABIAN
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Fullstack & Blockchain Developer focusing on high-end SaaS ecosystems and decentralized protocols.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/fabian4819"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/habibfabianfahlesi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/f4hlesi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <div className="space-y-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-zinc-400 hover:text-emerald-400 transition-colors text-xs font-medium uppercase tracking-widest"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-8">Contact</h4>
            <div className="space-y-4">
              <p className="text-zinc-400 text-xs font-medium uppercase tracking-widest">Yogyakarta, ID</p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bianfahlesi50@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-emerald-400 transition-colors text-xs font-medium uppercase tracking-widest"
              >
                bianfahlesi50@gmail.com
              </a>
              <a 
                href="https://wa.me/6282232018289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-emerald-400 transition-colors text-xs font-medium uppercase tracking-widest"
              >
                +62 822 3201 8289
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2025 FABIAN. ALL RIGHTS RESERVED.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
