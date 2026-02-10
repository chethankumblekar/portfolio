"use client";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

export default function ResumePage() {
  return (
    <section className="relative min-h-screen pt-40 pb-32">
      {/* background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-semibold mb-6">
            Resume
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Full-stack software engineer with experience building scalable
            backend systems, modern frontends, and cloud-native infrastructure
            on Azure.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
              inline-flex items-center gap-3
              px-6 py-3 rounded-full
              backdrop-blur-md bg-white/5 border border-white/10
              text-sm uppercase tracking-widest
              text-slate-300 hover:text-white hover:bg-white/10
            "
          >
            <HiDownload className="w-4 h-4 text-indigo-400" />
            Download PDF
          </a>
        </motion.div>

        {/* Experience */}
        <Section title="Experience">
          <ResumeItem
            title="Software Engineer"
            subtitle="Cloud & Full-Stack · 2.5+ Years"
          >
            <ul className="list-disc pl-5 space-y-3">
              <li>
                Built and maintained full-stack applications using
                <span className="text-indigo-400"> .NET, React, SQL Server</span>
                .
              </li>
              <li>
                Designed Azure infrastructure using App Services, Storage,
                Application Gateway, and WAF.
              </li>
              <li>
                Implemented CI/CD pipelines, monitoring, and automation to
                support production workloads.
              </li>
            </ul>
          </ResumeItem>
        </Section>

        {/* Skills */}
        <Section title="Core Skills">
          <div className="flex flex-wrap gap-3">
            {[
              "C# / .NET",
              "ASP.NET Core",
              "React / Next.js",
              "TypeScript",
              "Azure",
              "SQL Server",
              "CI/CD",
              "System Design",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2 rounded-full
                  text-sm
                  bg-white/5 border border-white/10
                  text-slate-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ResumeItem
            title="Bachelor’s Degree"
            subtitle="Computer Science / Engineering"
          >
            <p className="text-slate-400">
              Strong foundation in programming, data structures, databases, and
              software engineering principles.
            </p>
          </ResumeItem>
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
      <h2 className="text-2xl font-semibold mb-10 text-indigo-400">
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
      <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
        {subtitle}
      </p>
      <div className="text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}