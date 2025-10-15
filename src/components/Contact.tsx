import { Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Let's Work <span className="text-gradient glow-text">Together</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Have a game project in mind? I'd love to help bring your vision to life with AI-powered game art. Get in touch to discuss your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all w-full sm:w-auto"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                onClick={() => window.open('https://www.artstation.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View ArtStation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-4 mt-24">
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Praveen Mathiazhagan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
