import { Project } from "@/types/project";

export const projects: Project[] = [
{
slug: "edms-platform",

title: "EDMS Product Platform",

category: "Enterprise Platform",

description:
"Enterprise Document Management System used by multiple enterprise customers for secure document storage, processing, and distribution.",

confidential: true,

overview:
"The EDMS platform is a large-scale enterprise SaaS system used by organizations to manage, process, and distribute sensitive documents. The system supports multiple customers across isolated environments and ensures secure storage, access control, and scalable document workflows.",

responsibilities: [
"Own end-to-end lifecycle of production Azure infrastructure, spanning AKS, CI/CD, security, and observability, sustaining 99.7% uptime under 24x7 on-call",
"Designed and implemented backend APIs for document ingestion and processing",
"Configured Azure Front Door with WAF policies and CDN routing for global traffic distribution",
"Owned 20+ YAML-based Azure DevOps pipelines across dev, staging, and production with zero-downtime deployments",
"Implemented Prometheus and Grafana alongside Azure Monitor for full-stack observability",
],

customers: {
environments: "60+ customer environments",
deploymentModel: "Multi-tenant SaaS with isolated customer instances",
},

features: [
"Secure document storage and lifecycle management",
"Role-based access control using CIAM and OAuth2",
],

challenges: [
"Managing deployments across dozens of customer environments",
"Ensuring secure storage of confidential customer documents",
"Maintaining high availability for critical enterprise workflows",
],

tech: [
"C# / .NET",
".NET Core",
"Web API",
"Azure Kubernetes Service (AKS)",
"Azure App Services",
"Azure Front Door (WAF/CDN)",
"Azure SQL",
"Azure Storage",
"Azure Key Vault",
"Prometheus / Grafana",
"CI/CD",
],
},

{
slug: "client-share-portal",

title: "Client Share Portal",

category: "Enterprise Platform",

description:
"Secure portal for delivering product releases and documents to enterprise customers.",

confidential: true,

overview:
"The Client Share Portal is a secure web application that allows enterprise customers to access and download product packages and documentation.",

responsibilities: [
"Developed backend APIs for secure file distribution",
"Integrated identity providers including Google OAuth and Microsoft Entra ID with SSO",
"Enforced fine-grained RBAC for auditable, secure package delivery to external clients",
"Managed metadata storage for files and access permissions",
"Architected Azure Virtual Desktop environments with FSLogix and Conditional Access for policy-enforced remote access",
],

customers: {
environments: "Multiple enterprise customers",
accessModel: "Customer specific access control",
},

tech: [
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
],
},

{
slug: "multi-cloud-ai-advisor",

title: "Multi-Cloud AI Infrastructure Advisor",

category: "Personal Project",

description:
"AI-powered system that analyzes infrastructure posture across AWS, Azure, and GCP environments.",

github:
"https://github.com/chethankumblekar/Multi-Cloud-AI-Cloud-Advisor-AWS-Azure-GCP-",

overview:
"This system analyzes infrastructure across multiple cloud providers and generates recommendations for improving security posture, cost efficiency, and reliability using AI-based analysis.",

architecture: {

nodes: [

{
id: "cloud",
type: "azure",
position: { x: 0, y: 200 },
data: {
label: "Cloud Providers",
subtitle: "AWS / Azure / GCP APIs",
icon: "mdi:web",
color: "#22c55e"
}
},

{
id: "collector",
type: "azure",
position: { x: 250, y: 200 },
data: {
label: "Infrastructure Collector",
subtitle: "Cloud API Aggregator",
icon: "mdi:server",
color: "#38bdf8"
}
},

{
id: "normalize",
type: "azure",
position: { x: 500, y: 200 },
data: {
label: "Data Normalization Layer",
subtitle: "Resource Standardization",
icon: "mdi:database",
color: "#f97316"
}
},

{
id: "ai",
type: "azure",
position: { x: 750, y: 200 },
data: {
label: "AI Risk Analysis Engine",
subtitle: "Security + Cost Analysis",
icon: "mdi:brain",
color: "#a855f7"
}
},

{
id: "recommend",
type: "azure",
position: { x: 1000, y: 200 },
data: {
label: "Recommendation Service",
subtitle: "Optimization Suggestions",
icon: "mdi:lightbulb",
color: "#22c55e"
}
}

],

edges: [

{
id: "flow1",
source: "cloud",
target: "collector",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "flow2",
source: "collector",
target: "normalize",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "flow3",
source: "normalize",
target: "ai",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
},

{
id: "flow4",
source: "ai",
target: "recommend",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
}

]

},

features: [
"Cloud posture analysis",
"Risk scoring using AI models",
"Multi-cloud infrastructure support",
"Automated remediation recommendations",
],

tech: [
"C# / .NET",
"REST APIs",
"AI / ML",
"Multi-Cloud",
"Azure",
"Terraform",
],
},

{
slug: "chat-app",

title: "Real-Time Chat Application",

category: "Personal Project",

description:
"Low latency real-time messaging application using SignalR.",

github:
"https://github.com/chethankumblekar/ChatApp",

overview:
"A real-time chat platform where users communicate instantly using WebSockets powered by SignalR.",

architecture: {

nodes: [

{
id: "client",
type: "azure",
position: { x: 0, y: 200 },
data: {
label: "Client Browser",
subtitle: "React SPA",
icon: "mdi:web",
color: "#22c55e"
}
},

{
id: "frontdoor",
type: "azure",
position: { x: 250, y: 200 },
data: {
label: "Azure Front Door",
subtitle: "Global Edge Routing",
icon: "simple-icons:microsoftazure",
color: "#0ea5e9"
}
},

{
id: "gateway",
type: "azure",
position: { x: 500, y: 200 },
data: {
label: "API Gateway",
subtitle: "Auth + Routing",
icon: "mdi:api",
color: "#38bdf8"
}
},

{
id: "signalr",
type: "azure",
position: { x: 750, y: 120 },
data: {
label: "SignalR Hub",
subtitle: ".NET Realtime Server",
icon: "mdi:server",
color: "#6366f1"
}
},

{
id: "auth",
type: "azure",
position: { x: 750, y: 320 },
data: {
label: "Google OAuth",
subtitle: "User Authentication",
icon: "logos:google-icon",
color: "#ef4444"
}
},

{
id: "redis",
type: "azure",
position: { x: 1000, y: 120 },
data: {
label: "Azure Redis Cache",
subtitle: "Pub/Sub Messaging",
icon: "mdi:database",
color: "#f97316"
}
},

{
id: "sql",
type: "azure",
position: { x: 1000, y: 320 },
data: {
label: "Azure SQL Database",
subtitle: "Persistent Storage",
icon: "mdi:database-outline",
color: "#14b8a6"
}
}

],

edges: [

{
id: "req1",
source: "client",
target: "frontdoor",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "req2",
source: "frontdoor",
target: "gateway",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "auth1",
source: "gateway",
target: "auth",
label: "auth",
animated: true,
style: { stroke: "#ef4444", strokeWidth: 2 }
},

{
id: "event1",
source: "signalr",
target: "redis",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
},

{
id: "persist",
source: "signalr",
target: "sql",
label: "db",
animated: true,
style: { stroke: "#22c55e", strokeWidth: 2 }
}

]

},

features: [
"Real-time messaging",
"SignalR hub communication",
"Google authentication",
"Concurrent client messaging",
],

tech: [
"C# / .NET",
"SignalR",
"Google Auth",
"Docker",
],
},

{
slug: "tenantforge",

title: "TenantForge: Multi-Tenant Platform Engineering",

category: "Platform Engineering",

description:
"A production-grade, well-architected multi-tenant platform on Azure, with a portable AWS reference implementation, covering IaC, GitOps, zero-trust identity, observability, policy enforcement, and FinOps.",

github:
"https://github.com/chethankumblekar/tenantforge",

overview:
"TenantForge is a personal platform-engineering build that demonstrates how to stand up a secure, observable, cost-governed multi-tenant service the way a platform team would, with each layer mapped explicitly to Microsoft's Well-Architected Framework pillars. It has two layers: the Platform, a self-service golden-path system for provisioning multi-tenant services on Azure, and the Reference Workload, a deliberately simple service that exists only to prove the platform works end-to-end. The primary Azure landing zone is fully modeled in Terraform; the AWS reference implementation of the same modules is the piece currently applied and verified against real infrastructure, alongside the containerized reference workload, CI/CD supply-chain pipeline, ArgoCD GitOps rollout, observability stack, tenant admission policy, and Backstage onboarding template.",

features: [
"Terraform IaC for an Azure landing zone plus a portable AWS reference implementation proving the modules aren't cloud-locked",
"CI/CD supply-chain pipeline with SAST scanning, SBOM generation, and artifact signing",
"ArgoCD GitOps app-of-apps deployment onto AKS",
"Zero-trust identity via Microsoft Entra Workload Identity Federation",
"OpenTelemetry, Prometheus, and Grafana observability with SLO alerting, dashboards, and runbooks",
"Tenant isolation via Kubernetes NetworkPolicy plus an OPA/Gatekeeper admission policy",
"Backstage-based Internal Developer Platform with a self-service onboarding template",
"FinOps cost dashboards, budget alerts, and an orphan-resource cleanup bot",
],

challenges: [
"Keeping the same Terraform modules portable across Azure and AWS without cloud-specific drift",
"Enforcing tenant isolation and least-privilege identity without slowing down the self-service golden path",
"Sequencing a large platform build so each layer (IaC, GitOps, observability, policy, FinOps) is independently verifiable before wiring the rest together",
],

architecture: {

nodes: [

{
id: "backstage",
type: "azure",
position: { x: 0, y: 120 },
data: {
label: "Backstage IDP",
subtitle: "Self-Service Golden Paths",
icon: "simple-icons:backstage",
color: "#6366f1"
}
},

{
id: "terraform",
type: "azure",
position: { x: 0, y: 320 },
data: {
label: "Terraform IaC",
subtitle: "Azure Landing Zone + AWS Reference",
icon: "simple-icons:terraform",
color: "#7B42BC"
}
},

{
id: "aks",
type: "azure",
position: { x: 300, y: 220 },
data: {
label: "AKS Cluster",
subtitle: "Multi-Tenant Workloads",
icon: "simple-icons:kubernetes",
color: "#326ce5"
}
},

{
id: "argocd",
type: "azure",
position: { x: 600, y: 120 },
data: {
label: "ArgoCD",
subtitle: "GitOps Delivery",
icon: "simple-icons:argo",
color: "#ef7b4d"
}
},

{
id: "security",
type: "azure",
position: { x: 600, y: 320 },
data: {
label: "OPA / Gatekeeper",
subtitle: "Tenant Admission Policy",
icon: "mdi:shield-lock",
color: "#ef4444"
}
},

{
id: "observability",
type: "azure",
position: { x: 900, y: 120 },
data: {
label: "Observability Stack",
subtitle: "OTel / Prometheus / Grafana",
icon: "mdi:chart-line",
color: "#f97316"
}
},

{
id: "finops",
type: "azure",
position: { x: 900, y: 320 },
data: {
label: "FinOps",
subtitle: "Cost Dashboards + Budget Alerts",
icon: "mdi:currency-usd",
color: "#22c55e"
}
}

],

edges: [

{
id: "flow1",
source: "backstage",
target: "argocd",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "flow2",
source: "terraform",
target: "aks",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "flow3",
source: "argocd",
target: "aks",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
},

{
id: "flow4",
source: "security",
target: "aks",
label: "auth",
animated: true,
style: { stroke: "#ef4444", strokeWidth: 2 }
},

{
id: "flow5",
source: "aks",
target: "observability",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
},

{
id: "flow6",
source: "aks",
target: "finops",
label: "db",
animated: true,
style: { stroke: "#22c55e", strokeWidth: 2 }
}

]

},

tech: [
"Terraform",
"Azure Kubernetes Service (AKS)",
"Helm",
"ArgoCD",
"GitOps",
"Microsoft Entra Workload Identity Federation",
"OpenTelemetry",
"Prometheus",
"Grafana",
"Backstage",
"OPA / Gatekeeper",
"FinOps",
"AWS",
],
},

{
slug: "policyforge",

title: "PolicyForge: Policy-as-Code Scanner",

category: "Security Tooling",

description:
"Open-source policy-as-code scanner for Terraform, Bicep, Kubernetes, and Helm with first-class Azure support, SBOM generation on every scan, and supply-chain signing.",

github:
"https://github.com/chethankumblekar/policyforge",

overview:
"PolicyForge is a Go CLI that scans Terraform, Bicep, Kubernetes, and Helm manifests against the same OPA/Rego rule packs through a shared canonical resource model: a rule written once evaluates Terraform and Bicep identically. Azure is treated as a first-class target, with Bicep and Azure Policy alignment fully supported rather than bolted on, and every scan generates an SBOM. Currently at v0.1, with the CLI running end-to-end against real IaC and rule packs embedded at build time.",

features: [
"scan command with table, SARIF, and JSON output for Terraform, Bicep, Kubernetes, and Helm",
"Custom policy authoring via --policy-dir: drop in .rego files with no fork required",
"Supply-chain signing and attestation via cosign, SLSA provenance predicates, and the Rekor transparency log",
"drift command comparing declared IaC against live Azure state via Azure Resource Graph",
"13 built-in rules spanning CIS Azure Foundations, AWS S3/security-group checks, and Kubernetes Pod Security Standards",
"GitHub Actions and Azure DevOps integrations, surfacing SARIF results as native code-scanning findings",
"Self-hosted enterprise portal (Go API, SQLite, HTTP Basic Auth / OIDC-Entra SSO, Next.js dashboard) that ingests scan results via --upload",
],

challenges: [
"Designing one canonical resource model expressive enough for a single Rego rule pack to evaluate Terraform and Bicep identically",
"Keeping Azure a first-class target rather than an AWS-first tool with Azure support bolted on",
"Scoping a v0.1 core (CLI, rule packs, SBOM) that's useful standalone, with signing, drift detection, and the enterprise portal layered on without bloating it",
],

architecture: {

nodes: [

{
id: "iac",
type: "azure",
position: { x: 0, y: 220 },
data: {
label: "IaC Input",
subtitle: "Terraform / Bicep / K8s / Helm",
icon: "mdi:file-code-outline",
color: "#38bdf8"
}
},

{
id: "parser",
type: "azure",
position: { x: 250, y: 220 },
data: {
label: "Parser Layer",
subtitle: "Multi-Format Ingestion",
icon: "mdi:file-search-outline",
color: "#0ea5e9"
}
},

{
id: "normalizer",
type: "azure",
position: { x: 500, y: 220 },
data: {
label: "Normalizer",
subtitle: "Canonical Resource Model",
icon: "mdi:shuffle-variant",
color: "#6366f1"
}
},

{
id: "opa",
type: "azure",
position: { x: 750, y: 220 },
data: {
label: "OPA / Rego Engine",
subtitle: "Policy Evaluation",
icon: "mdi:gavel",
color: "#a855f7"
}
},

{
id: "findings",
type: "azure",
position: { x: 1000, y: 120 },
data: {
label: "Findings",
subtitle: "SARIF / JSON / Table + SBOM",
icon: "mdi:file-document-alert-outline",
color: "#f97316"
}
},

{
id: "signing",
type: "azure",
position: { x: 1000, y: 320 },
data: {
label: "Supply-Chain Signing",
subtitle: "cosign / SLSA / Rekor",
icon: "mdi:shield-key-outline",
color: "#ef4444"
}
},

{
id: "portal",
type: "azure",
position: { x: 1250, y: 120 },
data: {
label: "Enterprise Portal",
subtitle: "Go API + Next.js Dashboard",
icon: "mdi:view-dashboard-outline",
color: "#22c55e"
}
}

],

edges: [

{
id: "flow1",
source: "iac",
target: "parser",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "flow2",
source: "parser",
target: "normalizer",
label: "request",
animated: true,
style: { stroke: "#3b82f6", strokeWidth: 2 }
},

{
id: "flow3",
source: "normalizer",
target: "opa",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
},

{
id: "flow4",
source: "opa",
target: "findings",
label: "event",
animated: true,
style: { stroke: "#a855f7", strokeWidth: 2 }
},

{
id: "flow5",
source: "opa",
target: "signing",
label: "auth",
animated: true,
style: { stroke: "#ef4444", strokeWidth: 2 }
},

{
id: "flow6",
source: "findings",
target: "portal",
label: "db",
animated: true,
style: { stroke: "#22c55e", strokeWidth: 2 }
}

]

},

tech: [
"Go",
"OPA / Rego",
"Terraform",
"Bicep",
"Kubernetes",
"Helm",
"cosign",
"SLSA",
"Rekor",
"SBOM",
"GitHub Actions",
"Azure DevOps",
"Azure Resource Graph",
],
},

{
slug: "cloud-cost-guardian",

title: "Cloud Cost Guardian",

category: "Production Tooling",

description:
"Automated orphaned-resource detection tool that scans Azure subscriptions and alerts on wasted cloud spend.",

overview:
"Built while operating a 60+ tenant production platform, this tool continuously scans Azure resources across subscriptions to identify orphaned disks, unattached IPs, idle App Service plans, and other billed-but-unused resources, then raises automated alerts so waste gets cut before it shows up on the invoice.",

responsibilities: [
"Designed detection rules for orphaned Azure resources (disks, IPs, NICs, idle compute)",
"Built automated alerting so findings reach the team without manual audits",
"Integrated with existing Azure Monitor and cost management workflows",
"Directly reduced monthly cloud spend on a live production platform",
],

tech: [
"C# / .NET",
"Azure Resource Manager APIs",
"Azure Monitor",
"PowerShell",
],
},
];