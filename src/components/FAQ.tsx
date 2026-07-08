"use client";

import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";
import { DEFAULT_OPERATOR } from "@/lib/operatorConfig";

const FAQ = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const operator = dynamic?.operator || DEFAULT_OPERATOR;
  const isFinish = dynamic?.templateType === "finish";

  const getFaqs = () => {
    // 곰팡이 해결형 (A그룹) 기본 FAQs
    const moldFaqs = [
      {
        question: "방문하지 않고 사진만으로도 상담과 견적이 가능한가요?",
        answer: "네, 가능합니다! 시공이 필요한 현장 부위의 사진을 찍어 보내주시면, 작업 전문가가 시공 가능 여부와 대략적인 견적을 신속하게 안내해 드립니다. 단, 공간이 넓거나 문제 원인이 불명확할 경우 방문을 통해 견적을 측정해드리는 과정이 필요할 수 있습니다.",
      },
      {
        question: "상담만 받아도 비용이 발생하나요?",
        answer: "아니요, 전화 및 카카오톡 상담은 100% 무료입니다. 고객님의 상황을 먼저 파악하고 최적의 솔루션을 상담해 드리는 것이 저희의 첫 번째 업무입니다. 부담 없이 문의하세요.",
      },
      {
        question: "시공 후에 하자가 발생하거나 재발하지는 않나요?",
        answer: `${operator.operatorName}은 시공 부위에 대해 확실한 무상 사후 관리(A/S)를 보장하며, 들뜸이나 균열이 일어나지 않도록 검증된 친환경 명품 자재만을 사용합니다. 안내해드리는 간단한 환기 및 건조 수칙만 지켜주시면 오래도록 새것처럼 쾌적하게 쓰실 수 있습니다.`,
      },
      {
        question: "집에 사람이 거주하고 있는 상태에서도 시공이 가능한가요?",
        answer: "네, 가능합니다! 집기류나 가구에 먼지나 페인트가 묻지 않도록 꼼꼼한 마스킹/보양 작업을 한 후 진행하므로 안심하셔도 됩니다. 상세 공정은 상담 및 방문진단 시 충분히 협의해 드립니다.",
      },
      {
        question: "전체 시공 시간은 얼마나 걸리나요?",
        answer: "현장에 필요한 작업과 시공 범위, 그리고 오염 정도에 따라 다르지만, 곰팡이제거 및 방지코팅의 경우 3-5시간 이내로 작업이 마무리 되는 경우가 많습니다. 자세한 시간은 상담 및 방문견적을 통해 더욱 정확하게 안내해 드립니다.",
      },
      {
        question: "서울 외에 경기, 인천 지역도 시공이 가능한가요?",
        answer: `네, ${operator.operatorName}은 서울 전 지역을 포함하여 경기, 인천 등 수도권 전 지역 출장 시공이 가능합니다. 거리에 상관없이 동일한 고품질 서비스를 제공해 드립니다.`,
      },
    ];

    // 마감/인테리어 개선형 (B그룹) 전용 FAQs (상품화 사양)
    const finishFaqs = [
      {
        question: "방문 없이 사진만으로 탄성코트 및 줄눈시공 견적을 알 수 있나요?",
        answer: "네, 가능합니다! 세탁실/베란다의 벽면 상태가 찍힌 사진이나 시공하고 싶으신 타일(욕실 바닥, 현관 등)의 전경 사진을 보내주시면, 축적된 데이터를 기반으로 정확도 90% 이상의 시공 견적과 최적의 색상을 빠르게 안내해 드립니다.",
      },
      {
        question: "줄눈시공과 탄성코트는 주로 어떤 공간에 시공하나요?",
        answer: "탄성코트는 주로 결로와 곰팡이가 생기기 쉬운 베란다, 다용도실, 대피공간, 세탁실 벽면에 시공하며, 줄눈시공은 습기로 인한 물때와 줄눈 변색이 심한 욕실 바닥/벽면, 현관, 베란다 타일 틈새, 주방 실리콘 젠다이 등에 주로 시공하여 쾌적함을 극대화합니다.",
      },
      {
        question: "기존에 이미 시공된 탄성코트나 줄눈 위에 재시공도 가능한가요?",
        answer: "네, 전적으로 가능합니다! 다만 기존에 잘못 시공되어 부푼 페인트막을 완벽히 긁어내거나, 이미 시공되어 있는 단단한 줄눈재를 전용 기구로 완전히 파내고 바닥을 평평하게 만드는 고난도의 밑작업이 선행되어야 하므로 상세한 사전 사진 진단이 필요합니다.",
      },
      {
        question: "탄성코트와 줄눈시공의 작업 소요 시간은 어떻게 되나요?",
        answer: "보통 30평형대 기준 하루(대략 4~7시간)면 모든 시공이 끝납니다. 시공 직후 탄성코트는 약 24시간, 줄눈시공은 12시간 정도 표면이 완전히 굳을 때까지 물 유입과 밟는 행위를 제한해 주시는 건조 양생 대기 기간이 필요합니다.",
      },
      {
        question: "입주 예정인데 입주 청소 전과 후 중 언제 시공하는 것이 가장 좋나요?",
        answer: "반드시 '입주 청소 전'에 시공하시는 것을 강력히 추천합니다. 시공 중 발생하는 미세한 먼지나 벽면 밑작업 잔해물들이 입주 청소 시 완벽하게 씻겨 나가기 때문에 훨씬 깨끗하고 완성도 높은 주거 상태로 입주하실 수 있습니다.",
      },
    ];

    if (!dynamic) return isFinish ? finishFaqs : moldFaqs;

    const svc = dynamic.service;
    const region = dynamic.region;

    // 만약 B그룹 템플릿일 경우, B그룹 FAQ를 우선 반환합니다.
    if (isFinish) {
      return [
        {
          question: `${region} 지역에서 베란다 탄성코트와 타일 줄눈시공을 동시에 진행할 수 있나요?`,
          answer: `네, 동시 시공 및 당일 연속 시공이 가능합니다! ${region} 고객님의 일정에 맞추어 보양과 밑작업을 순차적으로 진행하여 하루 만에 깔끔한 친환경 프리미엄 마감을 완성해 드립니다.`,
        },
        ...finishFaqs
      ];
    }

    // A그룹 내 서비스별 개별 분기
    if (svc.includes("곰팡이제거")) {
      return [
        {
          question: `사진만으로 ${region} 곰팡이제거 상담과 견적이 가능한가요?`,
          answer: `네, 가능합니다! 곰팡이가 발생한 현장 사진을 선명하게 찍어 보내주시면, 전문 상담사가 발생 원인 분석과 함께 대략적인 시공 견적을 빠르게 안내해 드립니다.`,
        },
        {
          question: `${region} 곰팡이제거 후 다시 생기지 않게 하려면 무엇을 확인해야 하나요?`,
          answer: `단순 제거제 사용은 임시방편입니다. 결로나 습기 발생 원인을 진단하고, 항균 코팅 및 단열 상태 점검 등 근본적인 재발 방지 처리를 함께 해주어야 곰팡이가 재발하지 않습니다.`,
        },
        ...moldFaqs.slice(2)
      ];
    }

    if (svc.includes("단열시공")) {
      return [
        {
          question: `결로 때문에 ${region} 단열시공이 필요한지 사진만으로 확인할 수 있나요?`,
          answer: `네, 파악이 가능합니다! 결로로 벽지가 젖었거나 물방울이 맺히는 현상, 혹은 모서리 곰팡이 사진을 보내주시면 상태를 분석하여 단열 보강이 필요한 수준인지 무상 진단해 드립니다.`,
        },
        {
          question: `${region} 단열시공을 진행하면 곰팡이 재발 방지에도 도움이 되나요?`,
          answer: `네, 근본적인 해결책이 됩니다! 실내외 온도 차이로 인해 이슬이 맺히는 결로를 고효율 단열재 밀착 시공으로 원천 차단하기 때문에, 결로와 곰팡이를 동시에 확실히 예방할 수 있습니다.`,
        },
        ...moldFaqs.slice(2)
      ];
    }

    if (svc.includes("결로방지") || svc.includes("페인트")) {
      return [
        {
          question: `${region} 결로방지 페인트만으로 해결 가능한 상태인지 확인할 수 있나요?`,
          answer: `네, 사진으로 1차 진단이 가능합니다! 벽면 안쪽의 누수가 아닌 단순 실내 온도차에 의한 결로 곰팡이인 경우, 친환경 결로방지 페인트 도장만으로도 훌륭한 예방 효과를 볼 수 있으며 시공 타당성을 분석해 드립니다.`,
        },
        {
          question: `곰팡이 제거 후 ${region} 결로방지 페인트를 함께 시공해야 하나요?`,
          answer: `네, 추천해 드립니다! 깊이 침투한 곰팡이 포자를 사멸시킨 뒤에 결로방지 페인트를 칠해주어야 칠이 들뜨거나 안쪽에서부터 다시 팡이가 피어오르는 현상을 확실하게 예방할 수 있습니다.`,
        },
        ...moldFaqs.slice(2)
      ];
    }

    // 기타 키워드 대응
    const displayService = svc === "기타" ? "현장 시공" : svc;
    return [
      {
        question: `사진만으로 ${region} ${displayService} 상담과 견적이 가능한가요?`,
        answer: `네, 가능합니다! 시공이 필요한 부위의 사진을 찍어 보내주시면 전문 엔지니어가 작업 난이도와 시공 범위를 분석하여 대략적인 견적과 일정을 신속하게 안내해 드립니다.`,
      },
      {
        question: `${region} ${displayService} 시공을 진행하면 곰팡이 및 결로 재발이 방지되나요?`,
        answer: `네, 그렇습니다! 표면적 청소에 그치지 않고, 현장의 근본 원인을 진단하여 공간 맞춤 보완 처리를 함께 진행하므로 쾌적한 주거 상태가 오랫동안 지속됩니다.`,
      },
      ...moldFaqs.slice(2)
    ];
  };

  const faqs = getFaqs();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            전문가에게 직접 듣는<br className="lg:hidden" /> <span className="text-primary-light">자주 묻는 질문</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base lg:text-lg font-medium">
            문의하시기 전, 가장 많이 궁금해하시는 내용들을 정리했습니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen ? "border-primary-blue bg-white shadow-xl" : "border-gray-100 bg-gray-50"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm font-black ${isOpen ? "text-primary-blue" : "text-gray-300"}`}>
                      Q{index + 1}
                    </span>
                    <span className={`text-base lg:text-lg font-bold tracking-tight ${isOpen ? "text-gray-900" : "text-gray-600"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-blue" : "text-gray-400"}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="p-6 lg:p-8 pt-0 text-gray-500 leading-relaxed text-[14px] lg:text-[15px] font-medium break-keep [word-break:keep-all]">
                    <p className="pl-8 lg:pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;
