import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "I got this from an API call!" });
}
