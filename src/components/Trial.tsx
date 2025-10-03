import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Coffee, MessageCircle, CheckCircle } from "lucide-react";

const Trial = () => {
  const details = [
    { icon: CheckCircle, label: "初回体験料金", value: "1,500円" },
    { icon: Clock, label: "所要時間", value: "60分" },
    { icon: Coffee, label: "持ち物", value: "動きやすい服装・タオル・飲み物" },
    { icon: MessageCircle, label: "特典", value: "レッスン後は無料カウンセリング付き" }
  ];

  return (
    <section id="trial" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              初回体験レッスンのご案内
            </h2>
            <p className="text-lg text-muted-foreground">
              まずは気軽に体験してみませんか？
            </p>
          </div>

          {/* Details Card */}
          <Card className="p-8 md:p-12 bg-card shadow-[var(--shadow-card)]">
            <div className="grid md:grid-cols-2 gap-6">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <detail.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                    <p className="text-lg font-semibold text-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="hero" size="lg" className="px-10">
                👉 体験レッスンを予約する
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Trial;
