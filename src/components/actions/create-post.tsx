"use server";

import { createClient } from "@app/lib/server";
import { revalidatePath } from "next/cache";

import { User } from "@app/context/UserContext";

export async function CreatePost(
  formData: FormData,
  attachmentUrl: string | null,
  user: User | null,
) {
  const content = formData.get("content") as string;
  const statusData = {
    content: content,
    author_id: user?.id,
    attachment: attachmentUrl || null,
  };

  const db = await createClient();

  await db.from("status").insert([statusData]);
  revalidatePath("/");
}
