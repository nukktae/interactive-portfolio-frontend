import { NextResponse } from 'next/server';
import { getInsights } from '@/services/analytics';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Optional date range filters
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    const startTimestamp = startDate ? parseInt(startDate, 10) : undefined;
    const endTimestamp = endDate ? parseInt(endDate, 10) : undefined;
    
    // Validate timestamps if provided
    if (startDate && isNaN(startTimestamp!)) {
      return NextResponse.json(
        { error: 'Invalid startDate format. Use Unix timestamp in milliseconds.' },
        { status: 400 }
      );
    }
    
    if (endDate && isNaN(endTimestamp!)) {
      return NextResponse.json(
        { error: 'Invalid endDate format. Use Unix timestamp in milliseconds.' },
        { status: 400 }
      );
    }
    
    const insights = await getInsights(startTimestamp, endTimestamp);
    
    return NextResponse.json(insights);
  } catch (error: unknown) {
    console.error('Analytics insights error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: 'Failed to get insights', details: errorMessage },
      { status: 500 }
    );
  }
}

