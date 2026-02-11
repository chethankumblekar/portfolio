"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

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
    href: "mailto:chethankumblekar@gmail.com",
    icon: SiGmail,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      <div className="relative w-full max-w-[110rem] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-[clamp(3.2rem,6.5vw,6rem)] font-semibold leading-[0.95] mb-6">
              Chethan K
            </h1>

            <p className="text-2xl text-indigo-400 mb-10">
              Senior Software Engineer · Cloud & Platform Engineering
            </p>

            <p className="text-xl text-slate-400 leading-relaxed mb-14">
              I design, build, and operate production-grade software systems —
              spanning frontend applications, backend services, and cloud
              platforms — with a strong focus on platform reliability,
              infrastructure automation, and scalable system design.
            </p>

            <div className="flex flex-wrap gap-4">
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
                    transition
                  "
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span className="uppercase tracking-widest">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — PHOTO */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex justify-center md:justify-end"
          >
            <div
              className="
                relative w-64 h-64 md:w-72 md:h-72
                rounded-3xl
                overflow-hidden
                backdrop-blur-sm
                bg-white/[0.04]
                border border-white/[0.08]
              "
            >
              <Image
                src="/chethan.jpeg"
                alt="Chethan K"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}