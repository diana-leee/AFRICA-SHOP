
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 african-pattern opacity-30"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>

      <div className="container relative z-10 text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-primary">Africa</span>
          <span className="text-accent gold-shimmer bg-clip-text text-transparent">Shop</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez l'authenticité africaine : vêtements traditionnels, artisanat unique et cosmétiques naturels
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" className="text-lg px-8 py-6 african-gradient border-0 hover:opacity-90 transition-opacity">
            Explorer nos produits
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Devenir vendeur
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Plus de 1000 artisans africains • 10 000 produits authentiques
          </p>
          <ArrowDown className="h-6 w-6 mx-auto animate-bounce text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
