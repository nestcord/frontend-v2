"use server";

import { redirect } from "next/navigation";

import { createClient } from "@app/lib/server";

export async function Logout() {
  const db = await createClient();
  try {
    await db.auth.signOut();
  } finally {
    redirect("/");
  }
}
