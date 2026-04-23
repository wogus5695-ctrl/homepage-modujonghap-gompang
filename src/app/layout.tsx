import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const scDream = localFont({
  src: [
    { path: "./fonts/SCDream1.otf", weight: "100", style: "normal" },
    { path: "./fonts/SCDream2.otf", weight: "200", style: "normal" },
    { path: "./fonts/SCDream3.otf", weight: "300", style: "normal" },
    { path: "./fonts/SCDream4.otf", weight: "400", style: "normal" },
    { path: "./fonts/SCDream5.otf", weight: "500", style: "normal" },
    { path: "./fonts/SCDream6.otf", weight: "600", style: "normal" },
    { path: "./fonts/SCDream7.otf", weight: "700", style: "normal" },
    { path: "./fonts/SCDream8.otf", weight: "800", style: "normal" },
    { path: "./fonts/SCDream9.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-scdream",
  display: "swap",
});

export const metadata: Metadata = {
  title: "모두종합환경 | 곰팡이 해결·재발 방지·결로 진단 전문",
  description: "닦아도 다시 생기는 곰팡이, 원인부터 해결해야 합니다. 15년 경력의 정밀 진단과 전문 장비 시공으로 집의 가치와 가족의 건강을 지켜드립니다. 지금 바로 사진 상담 하세요.",
  keywords: ["곰팡이제거", "결로방지", "단열시공", "베란다곰팡이", "벽제곰팡이", "모두종합환경"],
  openGraph: {
    title: "모두종합환경 | 곰팡이 제거 전문가",
    description: "원인 진단 중심의 고품질 곰팡이 해결 솔루션",
    url: "https://modu-mold.example.com",
    siteName: "모두종합환경",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${scDream.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
