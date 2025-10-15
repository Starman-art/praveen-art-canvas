import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { HighlightedProject } from '@/components/HighlightedProject';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative z-10">
      <Hero />
      <About />
      <HighlightedProject />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
