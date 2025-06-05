import { dummyData } from "@/const/const";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) return;
    const filterData = dummyData.filter((data) => data.id === id);
    return NextResponse.json({ data: filterData[0] }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json("데이터를 불러오는데 실패하였습니다", {
      status: 400,
    });
  }
}
