import { createClient } from "@app/lib/server";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = await params

    const db = await createClient();

    const { data } = await db
    .from('status')
    .select('*')
    .eq('id', id)
    .single();

    return NextResponse.json(data);
}
