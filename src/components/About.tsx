import { User, Briefcase, Award, Wrench } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const About = () => {
  const stats = [
    { icon: User, label: 'Job Title', value: 'AI Game Artist' },
    { icon: Briefcase, label: 'Experience', value: '2+ Years in Mobile Gaming' },
    { icon: Award, label: 'Skills', value: 'Prompting, Concept Development, Style Consistency' },
    { icon: Wrench, label: 'Tools', value: 'Midjourney, Leonardo AI, ComfyUI, Photoshop' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Praveen Mathiazhagan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary">
                Summary
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I specialize in blending AI-assisted creativity with classic art principles to create immersive environments, props, characters, and UI for games. With 2+ years of experience in the mobile gaming industry, I bring concepts to life with style consistency and artistic vision.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="card-painted p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-semibold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
