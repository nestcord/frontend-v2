import Search from "@app/components/aside/aside-search";

export default function Aside() {
  return (
    <aside className="fixed h-screen top-0 right-4 w-80 flex flex-col gap-4 px-4 py-3 pt-1">
      <Search />

      {/* Vertical Line */}
      <div className="absolute top-0 left-0 w-px h-full bg-slate-400 dark:bg-slate-400"></div>
    </aside>
  );
}
