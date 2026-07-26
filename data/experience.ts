export interface ExperienceEntry {
  id: string;
  year: string;
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  headline: string;
  summary: string;
  impact: string[];
  systems: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "devops-engineer-ascertra",
    year: "2025 to Now",
    period: "Jan 2025 to Present",
    role: "DevOps Engineer",
    company: "Ascertra",
    location: "Bengaluru, India",
    current: true,
    headline: "Own production Azure infrastructure sustaining 99.7% uptime",
    summary:
      "End-to-end ownership of production Azure infrastructure for a multi-tenant SaaS platform, under 24x7 on-call, incident, and capacity management.",
    impact: [
      "Designed and deployed a secure, customer-facing multi-tenant file delivery platform (ASP.NET Core Web API, React, Azure SQL, Blob Storage) serving 60+ tenants with high availability and security compliance",
      "Engineered identity and access management with Microsoft Entra ID, Google OAuth, and SSO, enforcing fine-grained RBAC for auditable, secure package delivery to external clients",
      "Architected Azure Virtual Desktop environments with FSLogix profile management and Conditional Access policies for secure, policy-enforced remote access",
      "Configured Azure Front Door with custom routing rules, WAF policies, and CDN integration, optimizing global traffic distribution and latency for a customer-facing platform",
      "Own 20+ YAML-based Azure DevOps pipelines across dev, staging, and production with zero-downtime deployments",
      "Implemented Prometheus and Grafana alongside Azure Monitor for full-stack observability, and built an orphaned-resource detection tool with automated alerts to cut wasted cloud spend",
    ],
    systems: [
      "Multi-Tenant EDMS / File Delivery Platform",
      "AKS Production Clusters",
      "Azure Front Door (WAF/CDN)",
      "CI/CD & Observability Platform",
    ],
  },
  {
    id: "software-engineer-vela",
    year: "2024",
    period: "Jan 2024 to Dec 2024",
    role: "Software Engineer",
    company: "Vela Technologies India",
    location: "Bengaluru, India",
    headline: "Cut manual infra provisioning by ~90% with IaC",
    summary:
      "Full-stack engineer contributing to backend systems, frontend applications, and cloud platforms, while progressively taking ownership of DevOps workflows and production reliability.",
    impact: [
      "Designed and built scalable REST APIs using ASP.NET Core with the CQRS pattern, separating read/write concerns to improve maintainability, testability, and performance under load",
      "Automated Azure infrastructure provisioning with Bicep templates and PowerShell scripts, cutting manual provisioning effort by ~90% and enabling consistent, repeatable deployments",
      "Established Azure DevOps CI/CD pipelines from scratch, enforcing code quality standards, branch policies, and automated testing gates so only production-ready code shipped",
      "Developed frontend applications using React, TypeScript, and Redux-Saga for enterprise and customer-facing platforms",
      "Containerized applications using Docker and deployed workloads using Azure Container Instances and Azure Container Registry",
      "Built a secure Client Share platform integrating Azure Blob Storage, Azure SQL, App Service, and Microsoft Entra ID-based SSO",
    ],
    systems: [
      "Enterprise EDMS Product",
      "Client Share Portal",
      "Internal Automation & DevOps Tooling",
    ],
  },
  {
    id: "associate-software-engineer-vela",
    year: "2022 to 2023",
    period: "Jul 2022 to Dec 2023",
    role: "Associate Software Engineer",
    company: "Vela Technologies India",
    location: "Bengaluru, India",
    headline: "Shipped production systems at a consistent 99.9% SLA",
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
    id: "trainee-software-engineer-vela",
    year: "2022",
    period: "Mar 2022 to Jul 2022",
    role: "Trainee Software Engineer",
    company: "Vela Technologies India",
    location: "Bengaluru, India",
    headline: "Where it started: .NET, Azure, and first production code",
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
