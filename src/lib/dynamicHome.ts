export interface DynamicContent {
  region: string;
  service: string;
  h1: string;
  subtitle: string;
  introText: string;
  expertText: string;
  ctaText: string;
  metaTitle: string;
  metaDesc: string;
}

export const getDynamicContent = (k?: string | null): DynamicContent | null => {
  if (!k) return null;

  const decoded = decodeURIComponent(k);
  const parts = decoded.split("-");
  if (parts.length < 2) return null;

  const region = parts[0];
  const service = parts.slice(1).join("-");

  let content: Partial<DynamicContent> = {
    region,
    service,
  };

  // 서비스별 문구 분기
  if (service.includes("곰팡이제거")) {
    content = {
      ...content,
      h1: `${region} 곰팡이제거`,
      subtitle: `${region} 곰팡이 원인 진단부터 재발 방지까지 한 번에`,
      introText: `곰팡이는 결코 단순한 문제가 아닙니다. ${region} 지역의 기후와 환경을 이해하는 전문가가 원인을 분석하고 해결해야 다시 생기지 않습니다.`,
      expertText: `전문가가 ${region} 현장을 직접 방문하여 곰팡이의 원인을 분석하고, 근본적인 문제를 해결해야 다시는 곰팡이가 돌아오지 못합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 곰팡이제거 전문 | 모두종합환경 결로방지/탄성코트/단열시공`,
      metaDesc: `${region} 지역 곰팡이 고민, 닦아도 다시 생긴다면? 원인 진단부터 재발 방지 코팅까지 전문가가 확실하게 해결해드립니다.`,
    };
  } else if (service.includes("단열시공")) {
    content = {
      ...content,
      h1: `${region} 단열시공`,
      subtitle: `${region} 결로 해결과 에너지 효율을 높이는 스마트 단열`,
      introText: `겨울철 결로와 벽면 온도차로 인한 문제는 단열 보강이 정답입니다. ${region} 주거 환경에 최적화된 시공으로 쾌적한 실내를 약속합니다.`,
      expertText: `벽면과 천장의 온도차를 정밀 측정하여 ${region} 고객님의 댁내 결로 원인을 파악하고, 최적의 단열재로 빈틈없는 시공을 진행합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 단열시공 추천 | 결로 해결 및 에너지 절감 전문`,
      metaDesc: `${region} 아파트, 빌라 단열 공사. 결로 원인 분석과 정밀한 수치 측정을 통한 맞춤형 단열 시공으로 에너지 효율을 극대화합니다.`,
    };
  } else if (service.includes("탄성코트")) {
    content = {
      ...content,
      h1: `${region} 탄성코트`,
      subtitle: `${region} 베란다와 다용도실을 쾌적하게 만드는 프리미엄 코팅`,
      introText: `베란다 곰팡이 방지와 오염 방지에 탁월한 탄성코트 시공. ${region} 지역의 많은 아파트 현장 경험으로 프리미엄 마감을 제공합니다.`,
      expertText: `${region} 베란다 및 다용도실의 표면을 보호하고 오염을 방지하는 프리미엄 탄성코트 시공으로 집의 가치를 높여드립니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 탄성코트 시공 전문 | 곰팡이제거 시공 전문업체`,
      metaDesc: `${region} 탄성코트, 세라믹 코팅 시공. 곰팡이 방지는 물론 깔끔한 인테리어 효과까지! 15년 경력의 전문가가 직접 시공합니다.`,
    };
  } else if (service.includes("결로방지") || service.includes("페인트")) {
    content = {
      ...content,
      h1: `${region} 결로방지 페인트`,
      subtitle: `${region} 결로와 습기 원인을 제거하는 친환경 특수 코팅`,
      introText: `겨울철 결로 현상과 이로 인한 곰팡이 발생은 전용 결로방지 페인트 시공이 효과적입니다. ${region} 지역의 현장 상태에 맞춘 친환경 특수 도장으로 쾌적함을 지켜드립니다.`,
      expertText: `${region} 현장 표면의 습기를 완벽히 제거한 후 결로방지 기능성 페인트를 꼼꼼히 도포하여 결로와 곰팡이 문제를 한 번에 해결합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 결로방지 페인트 시공 | 친환경 곰팡이 방지 페인트 전문`,
      metaDesc: `${region} 베란다, 다용도실 결로방지 페인트 시공. 결로 차단과 친환경 방지 페인트 도포로 곰팡이 발생을 차단합니다.`,
    };
  } else {
    // 기타 키워드 대응
    const displayService = service === "기타" ? "현장 시공" : service;
    content = {
      ...content,
      h1: `${region} ${displayService}`,
      subtitle: `${region} 현장 맞춤형 정밀 진단 및 전문 시공`,
      introText: `${region} 지역의 곰팡이 및 결로 관련 문제, 현장 상태를 정확하게 분석하여 공간 맞춤형 최적의 시공 솔루션을 제공해드립니다.`,
      expertText: `${region} 현장의 세부적인 원인을 파악한 후, 재발이 없도록 근본적인 보완 조치와 정밀 시공을 책임지고 진행합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} ${displayService} 전문 | 모두종합환경 곰팡이/단열/탄성`,
      metaDesc: `${region} ${displayService} 상담. 원인 파악이 어려운 곰팡이와 결로 문제, 전문가의 정밀 진단 and 전문 시공으로 깨끗하게 해결하세요.`,
    };
  }

  return content as DynamicContent;
};
