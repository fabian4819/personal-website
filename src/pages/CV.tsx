import { motion } from 'motion/react';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';

export function CV() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Habib Fabian Fahlesi - Fullstack Web Developer _ Mobile Apps Developer _ Blockchain Developer Resume.pdf';
    link.download = 'Habib_Fabian_Fahlesi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-5xl sm:text-6xl mb-6">
              Curriculum Vitae
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              View or download my complete resume
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link to="/">
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-xl"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Button
              onClick={downloadCV}
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white rounded-xl"
            >
              <Download className="mr-2 w-4 h-4" />
              Download PDF
            </Button>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-3xl p-4 sm:p-8 backdrop-blur-sm shadow-2xl"
          >
            <div className="relative w-full" style={{ paddingBottom: '141.4%' }}>
              <iframe
                src="/assets/Habib Fabian Fahlesi - Fullstack Web Developer _ Mobile Apps Developer _ Blockchain Developer Resume.pdf"
                className="absolute inset-0 w-full h-full rounded-2xl border border-slate-700/50"
                title="Habib Fabian Fahlesi Resume"
              />
            </div>
          </motion.div>

          {/* Mobile Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-slate-500 text-sm">
              Having trouble viewing the PDF? Try downloading it or view on desktop for best experience.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
