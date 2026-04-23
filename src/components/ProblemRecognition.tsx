"use client";

import React from "react";
import Image from "next/image";
import { Biohazard, Home, Eye } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";

const ProblemRecognition = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden text-center md:text-left">
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
          <div className="text-primary-blue font-black mb-6 uppercase tracking-widest text-sm text-center md:text-left">
            Analysis & Risk
          </div>
          <h2 className="text-4xl md:text-6xl font-black !text-primary-blue mb-10 leading-tight tracking-tighter text-center md:text-left">
            {dynamic ? (
              <>
                {dynamic.region} {dynamic.service} 고충,<br />
                단순히 보기 흉한 게 아님을 아셔야 합니다.
              </>
            ) : (
              <>
                곰팡이, 단순히 보기에만<br />
                흉한 것이 아닙니다.
              </>
            )}
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-medium text-center md:text-left">
            <p>
              {dynamic ? (
                <>반복해서 생기는 {dynamic.service}, 방치하면 손해만 커집니다.<br />가족의 건강과 소중한 공간을 위해 빠르게 해결해야 합니다.</>
              ) : (
                <>반복해서 생기는 곰팡이, 방치하면 손해만 커집니다.<br />우리 가족의 피부와 호흡기, 부동산 시세, 미관 등</>
              )}
            </p>
            <p>
              {dynamic ? (
                dynamic.expertText
              ) : (
                <>
                  시중에 판매하는 세제 겉면만 닦아내는 것은 임시방편 일 뿐,<br />
                  <span className="text-white underline decoration-primary-blue decoration-2 underline-offset-8 font-bold">전문가가 원인을 분석하고, 근본적인 문제를 해결</span>해야<br />
                  곰팡이는 다시 돌아오지 못합니다.
                </>
              )}
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
            <div className="group flex flex-col items-center">
              <p className="text-primary-blue font-black text-2xl mb-4 italic">01</p>
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Biohazard size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">건강 위협</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">포자균에 의한 비염, 천식, 아토피 유발</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <p className="text-primary-blue font-black text-2xl mb-4 italic">02</p>
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">자산 가치 하락</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">건물 부식 및 매매/임대 시 감가 요인</p>
            </div>

            <div className="group flex flex-col items-center">
              <p className="text-primary-blue font-black text-2xl mb-4 italic">03</p>
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">미관 저해</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">미관을 해치는 시각적 불쾌함</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemRecognition;
