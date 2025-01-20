"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import { Copy, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
} from "@app/components/ui/dropdown-menu";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@app/components/ui/button";

import { Logout } from "@app/components/actions/logout";

import { useUser } from "@app/context/UserContext";
import Link from "next/link";

import { AtSign, LogOut } from 'lucide-react';
import AccountSettings from "../account/settings";
import { useState } from "react";
import { useTheme } from "next-themes";

type Checked = DropdownMenuCheckboxItemProps["checked"];
export default function SidebarAccount() {
  const { user } = useUser();
  const { setTheme } = useTheme();

  const [darkThemeCheck, setDarkThemeCheck] = useState<Checked>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showTheme, setShowTheme] = useState<"dark" | "light">("dark");

  const copyId = () => {
    const id = user?.id;
    console.log(id);
    navigator.clipboard.writeText(id!);
  };

  return (
    <div className="flex flex-col h-full justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full h-full justify-between hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-3"
          >
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@username"
                />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="ml-3 text-left hidden md:block">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-500">@{user?.username}</p>
              </div>
            </div>
            <MoreHorizontal className="h-5 w-5 hidden md:block" strokeWidth={3} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>User Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={`${user?.username}`}>
            <DropdownMenuItem>
              <AtSign className="h-5 w-5" strokeWidth={3} /> {user?.username}
            </DropdownMenuItem>
          </Link>
          <AccountSettings />

          <DropdownMenuCheckboxItem
            checked={darkThemeCheck}
            onCheckedChange={(checked) => {
              setDarkThemeCheck(checked); // Actualiza el estado del checkbox
              const newTheme = checked ? "dark" : "light"; // Determina el nuevo tema
              setShowTheme(newTheme); // Actualiza el estado de `showTheme`
              setTheme(newTheme); // Cambia el tema usando `setTheme` del hook
            }}
          >
            Dark Theme
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem onClick={copyId}>
              <Copy className="h-5 w-5" strokeWidth={3} />
              Copy User ID
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => Logout()}>
              Log Out <LogOut className="h-5 w-5" strokeWidth={3} />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}