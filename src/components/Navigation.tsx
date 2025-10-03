import logo from "@/assets/logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Aterra Pilates" className="h-12 w-auto" />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              スタジオ紹介
            </button>
            <button 
              onClick={() => scrollToSection('trial')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              体験レッスン
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              料金
            </button>
            <button 
              onClick={() => scrollToSection('access')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              アクセス
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
