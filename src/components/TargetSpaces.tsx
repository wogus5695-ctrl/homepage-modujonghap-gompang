"use client";

import React from "react";
import { Check, Info } from "lucide-react";

const TargetSpaces = () => {
  const spaces = [
    {
      title: "베란다 / 세탁실 / 다용도실",
      issue: "외부 차가운 공기와 면하는 공간으로 결로가 잦고 습기가 머물러 곰팡이가 가장 잘 생기는 구간입니다.",
      points: ["벽면 페인트 들뜸", "꿉꿉한 세탁물 냄새", "창틀 주변 검은 흔적"],
    },
    {
      title: "창가 모서리 / 외벽 면한 벽면",
      issue: "단열재가 끊기거나 약한 모서리 부분은 온도 차에 의해 결로가 집중적으로 발생하여 벽지를 손상시킵니다.",
      points: ["벽지 젖음 및 변색", "창틀 누수 가능성", "차갑게 느껴지는 벽면"],
    },
    {
      title: "붙박이장 / 가구 뒤 / 침대 뒤",
      issue: "공기 순환이 되지 않는 가구 뒷면은 곰팡이가 서식하기 가장 좋은 환경입니다. 발견했을 땐 이미 진행된 경우가 많습니다.",
      points: ["가구 뒷면 변색", "의류/이불 곰팡이", "원인 모를 쾌쾌한 냄새"],
    },
    {
      title: "욕실 / 화장실 인접 벽면",
      issue: "욕실의 습기가 방으로 넘어오거나 방수층 문제로 인해 벽 하단부에 곰팡이가 번지기 쉽습니다.",
      points: ["걸레받이 주변 변색", "벽지 하단 들뜸", "화장실 입구 쪽 오염"],
    },
    {
      title: "천장 / 모서리 상단",
      issue: "윗집 누수나 환기 부족으로 천장 끝부분에 곰팡이가 발생하며, 포자가 공중에 떠다녀 호흡기에 치명적입니다.",
      points: ["천장 벽지 얼룩", "특유의 곰팡이 냄새", "상단 모서리 검은 반점"],
    },
    {
      title: "현관 주변 / 복도 벽면",
      issue: "온도 차가 크고 외부 먼지와 습기가 만나는 현관은 초기 관리가 되지 않으면 벽면 전체로 번질 수 있습니다.",
      points: ["현관 천장 오염", "신발장 주변 습기", "입구 쪽 곰팡이"],
    },
  ];

  return (
    <section id="target" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            이런 곳에 곰팡이가 보인다면<br className="md:hidden" /> <span className="text-primary-light">즉각적인 조치</span>가 필요합니다
          </h2>
          <div className="w-20 h-1.5 bg-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            방치할수록 시공 범위가 넓어지고 비용은 커집니다. 우리 집 상태를 체크해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {spaces.map((space, index) => (
            <div 
              key={index}
              className="group border-b border-gray-100 pb-10 last:border-0 md:border-0"
            >
              <div className="flex items-center space-x-3 text-gray-900 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-500">
                  <span className="text-sm font-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{space.title}</h3>
              </div>
              <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                {space.issue}
              </p>
              <ul className="space-y-4">
                {space.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-center text-gray-800 text-[13px] font-semibold">
                    <Check size={14} className="text-primary-blue mr-3 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSpaces;
