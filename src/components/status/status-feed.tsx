"use client";

import useSWR from "swr";
import { StatusCard } from "@app/components/status/status-card";
import { StatusProps } from "@app/lib/types";
import { StatusLoad } from "./status-load";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function StatusFeed() {
  const { data, isLoading } = useSWR("/api/status/feed", fetcher);

  if (isLoading) return <StatusLoad />;

  return (
    <section
      className="mx-auto w-full max-w-2xl px-4 py-6 space-y-4"
      id="feed"
    >
      {data.map((status: StatusProps) => (
        <StatusCard key={status.id} {...status} />
      ))}
    </section>
  );
}
