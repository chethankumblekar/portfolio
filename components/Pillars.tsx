"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, ShieldCheck, Gauge, Code2 } from "lucide-react";

const pillars = [
  {
    title: "Cloud Platform Architecture",
    description:
      "Architecting and operating scalable Azure platforms, including AKS, App Services, Front Door, and networking, for multi-tenant SaaS products with high availability and resilience.",
    icon: Cloud,
  },
  {
    title: "DevOps & Infrastructure Automation",
    description:
      "Owning CI/CD pipelines in Azure DevOps and automating infrastructure with Terraform, Bicep, and PowerShell, cutting manual provisioning effort and enabling zero-downtime releases.",
    icon: GitBranch,
  },
  {
    title: "Observability & Reliability Engineering",
    description:
      "Running production systems under 24x7 on-call, with full-stack observability via Prometheus, Grafana, and Azure Monitor, plus incident management, RCA, and capacity planning.",
    icon: Gauge,
  },
  {
    title: "Security & Identity Engineering",
    description:
      "Owning production security through Microsoft Entra ID, Conditional Access, RBAC, Key Vault, and SAST, enforcing auditable, policy-governed access for external clients and internal teams alike.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Stack Software Engineering",
    description:
      "Designing and shipping the systems that run on top of the platform, including .NET Core APIs, React frontends, and CQRS-based services, end-to-end, from architecture to production support.",
    icon: Code2,
  },
];

export default function Pillars() {
  return (
    <section className="py-28">
     <div className="relative w-full max-w-[110rem] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            How I <span className="text-signal-cyan">Engineer</span>
          </h2>
          <p className="text-lg text-slate-400">
            Core engineering strengths shaped by building and operating real-world production systems at scale.
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
                className="panel p-8 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-5 h-5 text-signal-cyan" />
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
