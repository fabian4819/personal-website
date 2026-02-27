import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [message, setMessage] = useState('');

  const sendWhatsApp = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282232018289?text=${encodedMessage}`, '_blank');
  };

  const sendEmail = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=bianfahlesi50@gmail.com&body=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bianfahlesi50@gmail.com',
      color: 'from-emerald-500/20 to-emerald-500/0',
      textColor: 'text-emerald-400',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bianfahlesi50@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+6282232018289',
      color: 'from-indigo-500/20 to-indigo-500/0',
      textColor: 'text-indigo-400',
      href: 'https://wa.me/6282232018289'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yogyakarta, Indonesia',
      color: 'from-emerald-500/20 to-indigo-500/20',
      textColor: 'text-white',
      href: 'https://maps.google.com/?q=Yogyakarta,Indonesia'
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
          {/* Simplified Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent">
              <div className="relative p-10 rounded-[2.4rem] bg-zinc-900/80 backdrop-blur-3xl space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="bg-white/5 border-white/5 text-white placeholder:text-zinc-600 rounded-2xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all p-6 resize-none text-lg"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    onClick={sendWhatsApp}
                    className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-8 rounded-2xl text-base transition-all active:scale-[0.98] group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send WhatsApp
                      <MessageCircle className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>

                  <Button
                    onClick={sendEmail}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-8 rounded-2xl text-base transition-all active:scale-[0.98] group relative overflow-hidden border border-white/5"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Email
                      <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </div>
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
                      <a 
                        href={info.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xl font-medium tracking-tight hover:text-emerald-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
