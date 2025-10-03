import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "30代女性",
      comment: "肩こりが軽くなり、デスクワークが楽になりました",
      age: "会社員"
    },
    {
      name: "40代男性",
      comment: "ゴルフのスイングが安定してスコアも改善",
      age: "自営業"
    },
    {
      name: "20代女性",
      comment: "骨盤ケアで体型も気持ちも前向きに",
      age: "産後ママ"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              お客様の声
            </h2>
            <p className="text-lg text-muted-foreground">
              実際に通われている方々の感想
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 space-y-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card"
              >
                <Quote className="w-10 h-10 text-primary/30" />
                
                <p className="text-lg text-foreground leading-relaxed">
                  「{testimonial.comment}」
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
