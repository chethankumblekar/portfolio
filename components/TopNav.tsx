"use client";

import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/case-studies", label: "Case Studies" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/resume.pdf", label: "Resume", external: true },
];

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (path: string, external?: boolean) => {
    if (external) {
      window.open(path, "_blank");
      return;
    }
    if (pathname === path) return;
    router.push(path);
  };

  return (
    <nav
      className="
        fixed top-6 right-6 z-50
        backdrop-blur-sm
        bg-transparent
        border border-white/5
        rounded-full
      "
    >
      <div className="flex items-center gap-6 px-6 py-3">
        {navItems.map((item) => {
          const isActive =
            !item.external &&
            (pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path)));

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path, item.external)}
              className={`
                text-xs uppercase tracking-widest
                transition-colors
                ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-indigo-400"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
