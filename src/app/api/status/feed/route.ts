import { createClient } from "@app/lib/server";
import { NextResponse } from "next/server";

export async function GET () {
    const db = await createClient();

    const { data } = await db
    .from('status')
    .select('id, content, author_id:users(name, username, avatar_url, id), likes, comments, views, created_at')
    .order('created_at', { ascending: false })
    .limit(10);

    return NextResponse.json(data);
}