import SidebarAccount from "@app/components/sidebar/sidebar-account";
import SidebarButton from "@app/components/sidebar/sidebar-button";
import SidebarPost from "@app/components/sidebar/sidebar-post";

import { HomeIcon as House, Search, Bell, Send } from 'lucide-react';

export type NavLink = {
  href: string;
  name: string;
  icon: React.JSX.Element;
  disabled?: boolean;
};

const NavLinks: Readonly<NavLink[]> = [
  {
    href: "/home",
    name: "Home",
    icon: <House />,
  },
  {
    href: "/discover",
    name: "Discover",
    icon: <Search />,
  },
  {
    href: "/notifications",
    name: "Notifications",
    icon: <Bell />,
  },
  {
    href: "/messages",
    name: "Messages",
    icon: <Send />,
  },
];

export default function Sidebar() {
  return (
    <header
      id="sidebar"
      className="fixed flex flex-col h-screen transition-opacity duration-200 md:w-[275px] md:right-1/2 md:translate-x-1/2 lg:right-1/4 lg:translate-x-0 bottom-0 left-0 right-0 md:top-0 md:bottom-auto"
    >
      {/* Principal navigation */}
      <div className="flex-grow md:block hidden">
        <nav className="flex flex-col items-start p-2">
          {NavLinks.map(({ ...data }) => (
            <SidebarButton {...data} key={data.href} />
          ))}

          <SidebarPost />
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex justify-around items-center bg-white dark:bg-gray-800 p-2">
        {NavLinks.map(({ href, icon }) => (
          <SidebarButton key={href} href={href} name="" icon={icon} />
        ))}
      </div>

      {/* User account */}
      <div className="p-4 hidden md:block">
        <SidebarAccount />
      </div>

      {/* Vertical divider */}
      <div className="absolute top-0 right-0 w-px h-full bg-slate-400 dark:bg-slate-400 hidden md:block"></div>
    </header>
  );
}