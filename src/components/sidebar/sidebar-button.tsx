"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@app/lib/utils";

import { NavLink } from "@app/components/sidebar/sidebar";

type SidebarButtonProps = NavLink & {};

export default function SidebarButton({
  href,
  name,
  icon,
}: SidebarButtonProps) {
  const route = usePathname();
  const activeRoute = route === href;

  return (
    <Link href={href} className="w-full">
      <div
        className={cn(
          `flex items-center gap-3 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800
          transition-colors duration-200 justify-center md:justify-start`,
          activeRoute && "font-bold text-black dark:text-white",
        )}
      >
        <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
        <span className="text-lg hidden md:inline">{name}</span>
      </div>
    </Link>
  );
}
