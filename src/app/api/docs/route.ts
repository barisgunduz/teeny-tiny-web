import { NextResponse } from "next/server";
import { getDocs } from "@/server/getDocs";

export async function GET() {
  const docs = getDocs();
  return NextResponse.json(docs);
}
