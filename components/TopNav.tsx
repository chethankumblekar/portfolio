"use client";

import { usePathname, useRouter } from "next/navigation";
import { Download } from "lucide-react";
import { RESUME_PDF } from "@/lib/constants";

type NavItem = {
  label: string;
  path: string;
  download?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Resume", path: "/resume" },
  {
    label: "PDF",
    path: RESUME_PDF,
    download: true,
  },
];

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item: NavItem) => {
    if (pathname === item.path) return;
    router.push(item.path);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-6 right-6 z-50 w-fit"
    >
      <div className="panel rounded-full flex items-center gap-6 px-6 py-3">
        {navItems.map((item) => {
          const isActive =
            !item.download &&
            (pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path)));

          const linkClassName = `
            flex items-center gap-1.5
            font-mono-eyebrow text-xs uppercase
            transition-colors duration-200
            ${
              isActive
                ? "text-signal-cyan"
                : "text-slate-300 hover:text-signal-cyan"
            }
          `;

          if (item.download) {
            return (
              <a
                key={item.label}
                href={item.path}
                download
                className={linkClassName}
              >
                <span>{item.label}</span>
                <Download className="w-3.5 h-3.5 opacity-70" />
              </a>
            );
          }

          return (
            <button
              key={item.label}
              onClick={() => handleNavigation(item)}
              aria-current={isActive ? "page" : undefined}
              className={linkClassName}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
