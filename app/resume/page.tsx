"use client";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { experience } from "@/data/experience";
import { skillHighlights } from "@/data/skills";
import Credentials from "@/components/Credentials";
import StatusDot from "@/components/StatusDot";
import { RESUME_PDF } from "@/lib/constants";

export default function ResumePage() {
  return (
    <section className="relative min-h-screen pt-40 pb-32">
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <StatusDot label="Currently on-call · Ascertra" tone="green" className="mb-6" />

          <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-semibold mb-6 text-glow-cyan">
            Resume
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            DevOps & Cloud Engineer with 4+ years designing, building, and
            operating cloud-native infrastructure on Microsoft Azure, owning
            CI/CD, AKS cluster management, and Infrastructure as Code across a
            60+ tenant platform sustaining 99.7% uptime.
          </p>

          <a
            href={RESUME_PDF}
            download
            className="
              inline-flex items-center gap-3
              px-6 py-3 rounded-full
              panel
              font-mono-eyebrow text-sm uppercase
              text-slate-300 hover:text-white hover:border-signal-cyan/40
            "
          >
            <HiDownload className="w-4 h-4 text-signal-cyan" />
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* Embedded PDF */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel rounded-2xl overflow-hidden mb-24"
        >
          <object
            data={RESUME_PDF}
            type="application/pdf"
            className="w-full h-[85vh] min-h-[600px]"
          >
            <div className="flex flex-col items-center justify-center h-[50vh] min-h-[400px] gap-4 text-center px-6">
              <p className="text-slate-400">
                Your browser can&apos;t preview PDFs inline.
              </p>
              <a
                href={RESUME_PDF}
                download
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full panel font-mono-eyebrow text-sm uppercase text-slate-300 hover:text-white hover:border-signal-cyan/40"
              >
                <HiDownload className="w-4 h-4 text-signal-cyan" />
                Download Resume (PDF)
              </a>
            </div>
          </object>
        </motion.div>

        {/* Highlights */}
        <Section title="Experience">
          {experience.map((item) => (
            <ResumeItem
              key={item.id}
              title={`${item.role} (${item.company})`}
              subtitle={`${item.period} · ${item.location}`}
            >
              <ul className="list-disc pl-5 space-y-2">
                {item.impact.slice(0, 4).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </ResumeItem>
          ))}
        </Section>

        {/* Skills */}
        <Section title="Core Skills">
          <div className="flex flex-wrap gap-3">
            {skillHighlights.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2 rounded-full
                  text-sm
                  panel
                  text-slate-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Education + Certifications */}
        <Section title="Education & Certifications">
          <Credentials />
        </Section>
      </div>
    </section>
  );
}

/* ===== Components ===== */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-10 text-signal-cyan">
        {title}
      </h2>
      {children}
    </div>
  );
}

function ResumeItem({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="font-mono-eyebrow text-xs uppercase text-slate-500 mb-4">
        {subtitle}
      </p>
      <div className="text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}
