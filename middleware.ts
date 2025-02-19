import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get('authjs.session-token')
    //first one
    if (request.nextUrl.pathname.startsWith('/login')) {
        if (sessionCookie)return NextResponse.redirect(new URL('/posts', request.url))
    }
    //second one
    if (request.nextUrl.pathname.startsWith('/posts')) {

        if (!sessionCookie)return NextResponse.redirect(new URL('/login', request.url))
        
    }
    return NextResponse.next();

}
