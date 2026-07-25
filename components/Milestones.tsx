"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import StatusDot from "./StatusDot";

const current = experience[0];

export default function Milestones() {
  return (
    <section className="relative py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="font-mono-eyebrow text-xs uppercase text-slate-500 mb-16">
          $ cat role.txt
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <StatusDot label="Present day" tone="green" />
          </div>

          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.02] mb-6 text-glow-cyan">
            DevOps Engineer
          </h2>

          <p className="font-mono-eyebrow text-sm uppercase text-slate-500 mb-8">
            {current.company} · {current.location}
          </p>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
            {current.headline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
