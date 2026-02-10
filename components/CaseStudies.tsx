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
  Terraform: GitBranch,
  Docker: Cloud,
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
        🔒 Enterprise / Confidential System
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
        (Architecture Diagram)
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
            A selection of enterprise systems and personal projects demonstrating
            full-stack engineering, cloud architecture, DevOps automation, and
            real-world production ownership.
          </p>
        </motion.div>

        {/* ===== ENTERPRISE SYSTEMS ===== */}
        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-12">
          Enterprise Systems · Confidential
        </h3>

        <Section
          label="Enterprise Platform"
          title="EDMS Product Platform"
          points={[
            "Designed and developed backend services and APIs for an enterprise document management platform",
            "Implemented secure identity and access flows using CIAM, OAuth 2.0, JWT, and external identity providers",
            "Owned production monitoring, alerting, and incident response for critical customer-facing workflows",
            "Operated and supported 60+ customer environments within a multi-tenant SaaS architecture",
          ]}
          tech={[
            "C# / .NET",
            ".NET Core",
            "Web API",
            "Azure App Services",
            "Azure SQL",
            "Azure Storage",
            "Azure Key Vault",
            "CI/CD",
          ]}
          diagram="EDMS Platform Architecture"
        />

        <Section
          label="Enterprise Platform"
          title="Client Share Portal"
          points={[
            "Designed a secure customer-facing portal for controlled delivery of product packages and documents",
            "Implemented fine-grained access control based on customer, product, and recipient context",
            "Integrated CIAM, Google OAuth, and external Microsoft Entra authentication providers",
            "Built backend authorization and metadata services to securely manage file access and lifecycle",
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
            "Designed a system to analyze cloud posture across AWS, Azure, and GCP environments",
            "Applied AI-based scoring to identify risks and generate prioritized remediation recommendations",
            "Architected the backend with extensibility in mind for future SaaS or platform use cases",
          ]}
          tech={[
            "C# / .NET",
            "REST APIs",
            "AI / ML",
            "Multi-Cloud",
            "Azure",
            "Terraform",
          ]}
          diagram="AI Analysis Pipeline"
          github="https://github.com/chethankumblekar/Multi-Cloud-AI-Cloud-Advisor-AWS-Azure-GCP-"
        />

        <Section
          label="Personal Project"
          title="Movie Rating Application (Frontend)"
          points={[
            "Developed a frontend-only single-page application using React and TypeScript",
            "Integrated public movie APIs to fetch and display dynamic content",
            "Implemented Redux and Thunk for predictable client-side state management",
            "Focused on user experience, responsiveness, and clean component design",
          ]}
          tech={[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "Redux Thunk",
          ]}
          diagram="Frontend → Public APIs"
          github="https://github.com/chethankumblekar/movie-rating-app"
          reverse
        />

        <Section
          label="Personal Project"
          title="Real-Time Chat Application"
          points={[
            "Built a real-time messaging system using SignalR for low-latency communication",
            "Implemented Google-based authentication and authorization flows",
            "Designed user session handling and message routing for concurrent clients",
          ]}
          tech={["C# / .NET", "SignalR", "Google Auth", "Docker"]}
          diagram="Client → SignalR Hub → Clients"
          github="https://github.com/chethankumblekar/ChatApp"
        />
      </div>
    </section>
  );
}