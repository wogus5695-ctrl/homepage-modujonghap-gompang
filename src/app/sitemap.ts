import { MetadataRoute } from 'next'

export async function generateSitemaps() {
  return [
    { id: 'static' },
    { id: 'mold' },
    { id: 'finish' },
  ]
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.modujonghap.co.kr'
  
  const moldServices = ["곰팡이제거", "단열시공", "결로방지"]
  const finishServices = ["탄성코트", "줄눈시공"]

  const areaData = [
    { name: "강서구", dongs: ["염창동", "등촌동", "화곡본동", "화곡동", "우장산동", "가양동", "발산동", "공항동", "방화동"] },
    { name: "마포구", dongs: ["공덕동", "아현동", "도화동", "용강동", "대흥동", "염리동", "신수동", "서강동", "서교동", "합정동", "망원동", "연남동", "성산동", "상암동"] },
    { name: "은평구", dongs: ["불광동", "갈현동", "구산동", "대조동", "응암동", "역촌동", "신사동", "증산동", "수색동", "진관동"] },
    { name: "용산구", dongs: ["후암동", "용산동", "남영동", "청파동", "원효로", "효창동", "용문동", "한강로", "이촌동", "이태원동", "한남동", "서빙고동", "보광동"] },
    { name: "양천구", dongs: ["목동", "신월동", "신정동"] },
    { name: "노원구", dongs: ["월계동", "공릉동", "하계동", "중계동", "상계동"] },
    { name: "중랑구", dongs: ["면목동", "상봉동", "중화동", "묵동", "망우동", "신내동"] },
    { name: "도봉구", dongs: ["쌍문동", "방학동", "창동", "도봉동"] },
    { name: "성북구", dongs: ["성북동", "삼선동", "동소문동", "돈암동", "안암동", "보문동", "정릉동", "길음동", "종암동", "월곡동", "장위동", "석관동"] },
    { name: "서대문구", dongs: ["충현동", "천연동", "북아현동", "신촌동", "연희동", "홍제동", "홍은동", "남가좌동", "북가좌동"] },
    { name: "종로구", dongs: ["청운효자동", "사직동", "삼청동", "부암동", "평창동", "무악동", "교남동", "가회동", "이화동", "혜화동", "창신동", "숭인동"] },
    { name: "동작구", dongs: ["노량진동", "상도동", "흑석동", "사당동", "대방동", "신대방동"] },
    { name: "관악구", dongs: ["보라매동", "은천동", "성현동", "중앙동", "청림동", "행운동", "청룡동", "낙성대동", "인헌동", "남현동", "신림동", "신사동", "조원동", "미성동", "난곡동", "난향동", "서원동", "신원동", "서림동", "삼성동", "대학동"] },
    { name: "금천구", dongs: ["가산동", "독산동", "시흥동"] },
    { name: "구로구", dongs: ["신도림동", "구로동", "가리봉동", "고척동", "개봉동", "오류동", "항동", "수궁동"] },
    { name: "서초구", dongs: ["서초동", "잠원동", "반포동", "방배동", "양재동", "내곡동"] },
    { name: "강남구", dongs: ["신사동", "논현동", "압구정동", "청담동", "삼성동", "대치동", "역삼동", "도곡동", "개포동", "세곡동", "일원동", "수서동"] },
    { name: "강북구", dongs: ["미아동", "번동", "수유동", "우이동", "삼양동", "송중동", "송천동", "삼각산동", "인수동"] },
    { name: "동대문구", dongs: ["신설동", "용두동", "제기동", "전농동", "답십리동", "장안동", "청량리동", "회기동", "휘경동", "이문동"] },
    { name: "성동구", dongs: ["왕십리동", "마장동", "사근동", "행당동", "응봉동", "금호동", "옥수동", "성수동", "송정동", "용답동"] },
    { name: "광진구", dongs: ["중곡동", "능동", "구의동", "광장동", "자양동", "화양동", "군자동"] },
    { name: "강동구", dongs: ["강일동", "상일동", "명일동", "고덕동", "암사동", "천호동", "성내동", "길동", "둔촌동"] },
    { name: "송파구", dongs: ["풍납동", "거여동", "마천동", "방이동", "오륜동", "오금동", "송파동", "석촌동", "삼전동", "가락동", "문정동", "장지동", "위례동", "잠실동"] },
    { name: "영등포구", dongs: ["영등포동", "여의동", "당산동", "도림동", "문래동", "양평동", "신길동", "대림동"] },
    { name: "중구", dongs: ["소공동", "회현동", "명동", "필동", "장충동", "광희동", "을지로동", "신당동", "다산동", "약수동", "청구동", "동화동", "황학동", "중림동"] },
    { name: "고양시", dongs: ["주교동", "원신동", "흥도동", "성사동", "효자동", "삼송동", "창릉동", "능곡동", "화전동", "행신동", "화정동", "행주동", "대덕동", "식사동", "중산동", "정발산동", "풍산동", "백석동", "마두동", "장항동", "고봉동", "일산동", "탄현동", "주엽동", "대화동", "송포동", "송산동"] },
    { name: "광명시", dongs: ["광명동", "철산동", "하안동", "소하동", "일직동", "학온동"] },
    { name: "과천시", dongs: ["중앙동", "갈현동", "별양동", "부림동", "과천동", "문원동"] },
    { name: "김포시", dongs: ["사우동", "풍무동", "걸포동", "북변동", "운양동", "장기동", "마산동", "구래동", "고촌읍", "양촌읍", "통진읍"] },
    { name: "부평구", dongs: ["부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"] },
    { name: "계양구", dongs: ["효성동", "계산동", "작전동", "서운동", "계양동"] },
    { name: "인천동구", dongs: ["만석동", "화수동", "송현동", "송림동", "금창동"] },
    { name: "안양시", dongs: ["안양동", "석수동", "박달동", "비산동", "부흥동", "달안동", "관양동", "부림동", "평촌동", "평안동", "귀인동", "호계동", "범계동", "신촌동", "갈산동"] },
    { name: "부천시", dongs: ["원미동", "심곡동", "춘의동", "도당동", "약대동", "소사동", "역곡동", "중동", "상동", "송내동", "괴안동", "범박동", "옥길동", "오정동", "여월동", "작동", "원종동", "고강동", "삼정동", "내동"] },
    { name: "시흥시", dongs: ["대야동", "신천동", "은행동", "매화동", "목감동", "군자동", "정왕동", "배곧동", "능곡동", "월곶동", "장현동", "장곡동", "신현동", "거모동"] },
    { name: "양주시", dongs: ["백석읍", "은현면", "남면", "광적면", "장흥면", "양주동", "회천동", "옥정동", "고읍동", "광사동", "만송동", "삼숭동", "덕정동", "덕계동"] },
    { name: "파주시", dongs: ["문산읍", "조리읍", "법원읍", "파주읍", "광탄면", "탄현면", "월롱면", "교하동", "운정동", "금촌동", "야당동", "와동동", "목동동", "동패동", "다율동"] },
    { name: "성남시", dongs: ["신흥동", "태평동", "수진동", "단대동", "산성동", "양지동", "복정동", "위례동", "신촌동", "고등동", "성남동", "중앙동", "금광동", "은행동", "상대원동", "하대원동", "도촌동", "분당동", "수내동", "정자동", "율동", "서현동", "이매동", "야탑동", "판교동", "삼평동", "백현동", "금곡동", "구미동", "운중동", "대장동"] },
  ];

  if (id === 'static') {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/sitemap-seoul`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/sitemap-seoul-finish`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }

  // Choose services based on request ID
  const selectedServices = id === 'finish' ? finishServices : moldServices;

  const dynamicRoutes = areaData.flatMap((area) => {
    const baseName = area.name.length > 2 ? area.name.replace(/[구시]$/, "") : area.name;
    
    // 1단계: 구/시 단위 키워드
    const guRoutes = selectedServices.flatMap(service => {
      const routes = [];
      
      // 풀네임 버전 (ex. 강서구-곰팡이제거)
      if (area.name !== baseName) {
        routes.push({
          url: `${baseUrl}/k/${encodeURIComponent(`${area.name}-${service}`)}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        });
      }
      
      // 줄임말 버전 (ex. 강서-곰팡이제거)
      routes.push({
        url: `${baseUrl}/k/${encodeURIComponent(`${baseName}-${service}`)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
      
      return routes;
    });
    
    // 2단계: 동 단위 키워드
    const dongRoutes = area.dongs.flatMap(dong => 
      selectedServices.map(service => ({
        url: `${baseUrl}/k/${encodeURIComponent(`${dong}-${service}`)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    );

    return [...guRoutes, ...dongRoutes];
  });

  return dynamicRoutes;
}
