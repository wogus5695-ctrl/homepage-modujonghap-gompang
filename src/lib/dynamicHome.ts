import { OperatorInfo, getOperator } from "./operatorConfig";

export interface DynamicContent {
  region: string;
  service: string;
  templateType: "mold" | "finish";
  h1: string;
  subtitle: string;
  introText: string;
  expertText: string;
  ctaText: string;
  metaTitle: string;
  metaDesc: string;
  operator: OperatorInfo;
  bottomEndingText: string;
  ctaSubcopy: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
}

export const getDynamicContent = (k?: string | null): DynamicContent | null => {
  if (!k) return null;

  const decoded = decodeURIComponent(k);
  const parts = decoded.split("-");
  if (parts.length < 2) return null;

  const region = parts[0];
  const service = parts.slice(1).join("-");

  const isFinishType = service.includes("탄성코트") || service.includes("줄눈시공");
  const templateType = isFinishType ? "finish" : "mold";

  let content: Partial<DynamicContent> = {
    region,
    service,
    templateType,
  };

  // 서비스별 문구 분기 (A군: 곰팡이/단열/결로, B군: 탄성코트/줄눈시공)
  if (service.includes("곰팡이제거")) {
    content = {
      ...content,
      h1: `${region} 곰팡이제거`,
      subtitle: `${region} 곰팡이 원인 진단부터 재발 방지까지 한 번에`,
      introText: `${region} 지역의 기온 차와 벽체 구조를 면밀히 분석하여 결로 곰팡이의 근본 원인을 파악합니다. 표면의 균을 단순히 세척하는 임시방편을 넘어, 깊숙이 침투한 포자균 사멸과 확실한 항균 장벽 형성을 통해 건강 위협과 자산 가치 하락 방지 솔루션을 약속드립니다.`,
      expertText: `전문가가 ${region} 현장을 직접 방문하여 곰팡이의 유입 경로와 단열 미비점을 진단하고, 특수 약품 처리와 재발 방지 도장까지 완벽하게 수행합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 곰팡이제거 전문 | 모두종합환경 결로방지/단열시공`,
      metaDesc: `${region} 지역 곰팡이 고민, 닦아도 계속 피어난다면? 정밀한 원인 진단과 친환경 특수 약품 처리를 통해 건강한 주거 공간으로 개선해 드립니다.`,
      ctaSubcopy: `방치할수록 면적이 넓어지고 구조물 부식이 가속화됩니다. ${region} 전문 상담진의 정밀 분석으로 확실하게 해결하세요.`,
      bottomEndingText: `${region} 곰팡이제거 시공 완료 후에는 실내 공기질이 정화되고, 면역력 저하와 호흡기 질환 걱정 없는 쾌적한 보금자리로 재탄생합니다.`,
      faq1Q: `${region} 곰팡이제거 시공 비용은 어떻게 책정되나요?`,
      faq1A: `곰팡이가 발생한 벽면의 크기(가로/세로)와 깊이, 그리고 기존 도배지나 마감재의 훼손 상태에 따라 밑작업 강도가 달라져 결정됩니다. 시공이 필요한 ${region} 현장 사진을 보내주시면 가장 정확한 예상 견적을 즉시 받아보실 수 있습니다.`,
      faq2Q: `${region} 곰팡이제거 후 약품 냄새가 오래 남나요?`,
      faq2A: `모두종합환경은 실내 공기질 기준을 통과한 친환경 무취 특수 약품과 항균 페인트만을 고집합니다. 시공 완료 후 약 1~2시간의 자연 환기만 거치면 냄새가 완전히 사라지므로 안심하고 일상생활을 지속하실 수 있습니다.`,
    };
  } else if (service.includes("단열시공")) {
    content = {
      ...content,
      h1: `${region} 단열시공`,
      subtitle: `${region} 결로 해결과 에너지 효율을 높이는 스마트 단열`,
      introText: `겨울철 모서리와 외벽 부분에 눈물 흘리듯 맺히는 결로 현상은 단열벽 보강이 핵심입니다. ${region} 지역 가구별 단열 결손 부위를 열화상 카메라 기준으로 정밀 추적하여 기밀도 높은 단열 시공으로 난방비 절감과 쾌적한 실내 기온을 선사합니다.`,
      expertText: `외벽과 닿아 있는 방 벽면의 온도 차를 정확히 측정하고 밀착 단열재와 친환경 석고보드를 틈새 없이 기밀 밀착 시공하여 습기 유입을 원천 차단합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 단열시공 추천 | 결로 해결 및 에너지 절감 전문`,
      metaDesc: `${region} 아파트, 빌라 단열 공사. 결로 원인 분석과 정밀한 기밀 밀착 시공을 통해 외풍을 차단하고 곰팡이 재발을 원천 봉쇄합니다.`,
      ctaSubcopy: `겨울철 젖은 벽면과 냉기는 단열 보강만이 유일한 해결책입니다. ${region} 단열 전문 시공팀의 무료 유선 진단을 지금 받아보세요.`,
      bottomEndingText: `${region} 단열시공 시공 완료 후에는 벽체 구조가 단단히 보강되어 습기 결로 예방뿐만 아니라 냉난방비 절감 효과도 즉시 체감하실 수 있습니다.`,
      faq1Q: `${region} 단열시공을 진행하면 기존 곰팡이 처리는 어떻게 되나요?`,
      faq1A: `단열재를 덮기 전, 기존 벽면에 핀 모든 곰팡이와 균류를 사멸시키고 크랙을 메우는 1단계 기초 항균 가공 작업을 선행합니다. 오염을 완벽히 차단한 뒤 단열층을 올리므로 내부에서 다시 균이 자라지 않습니다.`,
      faq2Q: `${region} 단열재 두께 때문에 방이 좁아지지 않을까요?`,
      faq2A: `고효율 압출법 단열재를 밀착 시공하여 두께는 최소화(보통 3~5cm 내외)하면서 단열 성능은 극대화합니다. 공간 손실을 거의 느끼지 못하는 스마트 시공을 지원합니다.`,
    };
  } else if (service.includes("탄성코트")) {
    content = {
      ...content,
      h1: `${region} 탄성코트`,
      subtitle: `${region} 베란다와 다용도실을 쾌적하게 만드는 프리미엄 코팅`,
      introText: `습기와 물 사용이 잦은 다용도실과 베란다 벽면의 칠 벗겨짐은 친환경 탄성코트가 정답입니다. ${region} 아파트 및 빌라 베란다 벽체의 기밀도를 확보하고, 물때와 세균 번식을 억제하는 친환경 마감재 세라믹 도장으로 깔끔한 인테리어 효과와 손쉬운 청소 관리를 보장합니다.`,
      expertText: `${region} 베란다 및 다용도실의 기존 노후 페인트를 완전히 긁어내고, 미세 크랙 보수와 실리콘 마감을 거친 뒤 에어리스 분사 공법으로 매끄럽고 일정한 표면을 연출합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 탄성코트 시공 전문 | 곰팡이제거 시공 전문업체`,
      metaDesc: `${region} 탄성코트 및 바이오세라믹 코팅 시공. 베란다 곰팡이 방지는 물론 물때 오염 차단, 뛰어난 단열 효과까지 입증된 친환경 명품 시공을 받아보세요.`,
      ctaSubcopy: `리모델링이나 입주 청소 전 필수 단계인 탄성코트, ${region} 베란다 오염을 예방하는 가장 현명한 예산 투자입니다.`,
      bottomEndingText: `${region} 탄성코트 마감 작업으로 벽면에 수분 흡수가 방지되어 가벼운 걸레질만으로도 세탁실과 베란다 위생을 항시 쾌적하게 유지할 수 있습니다.`,
      faq1Q: `${region} 탄성코트 시공 후 건조 시간은 얼마나 걸리나요?`,
      faq1A: `기온과 습도 조건에 따라 다소 차이가 있으나, 보통 시공 후 약 24~48시간 동안 창문을 살짝 열어 자연 건조(양생) 시켜주셔야 합니다. 페인트 막이 완전히 굳을 때까지는 물이 닿지 않도록 주의가 필요합니다.`,
      faq2Q: `${region} 기존에 탄성코트가 부풀어 오르고 깨진 곳도 재시공 가능한가요?`,
      faq2A: `네, 당연히 가능합니다! 들뜨고 깨진 기존 페인트 껍질을 스크래퍼로 완벽히 긁어내고, 전용 하방 프라이머로 하단 면을 단단히 접착시킨 후 도포해야 재발하지 않습니다. 기초 면 처리에 공을 들여 완벽히 마감합니다.`,
    };
  } else if (service.includes("결로방지") || service.includes("페인트")) {
    content = {
      ...content,
      h1: `${region} 결로방지 페인트`,
      subtitle: `${region} 결로와 습기 원인을 제거하는 친환경 특수 코팅`,
      introText: `실내외 온도차로 생기는 맺힘 현상과 벽면 눅눅함은 고기능 결로방지 도료가 예방해 드립니다. ${region} 세대별 환기 주기와 벽면 단열 컨디션을 파악하여 항균성이 우수한 친환경 특수 페인트를 다회 도포하여, 곰팡이 포자 안착을 차단하고 주거 공간의 가치와 위생을 빈틈없이 케어해 드립니다.`,
      expertText: `${region} 세탁실이나 보일러실 등 습기가 고이기 쉬운 부위의 벽면 유해 요소를 고온 건조 기법으로 완전히 건조한 뒤, 입자가 고운 특수 조습 도료를 균일하게 코팅 처리합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 결로방지 페인트 시공 | 친환경 곰팡이 방지 페인트 전문`,
      metaDesc: `${region} 베란다 결로방지 특수 페인트 공사. 실내 결로 조절과 항균 특수 도막 형성으로 소중한 우리 집의 가치 하락과 포자 번식을 확실히 막아냅니다.`,
      ctaSubcopy: `젖고 마르기를 반복하여 부서지는 페인트 가루는 호흡기에 해롭습니다. ${region} 결로방지 도장 전담팀에게 상담 전화를 걸어보세요.`,
      bottomEndingText: `${region} 결로방지 페인트 마감 완료 후에는 특수 도막의 조습 작용으로 습도가 자동 조절되어 보일러실과 대피공간이 몰라보게 보송보송해집니다.`,
      faq1Q: `${region} 일반 수성 페인트와 결로방지 특수 페인트의 차이는 무엇인가요?`,
      faq1A: `일반 페인트는 습기를 받으면 쉽게 썩고 들뜨지만, 조습 결로방지 특수 도료는 미세 다공질 구조로 벽면 수분을 흡수했다가 건조 시 배출하는 자가 조절 도막을 형성해 곰팡이 서식을 억제합니다.`,
      faq2Q: `${region} 시공 부위에 물방울이 맺히는 결로 현상이 100% 예방되나요?`,
      faq2A: `단순 표면 결로 예방에는 탁월하나 환기가 아예 안 되거나 벽체 단열층이 완전히 깨진 극심한 조건에서는 단열재 보강이 병행되어야 합니다. 정밀 유선 상담을 통해 최적의 결합 안을 무료로 추천해 드립니다.`,
    };
  } else if (service.includes("줄눈시공") || service.includes("줄눈")) {
    content = {
      ...content,
      h1: `${region} 줄눈시공`,
      subtitle: `${region} 욕실과 베란다 타일을 위생적이고 아름답게`,
      introText: `물 사용으로 누렇게 변색되고 곰팡이가 끼는 타일 백시멘트 틈새는 프리미엄 줄눈시공이 답입니다. 친환경 폴리아스파틱 원료와 펄을 사용하여, ${region} 아파트 욕실 바닥, 현관, 주방 젠다이의 물때 안착을 방지하고 물청소가 쉬운 쾌적함과 고급스러운 광택 인테리어를 동시에 구현합니다.`,
      expertText: `${region} 욕실과 주방 타일 사이의 유해한 백시멘트 가루를 일정한 깊이로 파내고, 수축과 변색이 없는 친환경 친수성 줄눈재를 정교하게 주입해 빈틈없는 라인을 잡습니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} 줄눈시공 전문업체 | 친환경 줄눈 코팅 전문`,
      metaDesc: `${region} 타일 줄눈시공 가격 견적. 욕실 물때, 주방 곰팡이 차단 효과와 은은한 미관 개선 효과까지! 입주 및 리모델링 전 완벽한 프리미엄 마감 솔루션입니다.`,
      ctaSubcopy: `백시멘트 가루는 아토피와 호흡기 질환의 원인이 됩니다. 안전한 우리 가족 보금자리를 위한 ${region} 줄눈 정밀 케어를 권장합니다.`,
      bottomEndingText: `${region} 줄눈시공이 마무리되면 더는 락스를 뿌려 솔질할 필요 없이 가벼운 샤워기 물뿌림만으로 물때가 제거되어 욕실 관리가 한결 수월해집니다.`,
      faq1Q: `${region} 줄눈시공 당일이나 바로 샤워 및 입주 청소가 가능한가요?`,
      faq1A: `시공 완료 후 줄눈재가 완전히 건조 및 양생되기까지 평균 12~24시간이 소요됩니다. 따라서 입주 청소나 욕실 물 사용(샤워 등)은 최소 하루가 지난 시점부터 하시는 것이 마감 품질 보존에 최선입니다.`,
      faq2Q: `${region} 시공 가능한 타일 부위와 색상 선택의 폭은 어떤가요?`,
      faq2A: `부부욕실, 공용욕실, 현관, 다용도실 등 모든 타일 공간에 적용 가능합니다. 색상은 화이트, 실버, 골드, 차콜 등 수십 종류의 프리미엄 펄 색상이 마련되어 있으므로 ${region} 고객님의 타일 톤에 가장 잘 어울리는 색을 현장 조율해 드립니다.`,
    };
  } else {
    // 기타 키워드 대응
    const displayService = service === "기타" ? "현장 시공" : service;
    content = {
      ...content,
      h1: `${region} ${displayService}`,
      subtitle: `${region} 현장 맞춤형 정밀 진단 및 전문 시공`,
      introText: `${region} 지역 주거 유형과 계절별 외벽 결함 여부를 복합적으로 고려하여 최적의 환경 개선 방안을 제공합니다. 단순히 보기에 흉한 부위의 마감 처리를 뛰어넘어, 오염의 직접 원인을 추적 차단하고 자산 가치를 회복하는 맞춤 시공을 제공해 드립니다.`,
      expertText: `${region} 현장의 기하학적 벽면 특성을 감안해 하방 프라이머 처리를 강화하고 균열 틈새 보수 후 견고한 명품 시공을 진행합니다.`,
      ctaText: `무료상담 전화하기`,
      metaTitle: `${region} ${displayService} 전문 | 모두종합환경 곰팡이/단열/탄성`,
      metaDesc: `${region} ${displayService} 가격 상담. 원인 진단이 어려운 곰팡이 결로 하자 보수부터 리모델링 전 친환경 마감재 시공까지 완벽히 완결해 드립니다.`,
      ctaSubcopy: `하자의 종류가 모호해도 걱정 마세요. ${region} 오랜 시공 노하우를 갖춘 베테랑 전문가가 직접 친절히 상담해 드립니다.`,
      bottomEndingText: `${region} 현장 맞춤 케어가 끝난 뒤에는 거주하시는 세대의 단열 기밀성이 복원되어 보송보송하고 위생적인 거주 만족도를 보장합니다.`,
      faq1Q: `${region} 시공 예약 및 일정은 어떻게 확정되나요?`,
      faq1A: `상담을 통해 시공 범위를 확정한 후, ${region} 고객님이 희망하시는 일정(주중/주말 포함)에 우선 배정해 드립니다. 입주 전이나 이사 일정 전후에 원활히 진행될 수 있도록 사전 일정을 세심하게 조정해 드립니다.`,
      faq2Q: `${region} 무상 사후 관리(AS) 기간과 조건은 어떻게 되나요?`,
      faq2A: `모두종합환경은 정밀 시공 후 일정 기간 철저한 사후 관리(A/S)를 보증서와 함께 약속드립니다. 시공 부위의 갈라짐, 들뜸 등의 하자는 보증 기간 동안 확실하게 무상 보수해 드립니다.`,
    };
  }

  const op = getOperator(templateType, region);
  content.operator = op;

  return content as DynamicContent;
};
