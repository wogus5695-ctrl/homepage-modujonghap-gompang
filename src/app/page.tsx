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

  if (!dynamic) {
    return {
      title: "모두종합환경 | 곰팡이 해결·재발 방지·결로 진단 전문",
      description: "닦아도 다시 생기는 곰팡이, 원인부터 해결해야 합니다. 15년 경력의 정밀 진단과 전문 장비 시공으로 집의 가치와 가족의 건강을 지켜드립니다.",
      openGraph: {
        images: ["/thumbnail.jpg"],
      },
    };
  }

  return {
    title: dynamic.metaTitle,
    description: dynamic.metaDesc,
    openGraph: {
      title: dynamic.metaTitle,
      description: dynamic.metaDesc,
      images: ["/thumbnail.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dynamic.metaTitle,
      description: dynamic.metaDesc,
      images: ["/thumbnail.jpg"],
    },
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
      
      <Footer />
      <FloatingCTA />
    </main>
  );
}
