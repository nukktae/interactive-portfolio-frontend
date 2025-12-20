import { NextResponse } from 'next/server';
import { addVisit, getClientIP } from '@/services/analytics';
import type { TrackVisitRequest } from '@/types/analytics';

export async function POST(request: Request) {
  try {
    const body: TrackVisitRequest = await request.json();
    const { page, referrer, language, timezone } = body;

    if (!page) {
      return NextResponse.json(
        { error: 'Page is required' },
        { status: 400 }
      );
    }

    // Get client information
    const ip = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || undefined;

    // Add visit to analytics
    const visit = await addVisit(
      ip,
      page,
      referrer,
      userAgent,
      language,
      timezone
    );

    return NextResponse.json({ 
      success: true, 
      visitId: visit.id 
    });
  } catch (error: unknown) {
    console.error('Analytics tracking error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: 'Failed to track visit', details: errorMessage },
      { status: 500 }
    );
  }
}

// Allow GET for simple tracking (optional)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '/';
    const referrer = searchParams.get('referrer') || undefined;
    const language = searchParams.get('language') || undefined;
    const timezone = searchParams.get('timezone') || undefined;

    // Get client information
    const ip = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || undefined;

    // Add visit to analytics
    const visit = await addVisit(
      ip,
      page,
      referrer,
      userAgent,
      language,
      timezone
    );

    return NextResponse.json({ 
      success: true, 
      visitId: visit.id 
    });
  } catch (error: unknown) {
    console.error('Analytics tracking error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: 'Failed to track visit', details: errorMessage },
      { status: 500 }
    );
  }
}

