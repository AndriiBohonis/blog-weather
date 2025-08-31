import { NextResponse } from "next/server";

export async function GET() {
  const temperature = Math.round(Math.random() * 50 - 10);
  return NextResponse.json({ temperature });
}
