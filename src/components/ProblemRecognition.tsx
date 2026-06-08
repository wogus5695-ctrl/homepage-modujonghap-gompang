"use client";

import React from "react";
import Image from "next/image";
import { Biohazard, Home, Eye, Phone } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";

const ProblemRecognition = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-900 overflow-hidden text-center md:text-left">
      {/* 배경 이미지 (오버레이 포함) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/mold-before.jpg"
          alt="곰팡이 현장"
          fill
          className="object-cover opacity-30 scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="text-primary-blue font-black mb-4 lg:mb-6 uppercase tracking-widest text-sm text-center md:text-left">
            Analysis & Risk
          </div>
          
          {/* PC 타이틀 */}
          <h2 className="hidden lg:block text-4xl md:text-6xl font-black !text-primary-blue mb-10 leading-tight tracking-tighter text-left">
            곰팡이, 단순히 보기에만<br />
            흉한 것이 아닙니다.
          </h2>

          {/* 모바일 타이틀 */}
          <h2 className="block lg:hidden text-3xl font-black !text-primary-blue mb-6 leading-tight tracking-tight text-center break-keep [word-break:keep-all]">
            곰팡이 방치,<br />
            손해가 커질 수 있습니다
          </h2>
          
          {/* PC 설명 본문 */}
          <div className="hidden lg:block space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-medium text-left">
            <p>
              {dynamic ? (
                <>반복해서 발생하는 <span>{dynamic.region} {dynamic.service}</span> 관련 문제, 방치하면 손해만 커집니다.</>
              ) : (
                <>반복해서 생기는 곰팡이, 방치하면 손해만 커집니다.</>
              )}
              <br />
              우리 가족의 피부와 호흡기, 부동산 시세, 미관 등
            </p>
            <p>
              시중에 판매하는 세제 겉면만 닦아내는 것은 임시방편 일 뿐,<br />
              <span className="text-white underline decoration-primary-blue decoration-2 underline-offset-8 font-bold">전문가가 원인을 분석하고, 근본적인 문제를 해결</span>해야<br />
              곰팡이는 다시 돌아오지 못합니다.
            </p>
          </div>

          {/* 모바일 설명 본문 (2문장 이내 축약) */}
          <div className="block lg:hidden text-[14px] sm:text-base text-gray-300 leading-relaxed font-medium text-center max-w-md mx-auto mb-8 break-keep [word-break:keep-all]">
            <p>
              곰팡이는 미관 문제를 넘어 건강, 벽면 손상, 자산 가치에 큰 영향을 줄 수 있습니다. 
              {dynamic ? (
                <> {dynamic.region} 현장처럼 문제가 반복된다면 단순 제거보다 정확한 원인 진단이 우선되어야 합니다.</>
              ) : (
                <> 문제가 계속해서 반복된다면 단순히 닦아내는 것보다 원인 진단이 먼저입니다.</>
              )}
            </p>
          </div>

          {/* PC 위험 요소 카드 그리드 (기존 유지) */}
          <div className="hidden lg:grid grid-cols-3 gap-16 border-t border-white/10 pt-16 mt-24">
            <div className="group flex flex-col items-center">
              <p className="text-primary-blue font-black text-2xl mb-4 italic">01</p>
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Biohazard size={56} strokeWidth={1.5} />
              </div>
              <h3 className="!text-white font-bold text-xl mb-3">건강 위협</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">포자균에 의한 비염, 천식, 아토피 유발</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <p className="text-primary-blue font-black text-2xl mb-4 italic">02</p>
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home size={56} strokeWidth={1.5} />
              </div>
              <h3 className="!text-white font-bold text-xl mb-3">자산 가치 하락</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">건물 부식 및 매매/임대 시 감가 요인</p>
            </div>

            <div className="group flex flex-col items-center">
              <p className="text-primary-blue font-black text-2xl mb-4 italic">03</p>
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye size={56} strokeWidth={1.5} />
              </div>
              <h3 className="!text-white font-bold text-xl mb-3">미관 저해</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">미관을 해치는 시각적 불쾌함</p>
            </div>
          </div>

          {/* 모바일 위험 요소 미니카드 형태 (대폭 압축) */}
          <div className="block lg:hidden grid grid-cols-3 gap-2 border-t border-white/10 pt-6 max-w-md mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center">
              <div className="text-primary-blue mb-2">
                <Biohazard size={24} strokeWidth={1.5} />
              </div>
              <h3 className="!text-white font-black text-[12px] mb-1">건강 위협</h3>
              <p className="text-[10px] text-gray-400">비염, 아토피</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center">
              <div className="text-primary-blue mb-2">
                <Home size={24} strokeWidth={1.5} />
              </div>
              <h3 className="!text-white font-black text-[12px] mb-1">자산 감가</h3>
              <p className="text-[10px] text-gray-400">건물 부식</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center">
              <div className="text-primary-blue mb-2">
                <Eye size={24} strokeWidth={1.5} />
              </div>
              <h3 className="!text-white font-black text-[12px] mb-1">미관 저해</h3>
              <p className="text-[10px] text-gray-400">시각적 불쾌</p>
            </div>
          </div>

          {/* 모바일 하단 CTA 추가 */}
          <div className="block lg:hidden mt-8 max-w-md mx-auto">
            <a
              href="#contact"
              className="w-full h-12 flex items-center justify-center space-x-2 bg-primary-blue text-white rounded-xl font-bold text-[15px] shadow-lg shadow-primary-blue/20 hover:bg-blue-700 transition-colors"
            >
              <span>우리집 곰팡이 원인 확인하기</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemRecognition;
