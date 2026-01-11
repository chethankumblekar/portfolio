"use client";

import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/chethankumblekar",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chethankumblekar",
    icon: SiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:chethan@example.com",
    icon: SiGmail,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[0.95] mb-6">
            Chethan K
          </h1>

          <p className="text-2xl text-indigo-400 mb-10">
            Full-Stack Software Engineer · Cloud & DevOps
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  px-4 py-2 rounded-full
                  backdrop-blur-md bg-white/5 border border-white/10
                  text-sm text-slate-300 hover:text-white hover:bg-white/10
                "
              >
                <Icon className="w-4 h-4 text-indigo-400" />
                <span className="uppercase tracking-widest">{label}</span>
              </a>
            ))}
          </div>

          <p className="text-xl text-slate-400 leading-relaxed">
            I build full-stack software systems — from frontend interfaces and
            backend services to cloud platforms and DevOps automation — powering
            enterprise products, internal tools, and customer-facing
            applications in production.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
