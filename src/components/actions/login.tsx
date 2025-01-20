import { db } from "@app/lib/client";

export async function Login() {
  await db.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });
}
