"use client";

import { motion, easeOut } from "framer-motion";
import { Award } from "lucide-react";
import Credentials from "./Credentials";
import { skillZones } from "@/data/skills";
import { certifications } from "@/data/credentials";

/* ================= ANIMATION VARIANTS ================= */

const zoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      staggerChildren: 0.12,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const pillVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};

/* ================= BADGE COMPONENT ================= */

function LearningBadges({ zone }: { zone: string }) {
  const badges = certifications.filter(
    (c) => c.link && c.zones?.includes(zone)
  );
  if (!badges.length) return null;

  return (
    <div className="mt-12">
      <p className="font-mono-eyebrow text-xs uppercase text-slate-500 mb-4">
        Verified Learning
      </p>

      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <a
            key={badge.title}
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-3 py-1.5
              rounded-full
              text-xs
              bg-signal-cyan/10
              border border-signal-cyan/20
              text-signal-cyan
              hover:bg-signal-cyan/20
              transition
            "
          >
            <Award className="w-4 h-4 text-signal-cyan" />
            <span className="font-medium">{badge.note}</span>
            <span className="opacity-80">, {badge.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function Skills() {
  return (
    <section className="py-28">
      <div className="relative w-full max-w-[110rem] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Engineering Capability Map
          </h2>
          <p className="text-lg text-slate-400">
            A layered view of how I design, build, secure, and operate
            full-stack software systems and cloud platforms in production.
          </p>
        </motion.div>

        {/* ZONES */}
        <div className="space-y-24">
          {skillZones.map((zone) => (
            <motion.div
              key={zone.zone}
              variants={zoneVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="panel p-10 rounded-3xl"
            >
              {/* ZONE HEADER */}
              <div className="mb-12">
                <h3 className="text-3xl font-semibold mb-3">
                  {zone.zone}
                </h3>
                <p className="text-slate-400 max-w-3xl">
                  {zone.description}
                </p>
              </div>

              {/* GROUPS */}
              <div className="grid md:grid-cols-2 gap-10">
                {zone.groups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <motion.div key={group.title} variants={groupVariants}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-signal-cyan/10 text-signal-cyan">
                          <Icon className="w-5 h-5" />
                        </span>
                        <h4 className="text-xl font-semibold">
                          {group.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {group.items.map((item) => (
                          <motion.span
                            key={item}
                            variants={pillVariants}
                            className="
                              px-3 py-1.5
                              rounded-full
                              text-xs
                              bg-white/[0.06]
                              border border-white/[0.08]
                              text-slate-300
                            "
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* LEARNING BADGES */}
              <LearningBadges zone={zone.zone} />
            </motion.div>
          ))}
        </div>

        <Credentials />
      </div>
    </section>
  );
}
