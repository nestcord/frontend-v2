"use client";
import Sidebar from "@app/components/sidebar/sidebar";
import Aside from "@app/components/aside/aside";
import { StatusFeed } from "@app/components/status/status-feed";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <>
      <Sidebar />
      <StatusFeed />
      <Aside />
    </>
  );
}
