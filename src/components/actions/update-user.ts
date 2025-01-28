"use server";

import { createClient } from "@app/lib/server";
import { revalidatePath } from "next/cache";

type User = {
  name?: string;
  username?: string;
  avatar_url?: string;
  email?: string;
  biography?: string;
};

export async function updateUser({ username, name }: User) {
  const db = await createClient();
  const user = await db.auth.getUser();

  try {
    await db
      .from("users")
      .update({
        name: name,
        username: username,
      })
      .eq("id", user.data.user?.id);
    revalidatePath("/home");
  } finally {
    revalidatePath("/home");
  }
}
