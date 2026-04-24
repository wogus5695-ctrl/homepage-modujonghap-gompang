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

  const parts = k.split("-");
  if (parts.length < 2) return null;

  const region = parts[0];
  const service = parts[1];

  let content: Partial<DynamicContent> = {
    region,
    service,
  };

  // 서비스별 문구 분기
  if (service.includes("곰팡이제거")) {
    content = {
      ...content,
      h1: `${region} 곰팡이제거 전문 시공`,
      subtitle: `${region} 곰팡이 원인 진단부터 재발 방지까지 한 번에`,
      introText: `곰팡이는 결코 단순한 문제가 아닙니다. ${region} 지역의 기후와 환경을 이해하는 전문가가 원인을 분석하고 해결해야 다시 생기지 않습니다.`,
      expertText: `전문가가 ${region} 현장을 직접 방문하여 곰팡이의 원인을 분석하고, 근본적인 문제를 해결해야 다시는 곰팡이가 돌아오지 못합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 곰팡이제거 전문 | 모두종합환경 15년 경력 시공`,
      metaDesc: `${region} 지역 곰팡이 고민, 닦아도 다시 생긴다면? 원인 진단부터 재발 방지 코팅까지 전문가가 확실하게 해결해드립니다.`,
    };
  } else if (service.includes("단열시공")) {
    content = {
      ...content,
      h1: `${region} 단열시공 점검 및 시공 안내`,
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
      h1: `${region} 탄성코트 시공 및 보수 안내`,
      subtitle: `${region} 베란다와 다용도실을 쾌적하게 만드는 프리미엄 코팅`,
      introText: `베란다 곰팡이 방지와 오염 방지에 탁월한 탄성코트 시공. ${region} 지역의 많은 아파트 현장 경험으로 프리미엄 마감을 제공합니다.`,
      expertText: `${region} 베란다 및 다용도실의 표면을 보호하고 오염을 방지하는 프리미엄 탄성코트 시공으로 집의 가치를 높여드립니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 탄성코트 시공 전문 | 베란다 곰팡이 방지 및 리모델링`,
      metaDesc: `${region} 탄성코트, 세라믹 코팅 시공. 곰팡이 방지는 물론 깔끔한 인테리어 효과까지! 15년 경력의 전문가가 직접 시공합니다.`,
    };
  } else {
    return null;
  }

  return content as DynamicContent;
};
