import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bianfahlesi50@gmail.com',
      color: 'from-emerald-500/20 to-emerald-500/0',
      textColor: 'text-emerald-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+6282232018289',
      color: 'from-indigo-500/20 to-indigo-500/0',
      textColor: 'text-indigo-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yogyakarta, Indonesia',
      color: 'from-emerald-500/20 to-indigo-500/20',
      textColor: 'text-white',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Let's <span className="text-zinc-500">Connect.</span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent">
              <form onSubmit={handleSubmit} className="relative p-10 rounded-[2.4rem] bg-zinc-900/80 backdrop-blur-3xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 bg-white/5 border-white/5 text-white placeholder:text-zinc-600 rounded-2xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all px-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 bg-white/5 border-white/5 text-white placeholder:text-zinc-600 rounded-2xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all px-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="bg-white/5 border-white/5 text-white placeholder:text-zinc-600 rounded-2xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all p-6 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-8 rounded-2xl text-lg transition-all active:scale-[0.98] group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 flex items-center gap-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`p-5 rounded-2xl bg-zinc-950 border border-white/10 group-hover:border-emerald-500/50 transition-colors`}>
                      <Icon className={`w-6 h-6 ${info.textColor || 'text-white'}`} />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-1">{info.label}</p>
                      <p className="text-white text-xl font-medium tracking-tight">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-white/5 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Current Status</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I'm currently available for freelance projects and full-time opportunities. If you have a vision, let's bring it to life.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium">
                Available for hire
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
