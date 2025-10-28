import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Experience } from '../components/Experience';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
