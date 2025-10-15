import { Palette, Mountain, Package, Users, Layout } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Concept Art',
      description: 'Initial visual concepts and mood boards that bring your game ideas to life with AI-enhanced creativity',
    },
    {
      icon: Mountain,
      title: 'Backgrounds & Environments',
      description: 'Immersive game worlds and atmospheric environments with rich detail and painterly aesthetics',
    },
    {
      icon: Package,
      title: 'Game Assets',
      description: 'Props, objects, and interactive elements designed with consistency and style for seamless integration',
    },
    {
      icon: Users,
      title: 'Character Sprites',
      description: 'Unique characters and NPCs with personality, created using AI tools and artistic refinement',
    },
    {
      icon: Layout,
      title: 'Game UI',
      description: 'Intuitive and beautiful user interfaces that enhance player experience and match your game style',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive game art solutions powered by cutting-edge AI tools and artistic expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-painted p-8 text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
