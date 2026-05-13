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

type Props = {
  searchParams: Promise<{ k?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { k } = await searchParams;
  const dynamic = getDynamicContent(k);

  const imageUrl = "https://modujonghap.co.kr/thumbnail.jpg";
  const canonicalUrl = k 
    ? `https://modujonghap.co.kr/?k=${encodeURIComponent(k)}` 
    : "https://modujonghap.co.kr";

  if (!dynamic) {
    return {
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        images: [{
          url: imageUrl,
          width: 1200,
          height: 630,
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
          width: 1200,
          height: 630,
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
  const dynamic = getDynamicContent(k);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <Hero dynamic={dynamic} />
      <TrustPoints />
      <ProblemRecognition dynamic={dynamic} />
      <Process />
      <Cases />
      <FAQ dynamic={dynamic} />
      <FinalCTA dynamic={dynamic} />
      
      <Footer dynamic={dynamic} />
      <FloatingCTA />
    </main>
  );
}
