import { createClient } from "@app/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const id = request.nextUrl.searchParams.get("id");
  const db = await createClient();

  const { data } = await db.from("status").select("*").eq("id", id).single();

  return NextResponse.json(data);
}
