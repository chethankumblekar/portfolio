"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "Jan 2025 — Present",
    role: "DevOps Engineer (Platform & Product)",
    summary:
      "Continuing the same platform and product responsibilities, with increased ownership of infrastructure automation, reliability, and production operations.",
    impact: [
      "Owned CI/CD pipelines and infrastructure automation for enterprise platforms",
      "Maintained production uptime and on-call support for customer-facing systems",
      "Improved deployment consistency and reduced manual operations by ~90%",
      "Worked closely with developers to enable faster, safer releases",
    ],
    systems: [
      "EDMS Platform",
      "Client Share Portal",
      "Infrastructure Automation Platform",
    ],
  },
  {
    period: "2023 — Dec 2024",
    role: "Software Engineer",
    summary:
      "Full-stack engineer working on enterprise EDMS product, internal platforms, and customer-facing applications while gradually taking ownership of cloud and DevOps workflows.",
    impact: [
      "Built backend services and APIs using .NET Core and REST",
      "Developed frontend applications using React, TypeScript, and Redux",
      "Designed and operated Azure-based cloud platforms (App Services, SQL, Storage)",
      "Implemented CIAM, OAuth, JWT, and external identity integrations",
      "Handled production incidents, monitoring, and performance tuning",
    ],
    systems: [
      "Enterprise EDMS Product",
      "Client Share Portal",
      "Internal Automation Tools",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Associate Software Engineer",
    summary:
      "Focused on application development while learning cloud platforms, system design, and production operations.",
    impact: [
      "Contributed to backend features and APIs",
      "Worked with databases, authentication flows, and integrations",
      "Assisted with deployments, monitoring, and debugging production issues",
    ],
    systems: ["EDMS Core Services", "Internal Tools"],
  },
  {
    period: "2021 — 2022",
    role: "Trainee Engineer",
    summary:
      "Early-career role focused on building strong foundations in software development and enterprise systems.",
    impact: [
      "Learned .NET, SQL, REST APIs, and enterprise coding practices",
      "Supported senior engineers in feature development and bug fixes",
      "Gained exposure to cloud environments and CI/CD workflows",
    ],
    systems: ["Internal Applications", "Training Projects"],
  },
];

export default function Experience() {
  return (
    <section className="py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
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
              key={item.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative pl-10 border-l border-white/[0.08]"
            >
              {/* DOT */}
              <span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-indigo-400" />

              {/* PERIOD */}
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                {item.period}
              </div>

              {/* ROLE */}
              <h3 className="text-2xl font-semibold mb-4">{item.role}</h3>

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
                    className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300"
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
