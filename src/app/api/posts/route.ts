import { dummyData } from "@/const/const";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: dummyData }, { status: 200 });
}
