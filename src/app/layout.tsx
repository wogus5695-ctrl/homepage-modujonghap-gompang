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
  metadataBase: new URL('https://modujonghap.co.kr'),
  title: "모두종합환경 | 곰팡이 해결·재발 방지·결로 진단 전문",
  description: "닦아도 다시 생기는 곰팡이, 원인부터 해결해야 합니다. 15년 경력의 정밀 진단과 전문 장비 시공으로 집의 가치와 가족의 건강을 지켜드립니다. 지금 바로 사진 상담 하세요.",
  keywords: ["곰팡이제거", "결로방지", "단열시공", "베란다곰팡이", "벽제곰팡이", "모두종합환경"],
  openGraph: {
    title: "모두종합환경 | 곰팡이 해결·재발 방지·결로 진단 전문",
    description: "닦아도 다시 생기는 곰팡이, 원인부터 해결해야 합니다. 15년 경력의 정밀 진단과 전문 장비 시공으로 집의 가치와 가족의 건강을 지켜드립니다.",
    url: "https://modujonghap.co.kr",
    siteName: "모두종합환경",
    images: [
      {
        url: "https://modujonghap.co.kr/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "모두종합환경 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "모두종합환경 | 곰팡이 해결·재발 방지·결로 진단 전문",
    description: "닦아도 다시 생기는 곰팡이, 원인부터 해결해야 합니다. 15년 경력의 정밀 진단과 전문 장비 시공으로 집의 가치와 가족의 건강을 지켜드립니다.",
    images: ["https://modujonghap.co.kr/thumbnail.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  other: {
    thumbnail: "https://modujonghap.co.kr/thumbnail.jpg?v=2",
  },
  verification: {
    google: "LaqP8Rikf3fH7ZiFLitcshG66QB2F7D0Tc9YrQDr_Ok",
    other: {
      "naver-site-verification": "a8f2ca6131ad3a5a057d24b322cd40e7d88b3d55",
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "모두종합환경",
              "url": "https://modujonghap.co.kr",
              "logo": "https://modujonghap.co.kr/thumbnail.jpg?v=2",
              "sameAs": [
                "http://pf.kakao.com/_xgjxmjX"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "010-4667-5568",
                "contactType": "customer service"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "모두종합환경",
              "url": "https://modujonghap.co.kr",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://modujonghap.co.kr/k/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
