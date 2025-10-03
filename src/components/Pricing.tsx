import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      title: "グループレッスン",
      subtitle: "最大4名",
      prices: [
        { label: "1回", price: "3,000円" },
        { label: "回数券（5回）", price: "13,500円", note: "@2,700円" }
      ]
    },
    {
      title: "プライベートレッスン",
      subtitle: "マンツーマン",
      prices: [
        { label: "1回", price: "6,000円" },
        { label: "回数券（5回）", price: "27,000円" }
      ],
      featured: true
    },
    {
      title: "月額プラン",
      subtitle: "通いやすさ重視",
      prices: [
        { label: "月4回コース", price: "10,000円" },
        { label: "通い放題コース", price: "18,000円" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              レッスンメニュー・料金
            </h2>
            <p className="text-lg text-muted-foreground">
              ライフスタイルに合わせたプランをご用意
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 space-y-6 transition-all duration-300 ${
                  plan.featured 
                    ? 'border-primary border-2 shadow-[var(--shadow-elegant)] scale-105' 
                    : 'hover:shadow-[var(--shadow-card)]'
                }`}
              >
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {plan.prices.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                      <div className="pl-7">
                        <p className="text-2xl font-bold text-primary">{item.price}</p>
                        {item.note && (
                          <p className="text-xs text-muted-foreground">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
