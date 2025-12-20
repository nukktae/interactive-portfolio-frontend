import { NextResponse } from 'next/server';
import { getChatLogInsights } from '@/services/chatLog';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Validate API key
    const providedKey = searchParams.get('key');
    const secretKey = process.env.ANALYTICS_SECRET_KEY;
    
    if (!secretKey) {
      console.error('ANALYTICS_SECRET_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Analytics service not configured' },
        { status: 500 }
      );
    }
    
    if (!providedKey || providedKey !== secretKey) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid or missing access key' },
        { status: 401 }
      );
    }
    
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
    
    const insights = await getChatLogInsights(startTimestamp, endTimestamp);
    
    return NextResponse.json(insights);
  } catch (error: unknown) {
    console.error('Chat logs insights error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { error: 'Failed to get chat logs', details: errorMessage },
      { status: 500 }
    );
  }
}

