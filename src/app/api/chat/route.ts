import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  return NextResponse.json(
    { error: 'Please use the backend API endpoint' },
    { status: 404 }
  );
} 