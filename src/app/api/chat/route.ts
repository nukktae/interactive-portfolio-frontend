import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    return NextResponse.json(
      { error: 'Please use the backend API endpoint' },
      { status: 404 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 