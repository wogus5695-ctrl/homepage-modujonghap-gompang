import React from "react";
import Image from "next/image";
import { MessageSquareText, Camera, FileText, SprayCan, Paintbrush, House, Layers, CheckCircle } from "lucide-react";

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            모두종합환경의<br className="md:hidden" /> <span className="text-primary-blue">체계적인 시공 프로세스</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 text-lg font-medium">
            문의부터 사후 관리까지, 모든 과정을 투명하고 정직하게 진행합니다.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Level 1-3: Vertical Flow */}
          <div className="flex flex-col items-center">
            {/* Step 1 */}
            <ProcessBox 
              icon={<MessageSquareText size={28} />} 
              title="무료 상담 및 접수" 
            />
            
            <ConnectorLine />

            {/* Step 2 */}
            <ProcessBox 
              icon={<Camera size={28} />} 
              title="사진 및 현장 방문 진단" 
            />

            <ConnectorLine />

            {/* Step 3 */}
            <ProcessBox 
              icon={<FileText size={28} />} 
              title="시공 및 견적 안내" 
              active
            />

            {/* Branching SVG Lines (Desktop) */}
            <div className="hidden md:block w-full h-16 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 64">
                <path d="M 500 0 L 500 32" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 125 32 L 875 32" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 125 32 L 125 64" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 375 32 L 375 64" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 625 32 L 625 64" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 875 32 L 875 64" stroke="#0046FF" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Step 4: Diverging Grid (with images) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-4 md:mt-0">
              <ProcessBox 
                title="곰팡이제거 및 방지코팅" 
                icon={<SprayCan size={24} />} 
                image="/images/process/process-1.jpg"
                small 
              />
              <ProcessBox 
                title="결로 페인트 시공" 
                icon={<Paintbrush size={24} />} 
                image="/images/process/process-2.jpg"
                small 
              />
              <ProcessBox 
                title="단열시공" 
                icon={<House size={24} />} 
                image="/images/process/process-3.jpg"
                small 
              />
              <ProcessBox 
                title="탄성코트" 
                icon={<Layers size={24} />} 
                image="/images/process/process-4.jpg"
                small 
              />
            </div>

            {/* Converging SVG Lines (Desktop) */}
            <div className="hidden md:block w-full h-16 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 64">
                <path d="M 125 0 L 125 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 375 0 L 375 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 625 0 L 625 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 875 0 L 875 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 125 32 L 875 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 500 32 L 500 64" stroke="#0046FF" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Mobile Connector for Level 4-5 */}
            <div className="md:hidden">
              <ConnectorLine />
            </div>

            {/* Step 5: Converge */}
            <ProcessBox 
              icon={<CheckCircle size={28} />} 
              title="검수 및 마무리" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessBox = ({ icon, title, active, small, image }: { icon: React.ReactNode, title: string, active?: boolean, small?: boolean, image?: string }) => (
  <div className={`
    flex flex-col items-center justify-center bg-white border-2 transition-all duration-300 overflow-hidden
    ${active ? "border-primary-blue shadow-lg shadow-primary-blue/10 scale-105 z-20" : "border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md"}
    ${small ? "rounded-3xl" : "rounded-[2.5rem] px-10 py-6 min-w-[300px]"}
  `}>
    {image && (
      <div className="w-full aspect-[4/3] relative mb-6">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    )}
    <div className={`flex flex-col items-center ${image ? "pb-8 px-6" : ""}`}>
      <div className={`${active || small ? "text-primary-blue" : "text-gray-400"} mb-3`}>
        {icon}
      </div>
      <h3 className={`font-black tracking-tight whitespace-nowrap text-center ${small ? "text-[17px] md:text-[18px]" : "text-xl md:text-2xl"}`}>
        {title}
      </h3>
    </div>
  </div>
);

const ConnectorLine = () => (
  <div className="w-0.5 h-12 bg-primary-blue/30 relative">
    <div className="absolute inset-0 bg-primary-blue animate-pulse opacity-50"></div>
  </div>
);

export default Process;
