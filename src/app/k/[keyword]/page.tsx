import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustPoints from "@/components/TrustPoints";
import ProblemRecognition from "@/components/ProblemRecognition";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getDynamicContent } from "@/lib/dynamicHome";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ keyword: string }>;
};

function getThumbnailUrl(k?: string | null): string {
  if (!k) return "https://modujonghap.co.kr/thumbnail.jpg?v=2";
  
  // Deterministic hash based on query string k
  let hash = 0;
  for (let i = 0; i < k.length; i++) {
    hash = k.charCodeAt(i) + ((hash << 5) - hash);
  }
  const imageIndex = (Math.abs(hash) % 3) + 1; // 1, 2, or 3
  return `https://modujonghap.co.kr/thumbnail-${imageIndex}.jpg?v=2`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);
  const dynamic = getDynamicContent(decodedKeyword);

  const imageUrl = getThumbnailUrl(decodedKeyword);
  const canonicalUrl = `https://modujonghap.co.kr/k/${encodeURIComponent(decodedKeyword)}`;

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

export default async function DynamicKeywordHome({ params }: Props) {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);
  const dynamic = getDynamicContent(decodedKeyword);

  if (!dynamic) {
    // If the keyword doesn't match a valid region and service, show 404
    notFound();
  }

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
