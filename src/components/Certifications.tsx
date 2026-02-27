import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'Image Modelling with Keras',
      issuer: 'Datacamp',
      year: '2024',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/19b058632d876e7f2ac2aa86f0c1c4db5b0339f8',
    },
    {
      name: 'Biomedical Image Analysis in Python',
      issuer: 'Datacamp',
      year: '2024',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ecb9b91eff643d33b0f996f2057271676f26490a',
    },
    {
      name: 'Image Processing in Python',
      issuer: 'Datacamp',
      year: '2024',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/637c398318c0e9464358564c5d0e3e4229f279dc',
    },
    {
      name: 'ETL and ELT in Python',
      issuer: 'Datacamp',
      year: '2024',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/bb39dc6b7ba33e3f177cd98df5c6bc3220a67988',
    },
    {
      name: 'Dimensionality Reduction in Python',
      issuer: 'Datacamp',
      year: '2024',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ec242cc2feeafd7fb2c8e3aba4683e8cc80006cc',
    },
    {
      name: 'Cleaning Data in Python',
      issuer: 'Datacamp',
      year: '2023',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/c3f4e915456704d0913394c6eb00b5d41d2fa73d',
    },
  ];

  return (
    <section id="certifications" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800" />
          <h2 className="text-3xl font-bold tracking-tight text-white uppercase tracking-[0.2em]">
            Certifications
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:bg-zinc-900/60 transition-all duration-300 h-full flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-[0.2em] group-hover:text-emerald-400 transition-colors">
                    {cert.issuer}
                  </div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {cert.year}
                  </div>
                </div>

                <h3 className="text-white text-xl font-bold mb-6 tracking-tight group-hover:text-emerald-400 transition-colors leading-tight">
                  {cert.name}
                </h3>

                <button
                  onClick={() => window.open(cert.url, '_blank')}
                  className="mt-auto flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors"
                >
                  Verify Credentials
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
