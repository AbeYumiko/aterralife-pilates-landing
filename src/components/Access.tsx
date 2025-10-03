import { Card } from "@/components/ui/card";
import { MapPin, Train, Car, Clock, Calendar } from "lucide-react";

const Access = () => {
  const accessInfo = [
    {
      icon: MapPin,
      title: "所在地",
      content: "〒371-0023\n群馬県前橋市本町\n（JR前橋駅南口 徒歩圏内）"
    },
    {
      icon: Train,
      title: "電車でお越しの方",
      content: "JR前橋駅から徒歩約8分"
    },
    {
      icon: Car,
      title: "お車でお越しの方",
      content: "近隣にコインパーキングあり"
    }
  ];

  const businessHours = [
    { day: "平日", hours: "10:00〜20:00" },
    { day: "土日祝", hours: "9:00〜18:00" },
    { day: "定休日", hours: "火曜日" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              アクセス
            </h2>
            <p className="text-lg text-muted-foreground">
              JR前橋駅から徒歩圏内の好立地
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Access Info */}
            <div className="space-y-6">
              {accessInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="p-8 h-fit bg-accent/10">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">営業時間</h3>
              </div>

              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <p>完全予約制となっております</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
