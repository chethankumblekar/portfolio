/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Server,
  Code2,
  GitBranch,
  ShieldCheck,
  Cpu,
  MessageSquare,
  Layout,
  Key,
  Github,
  ExternalLink,
} from "lucide-react";

/* ================= TECH STACK ICON MAP ================= */
const techIcons: Record<string, any> = {
  "C# / .NET": Code2,
  ".NET Core": Code2,
  "Web API": Server,
  "REST APIs": Server,
  Azure: Cloud,
  "Azure App Services": Cloud,
  "Azure SQL": Database,
  "Azure Storage": Database,
  "Azure Key Vault": ShieldCheck,
  "CI/CD": GitBranch,
  "Bicep / ARM": GitBranch,
  React: Layout,
  TypeScript: Code2,
  "Tailwind CSS": Layout,
  Redux: Code2,
  "Redux Thunk": Code2,
  "Redux Saga": Code2,
  SignalR: MessageSquare,
  "Google Auth": Key,
  "CIAM / External Entra": ShieldCheck,
  "AI / ML": Cpu,
  "Multi-Cloud": Cloud,
};

/* ================= TECH STACK ================= */
function TechStack({ items }: { items: string[] }) {
  return (
    <div className="mt-6">
      <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-3">
        {items.map((tech) => {
          const Icon = techIcons[tech] || Code2;
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-white/[0.05] border border-white/[0.08] text-slate-300"
            >
              <Icon className="w-3.5 h-3.5 text-indigo-400" />
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ================= PROJECT LINKS ================= */
function ProjectLinks({
  github,
  preview,
}: {
  github?: string;
  preview?: string;
}) {
  if (!github && !preview) {
    return (
      <span className="inline-block mt-6 text-xs uppercase tracking-widest text-slate-500">
        🔒 Internal / Confidential System
      </span>
    );
  }

  return (
    <div className="flex gap-6 mt-6">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:underline"
        >
          <Github className="w-4 h-4" />
          View Source
        </a>
      )}

      {preview && (
        <a
          href={preview}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:underline"
        >
          <ExternalLink className="w-4 h-4" />
          Live Preview
        </a>
      )}
    </div>
  );
}

/* ================= DIAGRAM ================= */
function Diagram({ title, reverse }: { title: string; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center ${
        reverse ? "order-2 md:order-1" : ""
      }`}
    >
      <div className="h-full min-h-[320px] w-full rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-500 text-sm uppercase tracking-widest text-center px-6">
        {title}
        <br />
        (Diagram Placeholder)
      </div>
    </motion.div>
  );
}

/* ================= SECTION ================= */
function Section({
  label,
  title,
  points,
  tech,
  diagram,
  github,
  preview,
  reverse,
}: {
  label: string;
  title: string;
  points: string[];
  tech: string[];
  diagram: string;
  github?: string;
  preview?: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-x-24 gap-y-16 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={reverse ? "order-1 md:order-2" : ""}
      >
        <p className="text-xs uppercase tracking-widest text-indigo-400 mb-4">
          {label}
        </p>

        <h3 className="text-3xl md:text-4xl font-semibold mb-8">{title}</h3>

        <ul className="space-y-2 list-disc list-inside text-slate-400 text-lg">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <TechStack items={tech} />
        <ProjectLinks github={github} preview={preview} />
      </motion.div>

      <Diagram title={diagram} reverse={reverse} />
    </div>
  );
}

/* ================= CASE STUDIES ================= */
export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Case Studies
          </h2>
          <p className="text-lg text-slate-400">
            A mix of enterprise systems and personal projects demonstrating
            full-stack software engineering, cloud architecture, DevOps
            automation, and real-world production ownership.
          </p>
        </motion.div>

        {/* ===== WORK PROJECTS ===== */}
        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-12">
          Work Projects · Confidential
        </h3>

        <Section
          label="Enterprise System"
          title="EDMS Product Platform"
          points={[
            "Built backend services and APIs for enterprise document management",
            "Implemented CIAM, OAuth, JWT, and external identity integration",
            "Owned production monitoring, alerts, and on-call support",
            "Supported 60+ customer environments",
          ]}
          tech={[
            "C# / .NET",
            ".NET Core",
            "Web API",
            "Azure App Services",
            "Azure SQL",
            "Azure Storage",
            "Azure Key Vault",
          ]}
          diagram="EDMS Platform Architecture"
        />

        <Section
          label="Enterprise System"
          title="Client Share Portal"
          points={[
            "Secure portal for delivering product packages and files",
            "Access control based on product, customer, and recipient",
            "CIAM, Google, and external Entra authentication",
            "Backend APIs for authorization and file metadata",
          ]}
          tech={[
            "C# / .NET",
            ".NET Core",
            "Web API",
            "Azure Storage",
            "Azure SQL",
            "Azure Key Vault",
            "CIAM / External Entra",
            "React",
            "TypeScript",
            "Redux Saga",
          ]}
          diagram="Client Portal → Secure Storage"
          reverse
        />

        {/* ===== PERSONAL PROJECTS ===== */}
        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-12 mt-32">
          Personal Projects
        </h3>

        <Section
          label="Personal Project"
          title="Multi-Cloud AI Infrastructure Advisor"
          points={[
            "Analyzed cloud posture across AWS, Azure, and GCP",
            "AI-based scoring and remediation recommendations",
            "Designed extensible backend for future SaaS use",
          ]}
          tech={["C# / .NET", "REST APIs", "AI / ML", "Multi-Cloud", "Azure"]}
          diagram="AI Analysis Pipeline"
          github="https://github.com/chethankumblekar/Multi-Cloud-AI-Cloud-Advisor-AWS-Azure-GCP-"
        />

        <Section
          label="Personal Project"
          title="Movie Rating Application (Frontend)"
          points={[
            "Frontend-only SPA built with React",
            "Consumed open-source movie APIs",
            "Redux & Thunk for state management",
            "Focused on UX and responsiveness",
          ]}
          tech={["React", "TypeScript", "Tailwind CSS", "Redux", "Redux Thunk"]}
          diagram="Frontend → Public APIs"
          github="https://github.com/chethankumblekar/movie-rating-app"
          reverse
        />

        <Section
          label="Personal Project"
          title="Real-Time Chat Application"
          points={[
            "SignalR-based real-time messaging",
            "Google authentication and authorization",
            "User sessions and message routing",
          ]}
          tech={["C# / .NET", "SignalR", "Google Auth"]}
          diagram="Client → SignalR Hub → Clients"
          github="https://github.com/chethankumblekar/ChatApp"
        />
      </div>
    </section>
  );
}
