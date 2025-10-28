import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function Certifications() {
  const certifications = [
    {
      name: 'Image Modelling with Keras',
      issuer: 'Datacamp',
      year: '2024',
      color: 'from-blue-500 to-cyan-500',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/19b058632d876e7f2ac2aa86f0c1c4db5b0339f8',
    },
    {
      name: 'Biomedical Image Analysis in Python',
      issuer: 'Datacamp',
      year: '2024',
      color: 'from-orange-500 to-yellow-500',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ecb9b91eff643d33b0f996f2057271676f26490a',
    },
    {
      name: 'Image Processing in Python',
      issuer: 'Datacamp',
      year: '2024',
      color: 'from-cyan-500 to-blue-600',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/637c398318c0e9464358564c5d0e3e4229f279dc',
    },
    {
      name: 'ETL and ELT in Python',
      issuer: 'Datacamp',
      year: '2024',
      color: 'from-red-500 to-rose-600',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bb39dc6b7ba33e3f177cd98df5c6bc3220a67988',
    },
    {
      name: 'Dimensionality Reduction in Python',
      issuer: 'Datacamp',
      year: '2024',
      color: 'from-violet-500 to-purple-600',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ec242cc2feeafd7fb2c8e3aba4683e8cc80006cc',
    },
    {
      name: 'Cleaning Data in Python',
      issuer: 'Datacamp',
      year: '2023',
      color: 'from-red-600 to-pink-600',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/c3f4e915456704d0913394c6eb00b5d41d2fa73d',
    },
  ];

  return (
    <section id="certifications" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-4xl sm:text-5xl mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative p-6 rounded-3xl bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.color}`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-500 text-sm">{cert.year}</span>
                </div>

                <h3 className="text-white text-lg mb-2">{cert.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-auto w-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl group/btn"
                  onClick={() => window.open(cert.url, '_blank')}
                >
                  View Certificate
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
