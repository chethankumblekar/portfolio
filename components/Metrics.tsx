"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Users, Cloud, GitBranch, Shield } from "lucide-react";

const metricGroups = [
  {
    title: "Software Engineering",
    items: [
      { value: "Full-Stack", label: "Web Applications", icon: Layout },
      { value: ".NET Core", label: "Backend Systems", icon: Code2 },
      { value: "REST APIs", label: "Auth & Data", icon: Shield },
      { value: "Prod Code", label: "Ownership", icon: Code2 },
    ],
  },
  {
    title: "Product & Scale",
    items: [
      { value: "EDMS", label: "Enterprise Product", icon: Users },
      { value: "60+", label: "Customers", icon: Users },
      { value: "Multi-Tenant", label: "Architecture", icon: Cloud },
      { value: "On-Call", label: "Production", icon: Shield },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { value: "Azure", label: "PaaS Platforms", icon: Cloud },
      { value: "IaC", label: "Bicep & ARM", icon: GitBranch },
      { value: "CI/CD", label: "Automated Releases", icon: GitBranch },
      { value: "Zero-Touch", label: "Provisioning", icon: Cloud },
    ],
  },
];

export default function Metrics() {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
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
