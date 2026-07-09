import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustPoints from "@/components/TrustPoints";
import ProblemRecognition from "@/components/ProblemRecognition";
import ServiceIntro from "@/components/ServiceIntro";
import TargetSpaces from "@/components/TargetSpaces";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getDynamicContent } from "@/lib/dynamicHome";
import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";


type Props = {
  searchParams: Promise<{ k?: string }>;
};

function getThumbnailUrl(k?: string | null): string {
  if (!k) return "https://www.modujonghap.co.kr/thumbnail.jpg";
  
  const decoded = decodeURIComponent(k);
  if (decoded.includes("줄눈시공") || decoded.includes("줄눈")) {
    return "https://www.modujonghap.co.kr/images/hero-grout.jpg";
  }
  if (decoded.includes("탄성코트")) {
    return "https://www.modujonghap.co.kr/images/hero-elastic.jpg";
  }
  
  // Deterministic hash based on query string k
  let hash = 0;
  for (let i = 0; i < k.length; i++) {
    hash = k.charCodeAt(i) + ((hash << 5) - hash);
  }
  const imageIndex = (Math.abs(hash) % 3) + 1; // 1, 2, or 3
  return `https://www.modujonghap.co.kr/thumbnail-${imageIndex}.jpg`;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { k } = await searchParams;
  const dynamic = getDynamicContent(k);

  const imageUrl = getThumbnailUrl(k);
  const canonicalUrl = k 
    ? `https://www.modujonghap.co.kr/k/${encodeURIComponent(k)}` 
    : "https://www.modujonghap.co.kr";

  if (!dynamic) {
    return {
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        images: [{
          url: imageUrl,
          width: 800,
          height: 800,
          alt: "모두종합환경 대표 이미지",
        }],
        url: canonicalUrl,
        siteName: "모두종합환경",
        locale: "ko_KR",
        type: "website",
      },
      other: {
        thumbnail: imageUrl,
      }
    };
  }

  return {
    title: dynamic.metaTitle,
    description: dynamic.metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: dynamic.metaTitle,
      description: dynamic.metaDesc,
      url: canonicalUrl,
      siteName: "모두종합환경",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${dynamic.region} ${dynamic.service} 전문 시공 - 모두종합환경`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dynamic.metaTitle,
      description: dynamic.metaDesc,
      images: [imageUrl],
    },
    other: {
      thumbnail: imageUrl,
    }
  };
}

export default async function Home({ searchParams }: Props) {
  const { k } = await searchParams;
  if (k) {
    permanentRedirect(`/k/${encodeURIComponent(k)}`);
  }
  const dynamic = getDynamicContent(k);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <Hero dynamic={dynamic} />
      <TrustPoints dynamic={dynamic} />
      <ProblemRecognition dynamic={dynamic} />
      <Process dynamic={dynamic} />
      <Cases dynamic={dynamic} />
      <FAQ dynamic={dynamic} />
      <FinalCTA dynamic={dynamic} />
      
      <Footer dynamic={dynamic} />
      <FloatingCTA dynamic={dynamic} />
    </main>
  );
}
