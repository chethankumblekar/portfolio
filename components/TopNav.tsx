"use client";

import { usePathname, useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";

type NavItem = {
  label: string;
  path: string;
  external?: boolean;
};

const RESUME_LINK =
  "https://drive.google.com/file/d/1wCWzCbXy-x89WI6NlQwUhMg4DavrANrv/view?usp=sharing";

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  {
    label: "Resume",
    path: RESUME_LINK,
    external: true,
  },
];

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item: NavItem) => {
    if (item.external) {
      window.open(item.path, "_blank", "noopener,noreferrer");
      return;
    }

    if (pathname === item.path) return;
    router.push(item.path);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="
        fixed top-6 right-6 z-50
        backdrop-blur-md
        bg-white/[0.03]
        border border-white/[0.08]
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
              onClick={() => handleNavigation(item)}
              aria-current={isActive ? "page" : undefined}
              className={`
                flex items-center gap-1.5
                text-xs uppercase tracking-widest
                transition-colors duration-200
                ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-indigo-400"
                }
              `}
            >
              <span>{item.label}</span>

              {item.external && (
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}