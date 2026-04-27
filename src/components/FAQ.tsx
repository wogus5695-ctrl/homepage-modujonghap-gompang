"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";

const FAQ = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "방문하지 않고 사진만으로도 상담과 견적이 가능한가요?",
      answer: "네, 가능합니다! 곰팡이가 발생한 부위와 주변 공간이 잘 보이게 사진을 찍어 전달주시면, 작업 전문가가 대략전인 견적을 안내드릴 수 있습니다. 단, 공간이 넓거나 문제 원인이 불명확할 경우 방문을 통해 견적을 측정해드리는 과정이 필요할 수 있습니다.",
    },
    {
      question: "상담만 받아도 비용이 발생하나요?",
      answer: "아니요, 전화 및 카카오톡 상담은 100% 무료입니다. 고객님의 상황을 먼저 파악하고 최적의 솔루션을 상담해 드리는 것이 저희의 첫 번째 업무입니다. 부담 없이 문의하세요.",
    },
    {
      question: "시공 후에 곰팡이가 다시 생기지는 않나요?",
      answer: "모두종합환경은 눈에 보이는 곰팡이만 제거하는 것이 아니라, 결로나 침수 등 근본 원인을 진단하여 재발 방지 코팅 및 보완 시공을 진행합니다. 시공 후 정해진 관리 요령만 지켜주시면 반영구적으로 쾌적한 환경을 유지하실 수 있습니다.",
    },
    {
      question: "집에 사람이 거주하고 있는 상태에서도 시공이 가능한가요?",
      answer: "작업의 종류와 시공 범위, 오염 정도에 따라 다를 수 있습니다. 이 점은 문의/방문 견적 과정에서 더욱 명확한 설명을 드릴 수 있습니다.",
    },
    {
      question: "전체 시공 시간은 얼마나 걸리나요?",
      answer: "현장에 필요한 작업과 시공 범위, 그리고 오염 정도에 따라 다르지만, 곰팡이제거 및 방지코팅의 경우 3-5시간 이내로 작업이 마무리 되는 경우가 많습니다. 자세한 시간은 상담 및 방문견적을 통해 더욱 정확하게 안내해 드립니다.",
    },
    {
      question: "서울 외에 경기, 인천 지역도 시공이 가능한가요?",
      answer: "네, 모두종합환경은 서울 전 지역을 포함하여 경기, 인천 등 수도권 전 지역 출장 시공이 가능합니다. 거리에 상관없이 동일한 고품질 서비스를 제공해 드립니다.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            전문가에게 직접 듣는<br className="md:hidden" /> <span className="text-primary-light">자주 묻는 질문</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            {dynamic ? (
              `${dynamic.region} ${dynamic.service} 문의하시기 전, 가장 많이 궁금해하시는 내용들을 정리했습니다.`
            ) : (
              "문의하시기 전, 가장 많이 궁금해하시는 내용들을 정리했습니다."
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === index ? "border-primary-blue bg-white shadow-xl" : "border-gray-100 bg-gray-50"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-sm font-black ${openIndex === index ? "text-primary-blue" : "text-gray-300"}`}>
                    Q{index + 1}
                  </span>
                  <span className={`text-lg font-bold tracking-tight ${openIndex === index ? "text-gray-900" : "text-gray-600"}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-45 text-primary-blue" : "text-gray-400"}`}>
                  <Plus size={20} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 pt-0 text-gray-500 leading-relaxed text-[15px] font-medium">
                  <p className="pl-10">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
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
