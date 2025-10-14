// app/api/songs/route.ts
import { NextResponse } from 'next/server';

const mockSongs = [
  { id: 1, title: 'Wonderwall' },
  { id: 2, title: 'Bohemian Rhapsody' },
  { id: 3, title: 'Hotel California' },
];

export async function GET() {
  return NextResponse.json(mockSongs);
}