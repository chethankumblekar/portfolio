"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Cloud, GitBranch, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Full-Stack Software Engineering",
    description:
      "Building end-to-end software systems including frontend interfaces, backend services, APIs, and data layers for enterprise products and internal platforms.",
    icon: Layout,
  },
  {
    title: "Backend & Platform Services",
    description:
      "Developing .NET Core services, REST APIs, authentication flows, and automation systems that power onboarding, integrations, and product workflows.",
    icon: Code2,
  },
  {
    title: "Cloud Platform Architecture",
    description:
      "Designing and operating scalable Azure platforms for multi-tenant products, customer environments, and production workloads.",
    icon: Cloud,
  },
  {
    title: "DevOps & Infrastructure Automation",
    description:
      "Automating infrastructure and delivery pipelines using IaC, CI/CD, and scripting to enable fast, reliable releases.",
    icon: GitBranch,
  },
  {
    title: "Security & Production Engineering",
    description:
      "Owning security, monitoring, and reliability through CIAM, Key Vault, alerts, on-call support, and performance tuning.",
    icon: ShieldCheck,
  },
];

export default function Pillars() {
  return (
    <section className="py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            What I <span className="text-indigo-400">Build</span>
          </h2>
          <p className="text-lg text-slate-400">
            Core engineering capabilities shaped by building real products,
            platforms, and production systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="
                  p-8 rounded-2xl
                  backdrop-blur-sm bg-white/[0.03]
                  border border-white/[0.06]
                "
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
