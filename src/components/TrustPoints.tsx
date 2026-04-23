import Image from "next/image";
import { Search, ShieldCheck, Wrench, ClipboardCheck } from "lucide-react";

const TrustPoints = () => {
  const points = [
    {
      image: "/images/trust/trust-1.jpg",
      icon: <Search size={20} />,
      title: "정밀한 원인 진단",
      description: "단순히 지우는 것은 임시방편입니다. 곰팡이가 생기는 근본 원인(결로, 습도, 누수)을 먼저 파악합니다.",
    },
    {
      image: "/images/trust/trust-2.jpg",
      icon: <ShieldCheck size={20} />,
      title: "재발 방지 시스템",
      description: "특수 코팅과 단열 보완 시공을 통해 곰팡이가 다시는 자랄 수 없는 환경을 만드는 데 집중합니다.",
      position: "object-top",
    },
    {
      image: "/images/trust/trust-3.jpg",
      icon: <Wrench size={20} />,
      title: "현장 맞춤 시공",
      description: "다양한 곰팡이 발생 원인, 그렇기 때문에 무조건 비싼 시공이 정답은 아닙니다. 현장에 맞는 시공을 진단해드립니다.",
      position: "object-top",
    },
    {
      image: "/images/trust/trust-4.jpg",
      icon: <ClipboardCheck size={20} />,
      title: "투명한 책임 시공",
      description: "모든 공정은 사진으로 기록하며, 상담부터 사후 관리까지 현장 작업자가 직접 책임지고 관리합니다.",
    },
  ];

  return (
    <section id="trust" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            모두종합환경이<br className="md:hidden" /> <span className="text-primary-blue">특별한 4가지 이유</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-500 text-lg font-medium">
            단순 청소 업체와 비교를 거부합니다. 우리는 고객님의 주거 환경을 연구합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary-blue/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* 이미지 영역 */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className={`object-cover ${point.position || "object-center"} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* 컨텐츠 영역 */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
