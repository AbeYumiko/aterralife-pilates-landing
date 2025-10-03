import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pilates.jpg";

const Hero = () => {
  const scrollToTrial = () => {
    document.getElementById('trial')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            大地に根ざすように、<br />心と体を整えるピラティス
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-2xl mx-auto">
            初心者から経験者まで、少人数制で安心して学べる<br className="hidden md:block" />
            前橋市のピラティススタジオ
          </p>

          <div className="pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToTrial}
              className="px-12 py-7 text-lg bg-card text-primary hover:bg-card/95 hover:text-primary shadow-2xl"
            >
              👉 体験レッスンを予約する
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
