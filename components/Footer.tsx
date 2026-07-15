import Link from "next/link";
import { socials } from "@/data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <p className="font-mono-eyebrow text-xs uppercase text-signal-cyan mb-4">
              $ ./deploy_next_hire.sh
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold max-w-xl">
              Let&apos;s build something that stays{" "}
              <span className="text-signal-cyan">up</span>.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/case-studies"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                panel
                font-mono-eyebrow text-sm uppercase
                text-slate-300 hover:text-white hover:border-signal-cyan/40
              "
            >
              See the systems
            </Link>
            <a
              href="mailto:chethankumblekar@gmail.com"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-full
                bg-signal-cyan/10 border border-signal-cyan/30
                font-mono-eyebrow text-sm uppercase
                text-signal-cyan hover:bg-signal-cyan/20
                transition
              "
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 border-t border-white/[0.06]">
          <p className="font-mono-eyebrow text-xs uppercase text-slate-600">
            © {year} Chethan K. Built with Next.js.
          </p>

          <div className="flex flex-wrap gap-6">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-signal-cyan transition"
              >
                <Icon className="w-4 h-4" />
                <span className="font-mono-eyebrow uppercase text-xs">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
