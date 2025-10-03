import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTrial = () => {
    document.getElementById('trial')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="py-16 text-center space-y-6 border-b border-primary-foreground/10">
          <h2 className="text-3xl md:text-4xl font-bold">
            まずは体験レッスンから始めませんか？
          </h2>
          <p className="text-primary-foreground/90 text-lg">
            あなたの体と心を整える第一歩をサポートします
          </p>
          <Button 
            variant="hero"
            size="lg"
            onClick={scrollToTrial}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-2xl"
          >
            👉 体験レッスンを予約する
          </Button>
        </div>

        {/* Footer Content */}
        <div className="py-12 grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Aterra Pilates</h3>
            <p className="text-primary-foreground/80 text-sm">
              大地に根ざすように、心と体を整える<br />
              前橋市のピラティススタジオ
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:text-right">
            <p className="font-semibold">Follow Us</p>
            <div className="flex space-x-4 md:justify-end">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LINE公式"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Aterra Pilates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
