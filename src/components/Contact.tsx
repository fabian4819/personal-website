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
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+6282232018289',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Yogyakarta, Indonesia',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-4xl sm:text-5xl mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-3xl blur-xl" />
              
              <form onSubmit={handleSubmit} className="relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm space-y-6">
                <div>
                  <label className="text-slate-300 mb-2 block">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-slate-300 mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-slate-300 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="bg-slate-950/50 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-cyan-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white py-6 rounded-xl text-lg group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${info.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                        <p className="text-white text-lg">{info.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-3xl blur-xl" />
              
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 backdrop-blur-sm text-center">
                <h3 className="text-white text-2xl mb-3">Let's Build Something Amazing</h3>
                <p className="text-slate-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-600/10 border border-cyan-500/20">
                  <p className="text-cyan-400">Available for freelance work</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
