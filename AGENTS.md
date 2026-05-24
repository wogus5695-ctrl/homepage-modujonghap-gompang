<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:naver-seo-rules -->
# 네이버 SEO 및 동적 키워드 라우팅 규칙 (Naver SEO & Dynamic Keyword Routing)

한국 검색엔진(네이버 서치어드바이저/Yeti)을 위한 동적 변환 키워드(Programmatic SEO) 작업 시 다음 규칙을 항상 준수하십시오:

1. **경로 기반 라우팅 필수 (Path-based Routing)**:
   - 쿼리 파라미터(`/?k=...`) 구조는 네이버에서 중복 문서로 분류되어 색인이 제외되기 쉽습니다.
   - 반드시 `/k/[keyword]` 또는 `/area/[keyword]` 형태의 하위 디렉토리(경로) 기반 동적 라우팅 구조를 사용하십시오.
   
2. **301 영구 리디렉션 구현**:
   - 기존의 `?k=` 구조에서 신규 `/k/` 구조로 전환할 경우, 기존 링크 권위 보존을 위해 메인 페이지에서 `301 Permanent Redirect`를 반드시 처리하십시오.

3. **사이트맵 동기화**:
   - `sitemap.xml` 및 내부 SEO 바로가기 페이지 내의 모든 동적 키워드 링크는 쿼리가 아닌 `/k/...` 경로 구조로 생성 및 출력되어야 합니다.

4. **네이버 Yeti 봇 대응 최적화**:
   - 템플릿의 유사도가 90% 이상인 대규모 페이지 생성 시 스팸 필터에 걸릴 수 있으므로, 동적 페이지 내에 지역 정보나 고유 텍스트 비중을 최대한 높이십시오.
<!-- END:naver-seo-rules -->

