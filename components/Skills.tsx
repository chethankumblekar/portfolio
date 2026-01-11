"use client";

import { motion, easeOut } from "framer-motion";
import {
  Layout,
  Server,
  Cloud,
  GitBranch,
  ShieldCheck,
  TestTube,
  Network,
  Settings,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const zoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      staggerChildren: 0.12,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const pillVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};

/* ================= GROUPED SKILLS DATA ================= */

const skillZones = [
  {
    zone: "Application Layer",
    description:
      "Building user-facing applications and backend services that form the core of enterprise products.",
    groups: [
      {
        title: "Full-Stack Engineering",
        icon: Layout,
        items: [
          "C#, JavaScript, TypeScript, Python, SQL",
          "React, Redux, SPA Architecture",
          "HTML, CSS, SCSS, Tailwind CSS",
          "Blazor, SignalR",
        ],
      },
      {
        title: "Backend Development",
        icon: Server,
        items: [
          ".NET, .NET Core, ASP.NET Web API",
          "REST API Design",
          "EF Core, LINQ",
          "CQRS, SOLID, Design Patterns",
          "Async / Await, Dependency Injection",
        ],
      },
    ],
  },
  {
    zone: "Cloud & Platform Layer",
    description:
      "Designing and operating scalable, multi-tenant cloud platforms on Azure.",
    groups: [
      {
        title: "Cloud Engineering (Azure)",
        icon: Cloud,
        items: [
          "Azure App Services & Functions",
          "Azure SQL, Storage, Cosmos DB",
          "Service Bus, AI Search",
          "Application Gateway, Load Balancer",
          "Azure AD B2C / CIAM",
        ],
      },
      {
        title: "DevOps & Automation",
        icon: GitBranch,
        items: [
          "Azure DevOps CI/CD",
          "GitHub Actions",
          "Docker & Containers",
          "Bicep, ARM, PowerShell",
          "Zero-Touch Provisioning",
        ],
      },
    ],
  },
  {
    zone: "Security & Reliability Layer",
    description:
      "Ensuring systems are secure, observable, and reliable in production.",
    groups: [
      {
        title: "Security & Identity",
        icon: ShieldCheck,
        items: [
          "JWT, OAuth 2.0, OpenID, SAML",
          "SSL / TLS, OWASP",
          "Azure Key Vault",
          "Access Control & Secrets",
        ],
      },
      {
        title: "Testing & Observability",
        icon: TestTube,
        items: [
          "xUnit, VSTest",
          "Postman, Fiddler",
          "Application Insights",
          "Azure Monitor",
          "Prometheus, OpenTelemetry",
          "Uptime Kuma",
        ],
      },
    ],
  },
  {
    zone: "Integration & Engineering Practices",
    description:
      "Connecting systems and maintaining quality, documentation, and delivery standards.",
    groups: [
      {
        title: "APIs & Integrations",
        icon: Network,
        items: ["RESTful APIs", "SendGrid", "Twilio", "Webhooks"],
      },
      {
        title: "Tools & Practices",
        icon: Settings,
        items: [
          "SSMS, SSRS",
          "Redis, MySQL",
          "EDMS Domain Knowledge",
          "DocFX Documentation",
          "Scrum / Agile",
        ],
      },
    ],
  },
];

/* ================= COMPONENT ================= */

export default function Skills() {
  return (
    <section className="py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Engineering Capability Map
          </h2>
          <p className="text-lg text-slate-400">
            A layered view of how I design, build, secure, and operate
            full-stack software systems and cloud platforms in production.
          </p>
        </motion.div>

        {/* ZONES */}
        <div className="space-y-24">
          {skillZones.map((zone) => (
            <motion.div
              key={zone.zone}
              variants={zoneVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="
                p-10
                rounded-3xl
                backdrop-blur-sm
                bg-white/[0.03]
                border border-white/[0.06]
              "
            >
              {/* ZONE HEADER */}
              <div className="mb-10">
                <h3 className="text-3xl font-semibold mb-3">{zone.zone}</h3>
                <p className="text-slate-400 max-w-3xl">{zone.description}</p>
              </div>

              {/* GROUPS */}
              <div className="grid md:grid-cols-2 gap-10">
                {zone.groups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <motion.div key={group.title} variants={groupVariants}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                          <Icon className="w-5 h-5" />
                        </span>
                        <h4 className="text-xl font-semibold">{group.title}</h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {group.items.map((item) => (
                          <motion.span
                            key={item}
                            variants={pillVariants}
                            className="
                              px-3 py-1.5
                              rounded-full
                              text-xs
                              bg-white/[0.06]
                              border border-white/[0.08]
                              text-slate-300
                            "
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
