"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { experience, ExperienceEntry } from "@/data/experience";
import StatusDot from "./StatusDot";

// Condensed teaser: current role + the strongest supporting highlight, in
// chronological order. Full history lives on /experience.
const chapters = [experience[1], experience[0]];

function Chapter({
  entry,
  index,
  total,
  scrollYProgress,
}: {
  entry: ExperienceEntry;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const fadeInStart = start - segment * 0.2;
  const fadeOutEnd = end + segment * 0.2;

  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, start, end, fadeOutEnd],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [fadeInStart, start], [56, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-eyebrow text-signal-cyan text-sm">
              CHAPTER {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            {entry.current && <StatusDot label="Present day" tone="green" />}
          </div>

          <h3 className="font-mono-eyebrow text-signal-green text-xl md:text-2xl mb-4">
            {entry.year}
          </h3>

          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.02] mb-6 text-glow-cyan">
            {entry.role}
          </h2>

          <p className="font-mono-eyebrow text-sm uppercase text-slate-500 mb-8">
            {entry.company} · {entry.location}
          </p>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
            {entry.headline}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Milestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${chapters.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* HEADER EYEBROW */}
        <div className="absolute top-24 left-0 right-0 z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="font-mono-eyebrow text-xs uppercase text-slate-500">
            $ cat career_log.txt, the journey so far
          </p>
        </div>

        {chapters.map((entry, i) => (
          <Chapter
            key={entry.id}
            entry={entry}
            index={i}
            total={chapters.length}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* PROGRESS RAIL */}
        <div className="absolute bottom-16 left-0 right-0 z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden mb-4">
            <motion.div
              style={{ width: barWidth }}
              className="h-full bg-gradient-to-r from-signal-cyan to-signal-green"
            />
          </div>
          <div className="flex justify-between">
            {chapters.map((entry) => (
              <span
                key={entry.id}
                className="font-mono-eyebrow text-[11px] uppercase text-slate-600"
              >
                {entry.year}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
