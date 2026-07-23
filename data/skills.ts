import {
  Layout,
  Server,
  Cloud,
  GitBranch,
  ShieldCheck,
  TestTube,
  Network,
  Settings,
  LucideIcon,
} from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface SkillZone {
  zone: string;
  description: string;
  groups: SkillGroup[];
}

export const skillZones: SkillZone[] = [
  {
    zone: "Application Layer",
    description:
      "Designing and building user-facing applications and backend services that form the functional core of enterprise products.",
    groups: [
      {
        title: "Full-Stack Engineering",
        icon: Layout,
        items: [
          "C#, JavaScript, TypeScript, Python, Go, SQL",
          "React, Redux, SPA Architecture",
          "HTML, CSS, SCSS, Tailwind CSS",
          "Blazor, SignalR",
        ],
      },
      {
        title: "Backend & API Development",
        icon: Server,
        items: [
          ".NET & ASP.NET Core (Web API)",
          "RESTful API Design",
          "EF Core, LINQ",
          "CQRS, SOLID, Design Patterns",
          "Async/Await, Dependency Injection",
        ],
      },
    ],
  },
  {
    zone: "Cloud & Platform Layer",
    description:
      "Architecting and operating scalable, multi-tenant cloud platforms on Microsoft Azure, from compute and networking to virtual desktops.",
    groups: [
      {
        title: "Cloud Engineering (Azure)",
        icon: Cloud,
        items: [
          "Azure Kubernetes Service (AKS): production clusters & autoscaling",
          "App Services, Container Apps, Azure Functions",
          "Azure Front Door: WAF & CDN routing",
          "Azure Virtual Desktop (AVD) & FSLogix",
          "Azure SQL, Storage, Cosmos DB",
          "Service Bus, AI Search",
        ],
      },
      {
        title: "DevOps & Platform Automation",
        icon: GitBranch,
        items: [
          "Azure DevOps CI/CD (YAML), GitHub Actions",
          "Terraform, Bicep, ARM Templates",
          "ArgoCD, GitOps",
          "Docker & Azure Container Registry",
          "Backstage (Internal Developer Platform), self-service golden paths",
          "PowerShell automation, zero-touch provisioning",
          "GitHub Copilot & AI coding agents",
        ],
      },
    ],
  },
  {
    zone: "Security & Reliability Layer",
    description:
      "Ensuring production systems are secure, observable, and resilient under real-world workloads.",
    groups: [
      {
        title: "Security & Identity",
        icon: ShieldCheck,
        items: [
          "Microsoft Entra ID, Conditional Access, RBAC",
          "JWT, OAuth 2.0, OpenID, SAML",
          "SSL/TLS, OWASP Practices, SAST",
          "Azure Key Vault",
          "OPA/Gatekeeper, Rego policy authoring",
          "SLSA provenance, cosign signing, SBOM generation",
        ],
      },
      {
        title: "Testing & Observability",
        icon: TestTube,
        items: [
          "Prometheus, Grafana",
          "Azure Monitor, Log Analytics, Application Insights",
          "OpenTelemetry, Uptime Kuma",
          "xUnit, VSTest",
          "Postman, Fiddler",
        ],
      },
    ],
  },
  {
    zone: "Integration & Engineering Practices",
    description:
      "Integrating systems while maintaining quality, cost discipline, documentation, and delivery standards across teams.",
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
          "Cloud cost optimization & orphaned-resource detection",
          "SSMS, SSRS, Redis, MySQL",
          "EDMS Domain Expertise",
          "DocFX Documentation",
          "Scrum / Agile Delivery",
        ],
      },
    ],
  },
];

// Curated top skills for condensed views (e.g. the /resume page). Keep this
// in sync with skillZones above rather than maintaining a separate list.
export const skillHighlights: string[] = [
  "Azure Kubernetes Service (AKS)",
  "Terraform / Bicep / ARM",
  "Azure DevOps CI/CD",
  "Azure Front Door (WAF/CDN)",
  "Prometheus / Grafana",
  "Microsoft Entra ID / RBAC",
  "C# / .NET Core",
  "React / TypeScript",
];
