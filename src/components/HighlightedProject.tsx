import { Trophy } from 'lucide-react';
import projectImage from '@/assets/project-hidden-object.jpg';

export const HighlightedProject = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-card to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Featured Achievement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Highlighted <span className="text-gradient">Project</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-painted overflow-hidden animate-scale-in">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img 
                  src={projectImage} 
                  alt="Spot Hidden Object Game" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold mb-4 text-primary">
                  Spot Hidden Object
                </h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Successfully created assets for over 1000+ levels in this engaging hidden object game. Each level required meticulous attention to detail, style consistency, and creative problem-solving to maintain player engagement throughout the experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/70">1000+ Unique Level Assets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/70">Consistent Art Style</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/70">AI-Assisted Workflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
