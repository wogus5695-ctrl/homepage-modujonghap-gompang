import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AreaConfig {
  name: string;
  dongs: string[];
}

const areaData: AreaConfig[] = [
  {
    name: "강서구",
    dongs: ["염창동", "등촌동", "화곡본동", "화곡동", "우장산동", "가양동", "발산동", "공항동", "방화동"],
  },
  {
    name: "마포구",
    dongs: ["공덕동", "아현동", "도화동", "용강동", "대흥동", "염리동", "신수동", "서강동", "서교동", "합정동", "망원동", "연남동", "성산동", "상암동"],
  },
  {
    name: "은평구",
    dongs: ["불광동", "갈현동", "구산동", "대조동", "응암동", "역촌동", "신사동", "증산동", "수색동", "진관동"],
  },
  {
    name: "용산구",
    dongs: ["후암동", "용산동", "남영동", "청파동", "원효로", "효창동", "용문동", "한강로", "이촌동", "이태원동", "한남동", "서빙고동", "보광동"],
  },
  {
    name: "양천구",
    dongs: ["목동", "신월동", "신정동"],
  },
  {
    name: "노원구",
    dongs: ["월계동", "공릉동", "하계동", "중계동", "상계동"],
  },
  {
    name: "중랑구",
    dongs: ["면목동", "상봉동", "중화동", "묵동", "망우동", "신내동"],
  },
  {
    name: "도봉구",
    dongs: ["쌍문동", "방학동", "창동", "도봉동"],
  },
  {
    name: "성북구",
    dongs: ["성북동", "삼선동", "동소문동", "돈암동", "안암동", "보문동", "정릉동", "길음동", "종암동", "월곡동", "장위동", "석관동"],
  },
  {
    name: "중구",
    dongs: ["소공동", "회현동", "명동", "필동", "장충동", "광희동", "을지로동", "신당동", "다산동", "약수동", "청구동", "동화동", "황학동", "중림동"],
  },
  {
    name: "김포시",
    dongs: ["사우동", "풍무동", "걸포동", "북변동", "운양동", "장기동", "마산동", "구래동", "고촌읍", "양촌읍", "통진읍"],
  },
  {
    name: "부평구",
    dongs: ["부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"],
  },
  {
    name: "계양구",
    dongs: ["효성동", "계산동", "작전동", "서운동", "계양동"],
  },
  {
    name: "인천동구",
    dongs: ["만석동", "화수동", "송현동", "송림동", "금창동"],
  },
];

const services = ["곰팡이제거", "단열시공", "탄성코트"];

export default function SitemapSeoul() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-32 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">
              지역별 서비스 안내
            </h1>
            <p className="text-lg text-gray-500 font-medium tracking-tight">
              수도권 전 지역 곰팡이제거, 단열시공, 탄성코트 관련 상세 안내를 확인하실 수 있습니다.<br />
              원하시는 시공 지역과 서비스를 선택하여 확인해 주세요.
            </p>
          </div>

          <div className="space-y-24">
            {areaData.map((area) => {
              // 구/시 이름에서 '구' 또는 '시' 제거 (단, '중구'나 '동구'처럼 두 글자인 경우는 유지하거나 정책에 따름)
              // 여기서는 사용자의 예시(마포-곰팡이제거)를 따라 구/시 글자 제거
              const baseName = area.name.length > 2 ? area.name.replace(/[구시]$/, "") : area.name;
              
              return (
                <div key={area.name} className="space-y-8">
                  <h3 className="text-2xl font-black text-gray-900 border-l-4 border-primary-blue pl-6 py-1">
                    {area.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {/* 1단계: 구/시 단위 키워드 */}
                    {services.map((service) => (
                      <Link
                        key={`${baseName}-${service}`}
                        href={`/?k=${encodeURIComponent(`${baseName}-${service}`)}`}
                        className="flex items-center justify-center px-4 py-5 bg-blue-50/30 border border-blue-100 rounded-lg text-[13px] font-black text-blue-700 hover:bg-primary-blue hover:text-white hover:border-primary-blue hover:shadow-md transition-all duration-200 text-center"
                      >
                        {baseName}-{service}
                      </Link>
                    ))}

                    {/* 2단계: 동 단위 키워드 */}
                    {area.dongs.map((dong) => 
                      services.map((service) => (
                        <Link
                          key={`${dong}-${service}`}
                          href={`/?k=${encodeURIComponent(`${dong}-${service}`)}`}
                          className="flex items-center justify-center px-4 py-5 bg-white border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:border-primary-blue hover:text-primary-blue hover:shadow-md transition-all duration-200 text-center"
                        >
                          {dong}-{service}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
