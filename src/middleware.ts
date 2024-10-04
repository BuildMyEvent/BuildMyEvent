import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const hostname = host.split(':')[0];

  const isLocalhost = hostname === 'localhost';

  const subdomain = hostname.split('.')[0];

  console.log('Host:', host);
  console.log('Hostname:', hostname);
  console.log('Subdomain:', subdomain);

  if (!isLocalhost && subdomain && subdomain !== 'www' && subdomain !== 'buildmyevent') {
    request.nextUrl.pathname = `/event/${subdomain}${request.nextUrl.pathname}`;
    return NextResponse.rewrite(request.nextUrl);
  }

  return NextResponse.next();
}
