import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Intercept root page requests with '?k=...' query parameter
  if (url.pathname === '/' && url.searchParams.has('k')) {
    const k = url.searchParams.get('k');
    if (k) {
      const decodedKeyword = decodeURIComponent(k);
      const redirectUrl = new URL(`/k/${encodeURIComponent(decodedKeyword)}`, request.url);
      
      // Return 301 Permanent Redirect
      return NextResponse.redirect(redirectUrl, 301);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
