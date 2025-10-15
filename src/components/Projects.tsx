import projectHiddenObject from '@/assets/project-hidden-object.jpg';
import projectLudo from '@/assets/project-ludo.jpg';
import projectHfg from '@/assets/project-hfg.jpg';

export const Projects = () => {
  const projects = [
    {
      title: 'Spot Hidden Objects',
      type: 'Freelance',
      image: projectHiddenObject,
      description: 'Extensive hidden object game with 1000+ levels of unique, hand-crafted assets',
    },
    {
      title: 'Ludo Game UI',
      type: 'Freelance',
      image: projectLudo,
      description: 'Vibrant and engaging UI design for a modern take on the classic Ludo game',
    },
    {
      title: 'Hidden Object Games',
      type: 'HFG Entertainments',
      image: projectHfg,
      description: 'Professional game art for multiple hidden object titles with rich environments',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-painted group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
