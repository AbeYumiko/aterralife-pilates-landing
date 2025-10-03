import { Card } from "@/components/ui/card";
import { Award, Heart } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";

const Instructor = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              インストラクター紹介
            </h2>
          </div>

          {/* Instructor Card */}
          <Card className="overflow-hidden shadow-[var(--shadow-card)]">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative h-80 md:h-auto">
                <img 
                  src={instructorImage} 
                  alt="代表インストラクター 阿部 優美子"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 space-y-6 flex flex-col justify-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    阿部 優美子
                  </h3>
                  <p className="text-muted-foreground">代表インストラクター</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">資格</p>
                      <p className="text-sm text-muted-foreground">
                        ピラティス指導者資格<br />
                        （Balanced Body認定）
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">経歴</p>
                      <p className="text-sm text-muted-foreground">
                        スポーツクラブで10年以上の指導経験
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    「一人ひとりの体に合わせて、無理なく楽しく続けられるレッスンを大切にしています。」
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
