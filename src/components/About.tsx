import { Users, Dumbbell, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import studioInterior from "@/assets/studio-interior.jpg";
import studioCafe from "@/assets/studio-cafe.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "最大4名の少人数制クラス",
      description: "一人ひとりに目が届く丁寧な指導"
    },
    {
      icon: Dumbbell,
      title: "マット＆マシンピラティス対応",
      description: "多様なニーズに応える設備"
    },
    {
      icon: Heart,
      title: "女性インストラクターによる丁寧な指導",
      description: "安心して学べる環境"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Aterra Pilates について
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">
                <span className="font-semibold text-primary">"terra＝大地"</span> の名のとおり、根本から体を整えることを大切にしています。
              </p>
              <p className="mb-4">
                忙しい日々の中で乱れがちな呼吸や姿勢を、少人数制クラスで丁寧にサポート。
              </p>
              <p className="font-medium text-foreground">
                「自分の軸を取り戻す」ための空間をご提供します。
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center space-y-4 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50 bg-card"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Studio Images */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={studioInterior} 
                alt="スタジオ内部 - ピラティスマシン" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={studioCafe} 
                alt="スタジオカフェスペース" 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
