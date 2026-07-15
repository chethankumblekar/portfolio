"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StatusDot from "./StatusDot";
import { socials } from "@/data/socials";

const headlineMetrics = [
  { value: "99.7%", label: "Platform Uptime" },
  { value: "60+", label: "Tenants Served" },
  { value: "20+", label: "CI/CD Pipelines" },
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
            <StatusDot label="Currently on-call · Ascertra" tone="green" className="mb-6" />

            <h1 className="text-[clamp(3.2rem,6.5vw,6rem)] font-semibold leading-[0.95] mb-6 text-glow-cyan">
              Chethan K
            </h1>

            <p className="font-mono-eyebrow text-signal-cyan text-sm md:text-base mb-8 uppercase">
              Cloud Engineer · Platform Engineer · DevOps Engineer
            </p>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              I design, build, and operate production-grade cloud
              infrastructure on Microsoft Azure — owning AKS, CI/CD,
              security, and observability end-to-end for a multi-tenant SaaS
              platform running 24x7 in production.
            </p>

            {/* HEADLINE METRICS */}
            <div className="flex flex-wrap gap-4 mb-10">
              {headlineMetrics.map((m) => (
                <div
                  key={m.label}
                  className="panel rounded-xl px-5 py-3 flex flex-col"
                >
                  <span className="font-mono-eyebrow text-2xl text-white">
                    {m.value}
                  </span>
                  <span className="font-mono-eyebrow text-[10px] uppercase text-slate-500 mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

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
                    panel
                    text-sm text-slate-300 hover:text-white hover:border-signal-cyan/40
                    transition
                  "
                >
                  <Icon className="w-4 h-4 text-signal-cyan" />
                  <span className="font-mono-eyebrow uppercase">{label}</span>
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
                panel
              "
            >
              <Image
                src="/chethan.jpeg"
                alt="Chethan K"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-graphite-900/80 backdrop-blur border border-white/10 font-mono-eyebrow text-[10px] text-signal-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse-dot" />
                  LIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
