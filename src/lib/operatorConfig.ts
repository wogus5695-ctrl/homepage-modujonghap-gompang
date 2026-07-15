export interface OperatorInfo {
  operatorName: string;
  contactPhone: string;
  kakaoLink: string;
  operatingHours: string;
  representative: string;
  businessNumber: string;
}

export const DEFAULT_OPERATOR: OperatorInfo = {
  operatorName: "모두종합환경",
  contactPhone: "050-7871-3592",
  kakaoLink: "https://pf.kakao.com/_xxxx", // 카카오 채널 기본주소
  operatingHours: "평일/주말 09:00 ~ 20:00 (연중무휴)",
  representative: "김재현",
  businessNumber: "405-15-02677",
};

// B그룹 (탄성코트, 줄눈시공)의 기본 고객센터/연락처 설정
export const DEFAULT_FINISH_OPERATOR: OperatorInfo = {
  ...DEFAULT_OPERATOR,
  contactPhone: "010-8189-6900", // B그룹 전용 기본 전화번호 오버라이드
};

// B그룹(탄성코트/줄눈시공)의 지역별 독립 대여 사업자 매핑 테이블
// 특정 지역(구/시)의 한글명을 키로 하여 연락처와 사업자 세부 정보를 오버라이드할 수 있습니다.
export const FINISH_OPERATORS: Record<string, Partial<OperatorInfo>> = {
  "강서구": {
    operatorName: "모두종합환경 강서점 (마감전문)",
    contactPhone: "010-1234-5678", // 강서점 전용 전화번호 오버라이드 예시
    kakaoLink: "https://open.kakao.com/o/g강서탄성줄눈",
    representative: "강서파트너",
    businessNumber: "123-45-67890",
  },
  "강서": {
    operatorName: "모두종합환경 강서점 (마감전문)",
    contactPhone: "010-1234-5678",
    kakaoLink: "https://open.kakao.com/o/g강서탄성줄눈",
    representative: "강서파트너",
    businessNumber: "123-45-67890",
  }
};

/**
 * 템플릿 타입과 지역명에 해당하는 최적의 사업자 정보를 반환합니다.
 * @param templateType "mold" | "finish"
 * @param region 지역명 (예: "강서구", "서초구" 등)
 */
export const getOperator = (templateType: "mold" | "finish", region?: string): OperatorInfo => {
  const baseOperator = templateType === "finish" ? DEFAULT_FINISH_OPERATOR : DEFAULT_OPERATOR;
  
  if (templateType === "finish" && region) {
    // 공백 및 미세 텍스트 보정 매칭
    const cleanRegion = region.trim();
    const baseRegion = cleanRegion.replace(/[구시]$/, "");
    
    const matched = FINISH_OPERATORS[cleanRegion] || FINISH_OPERATORS[baseRegion];
    if (matched) {
      return {
        ...baseOperator,
        ...matched,
      };
    }
  }
  return baseOperator;
};
