"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Users, Cloud, GitBranch, Shield } from "lucide-react";

const metricGroups = [
  {
  title: "Software Engineering",
  items: [
    { value: "Full-Stack", label: "Production Systems", icon: Layout },
    { value: ".NET Core", label: "Backend Services", icon: Code2 },
    { value: "REST APIs", label: "Auth & Data", icon: Shield },
    { value: "Prod Ownership", label: "End-to-End", icon: Code2 },
  ],
},
  {
  title: "Product & Scale",
  items: [
    { value: "EDMS", label: "Enterprise Platform", icon: Users },
    { value: "60+", label: "Active Customers", icon: Users },
    { value: "Multi-Tenant", label: "SaaS Architecture", icon: Cloud },
    { value: "On-Call", label: "Production Support", icon: Shield },
  ],
},
  {
  title: "Cloud & Platform Engineering",
  items: [
    { value: "Azure", label: "PaaS & Networking", icon: Cloud },
    { value: "IaC", label: "Platform Automation", icon: GitBranch },
    { value: "CI/CD", label: "Release Pipelines", icon: GitBranch },
    { value: "Zero-Touch", label: "Provisioning", icon: Cloud },
  ],
}
];

export default function Metrics() {
  return (
    <section className="py-24">
      <div className="relative w-full max-w-[110rem] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        {metricGroups.map((group, i) => (
          <div key={group.title}>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-xs uppercase tracking-widest text-indigo-400 mb-8 text-center"
            >
              {group.title}
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.items.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="
                    px-5 py-5 rounded-2xl
                    backdrop-blur-sm bg-white/[0.035]
                    border border-white/[0.07]
                    flex flex-col items-center text-center
                  "
                >
                  <Icon className="w-5 h-5 text-indigo-400 mb-3" />
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-2">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
