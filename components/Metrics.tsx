"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Server,
  GitBranch,
  ShieldCheck,
  Cloud,
  Gauge,
  Users,
  Wrench,
} from "lucide-react";

const metricGroups = [
  {
    title: "Production Reliability",
    items: [
      { value: "99.7%", label: "Platform Uptime", icon: Activity },
      { value: "24×7", label: "On-Call & Incident Response", icon: ShieldCheck },
      { value: "20+", label: "CI/CD Pipelines Owned", icon: GitBranch },
      { value: "0", label: "Downtime Deployments", icon: Gauge },
    ],
  },
  {
    title: "Cloud & Platform Engineering",
    items: [
      { value: "AKS", label: "Production Cluster Ops", icon: Server },
      { value: "Terraform", label: "+ Bicep IaC", icon: Cloud },
      { value: "Front Door", label: "WAF / CDN Routing", icon: Cloud },
      { value: "Prometheus", label: "+ Grafana Observability", icon: Gauge },
    ],
  },
  {
    title: "Scale & Impact",
    items: [
      { value: "60+", label: "Tenant Platform", icon: Users },
      { value: "~90%", label: "Less Manual Provisioning", icon: Wrench },
      { value: "Multi-Tenant", label: "SaaS Architecture", icon: Cloud },
      { value: "Cost", label: "Optimization Tooling", icon: Activity },
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
              className="font-mono-eyebrow text-xs uppercase text-signal-cyan mb-8 text-center"
            >
              {group.title}
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.items.map(({ value, label, icon: Icon }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="panel rounded-2xl px-5 py-6 flex flex-col items-center text-center"
                >
                  <Icon className="w-5 h-5 text-signal-cyan mb-3" />
                  <p className="font-mono-eyebrow text-lg text-white">{value}</p>
                  <p className="font-mono-eyebrow text-[10px] uppercase text-slate-500 mt-2">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
