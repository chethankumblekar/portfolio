"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import StatusDot from "./StatusDot";

export default function Experience() {
  return (
    <section className="py-28">
      <div className="relative w-full max-w-[110rem] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Experience
          </h2>
          <p className="text-lg text-slate-400">
            A clear progression from trainee to full-stack engineer and platform
            owner, with increasing responsibility across software development,
            cloud platforms, and DevOps operations.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="space-y-20">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative pl-10 border-l border-white/[0.08]"
            >
              {/* DOT */}
              <span
                className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full ${
                  item.current
                    ? "bg-signal-green animate-pulse-dot"
                    : "bg-signal-cyan"
                }`}
              />

              {/* PERIOD */}
              <div className="flex items-center gap-4 mb-2">
                <div className="font-mono-eyebrow text-xs uppercase text-slate-500">
                  {item.period}
                </div>
                {item.current && <StatusDot label="Current role" tone="green" />}
              </div>

              {/* ROLE */}
              <h3 className="text-2xl font-semibold mb-1">
                {item.role}
                <span className="text-slate-500 font-normal"> ({item.company})</span>
              </h3>
              <p className="font-mono-eyebrow text-xs uppercase text-slate-600 mb-4">
                {item.location}
              </p>

              {/* SUMMARY */}
              <p className="text-slate-400 max-w-3xl mb-6">{item.summary}</p>

              {/* IMPACT */}
              <ul className="space-y-2 list-disc list-inside text-slate-300 mb-6">
                {item.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* SYSTEMS */}
              <div className="flex flex-wrap gap-3">
                {item.systems.map((sys) => (
                  <span
                    key={sys}
                    className="px-3 py-1 text-xs rounded-full panel text-slate-300"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
