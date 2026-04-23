"use client";

import React, { useState, useRef } from "react";

const CaseCard = ({ id, before, after }: { id: string; before: string; after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div className="group relative">
      <div 
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        className="relative aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-ew-resize select-none border border-gray-100"
      >
        {/* After Image (Background) */}
        <img 
          src={after} 
          alt={`Case ${id} After`}
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
        />
        
        {/* Before Image (Clipped Layer) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={before} 
            alt={`Case ${id} Before`}
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
        </div>

        {/* Slider Handle Line */}
        <div 
          className="absolute inset-y-0 z-30 w-[2px] bg-white/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center translate-x-[-50%]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-[6px] border-primary-blue/20 backdrop-blur-md group-active:scale-90 transition-transform">
            <div className="flex gap-1.5">
              <div className="w-1 h-4 bg-primary-blue rounded-full opacity-80" />
              <div className="w-1 h-4 bg-primary-blue rounded-full opacity-80" />
            </div>
          </div>
          
          {/* Helper Label */}
          <div className="absolute top-1/2 -translate-y-1/2 left-10 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            드래그하여 비교하기
          </div>
        </div>

        {/* Labels & Badges */}
        <div className="absolute top-8 left-8 z-40 flex flex-col gap-2">
           <span className="bg-primary-blue text-white text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest shadow-xl border border-white/20">
            COMPLETED
          </span>
        </div>
        
        <div className="absolute bottom-8 left-8 z-40 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-white/60 font-medium uppercase tracking-tight">Status</span>
            <span className="bg-red-500/90 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-lg font-black uppercase tracking-wider shadow-lg">
              Before
            </span>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 z-40 pointer-events-none text-right">
          <div className="flex flex-col gap-1 items-end">
            <span className="text-[10px] text-white/60 font-medium uppercase tracking-tight">Result</span>
            <span className="bg-primary-blue/90 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-lg font-black uppercase tracking-wider shadow-lg">
              After
            </span>
          </div>
        </div>
        
        {/* Overlay Decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
    </div>
  );
};

const Cases = () => {
  const caseList = [
    { id: "01", before: "/images/cases/01전.JPG", after: "/images/cases/01후.JPG" },
    { id: "02", before: "/images/cases/02전.JPG", after: "/images/cases/02후.JPG" },
    { id: "03", before: "/images/cases/03전.JPG", after: "/images/cases/03후.JPG" },
    { id: "04", before: "/images/cases/04전.JPG", after: "/images/cases/04후.JPG" },
    { id: "05", before: "/images/cases/05전.JPG", after: "/images/cases/05후.JPG" },
    { id: "06", before: "/images/cases/06전.JPG", after: "/images/cases/06후.JPG" },
  ];

  return (
    <section id="cases" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-20">
          <div className="text-secondary-blue font-black mb-4 uppercase tracking-[0.4em] text-xs opacity-50">
            Success Cases
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight relative">
            <span className="relative z-10">수많은 현장이 증명하는</span><br />
            <span className="text-primary-blue drop-shadow-sm">모두종합환경</span>의 기술력
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary-blue/20 rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {caseList.map((item, index) => (
            <CaseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
