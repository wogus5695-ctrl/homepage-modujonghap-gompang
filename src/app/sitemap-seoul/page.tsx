import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const regions = [
  "강서구",
  "염창동",
  "등촌동",
  "화곡본동",
  "화곡동",
  "우장산동",
  "가양동",
  "발산동",
  "공항동",
  "방화동",
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
              사이트맵
            </h1>
            <p className="text-lg text-gray-500 font-medium tracking-tight">
              서울 지역 곰팡이제거, 단열시공, 탄성코트 관련 페이지를 확인하실 수 있습니다.<br />
              원하시는 시공 지역과 서비스를 선택하여 확인해 주세요.
            </p>
          </div>

          <div className="space-y-16">
            {/* 강서구 섹션 */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-gray-900 border-l-4 border-primary-blue pl-6 py-1">
                강서구
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {regions.map((region) => 
                  services.map((service) => (
                    <Link
                      key={`${region}-${service}`}
                      href={`/?k=${region}-${service}`}
                      className="flex items-center justify-center px-4 py-5 bg-white border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:border-primary-blue hover:text-primary-blue hover:shadow-md transition-all duration-200 text-center"
                    >
                      {region}-{service}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
