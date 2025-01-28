"use client";

import { db } from "@app/lib/client";
import { createContext, useContext, useEffect, useState } from "react";

export type User = {
  id: string | null;
  name: string | null;
  username: string | null;
  avatar_url: string | null;
};

type UserContext = {
  user: User | null;
};

type UserContextProviderProps = {
  value: User;
  children: React.ReactNode;
};
export const UserContext = createContext<UserContext | null>(null);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await db.auth.getUser();

      if (user) {
        const { data } = await db
          .from("users")
          .select("*")
          .eq("id", user.id)
          .single();

        // Asegúrate de incluir avatar_url
        const userData: User = {
          id: data.id,
          name: data.name,
          username: data.username,
          avatar_url: data.avatar_url || null,  // Asegurando que avatar_url esté presente
        };

        localStorage.setItem("user_id_cache", data.id);
        setUser(userData);
      }
    };
    fetchUser();
  }, []);

  const value: UserContext = {
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
}
