"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "Jan 2025 — Present",
    role: "DevOps Engineer · Azure Platform Engineering",
    summary:
      "Owning and operating Azure production infrastructure for a multi-tenant enterprise platform, with end-to-end responsibility across infrastructure automation, CI/CD governance, reliability, and production operations.",
    impact: [
      "Owned and operated Azure production infrastructure for a multi-tenant SaaS platform, automating provisioning and lifecycle management using Bicep, PowerShell, and Azure CLI",
      "Architected and governed CI/CD pipelines in Azure DevOps, integrating security scans, quality gates, and policy enforcement for safe and compliant releases",
      "Led on-premises to Azure PaaS migration initiatives, modernizing legacy systems and reducing infrastructure management overhead by ~80%",
      "Designed and implemented high availability and disaster recovery architectures using Application Gateway, Load Balancer, and zone redundancy",
      "Established observability and alerting using Azure Monitor and Application Insights, enabling faster incident detection and reduced MTTR",
      "Partnered with engineering teams to improve deployment strategies, release automation, and overall production stability",
    ],
    systems: [
      "Multi-Tenant EDMS Platform",
      "Azure PaaS Infrastructure",
      "CI/CD & Infrastructure Automation Platform",
    ],
  },
  {
    period: "Jan 2024 — Dec 2024",
    role: "Software Engineer · Full-Stack & Cloud",
    summary:
      "Full-stack engineer contributing to backend systems, frontend applications, and cloud platforms, while progressively taking ownership of DevOps workflows and production reliability.",
    impact: [
      "Designed and built scalable REST APIs using ASP.NET Core, implementing caching strategies that improved data retrieval performance by ~40%",
      "Developed frontend applications using React, TypeScript, and Redux-Saga for enterprise and customer-facing platforms",
      "Automated cloud infrastructure provisioning using Infrastructure-as-Code (Bicep, PowerShell, Azure CLI), eliminating manual configuration drift",
      "Containerized applications using Docker and deployed workloads using Azure Container Instances and Azure Container Registry",
      "Designed and implemented high availability and disaster recovery strategies, including zone redundancy and a 24×7 alerting system using Azure Functions and Twilio",
      "Built a secure Client Share platform using ASP.NET Core and React, integrating Azure Blob Storage, Azure SQL, App Service, and Microsoft Entra ID–based SSO",
    ],
    systems: [
      "Enterprise EDMS Product",
      "Client Share Portal",
      "Internal Automation & DevOps Tooling",
    ],
  },
  {
    period: "Jul 2022 — Dec 2023",
    role: "Associate Software Engineer",
    summary:
      "Contributed to core product development while gaining hands-on experience in system design, cloud platforms, and production operations.",
    impact: [
      "Built and maintained document workflow UIs using React, JSON Forms, and Redux-Saga, delivering reusable and maintainable components",
      "Contributed to system design discussions, improving scalability, performance, and operational resilience",
      "Deployed, monitored, and troubleshot production applications, consistently meeting 99.9% SLA requirements",
      "Optimized SQL queries and stored procedures, improving query performance by ~30% and reducing report generation time by ~50%",
      "Implemented secure API access and licensing mechanisms to prevent unlicensed usage",
    ],
    systems: ["EDMS Core Services", "Cloud Infrastructure Platform", "Internal Platforms"],
  },
  {
    period: "Mar 2022 — Jul 2022",
    role: "Trainee Software Engineer",
    summary:
      "Early-career role focused on building strong foundations in backend development, cloud services, and enterprise engineering practices.",
    impact: [
      "Engineered a solution to bypass email attachment size limits using Azure Blob Storage and Cosmos DB",
      "Integrated Azure AD B2C with Google, Facebook, and Microsoft authentication providers",
      "Developed foundational knowledge of .NET, REST APIs, SQL Server, and enterprise development workflows",
    ],
    systems: ["Internal Applications", "Cloud POCs", "Training Projects"],
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
