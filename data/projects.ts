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
"Own end-to-end lifecycle of production Azure infrastructure — AKS, CI/CD, security, and observability — sustaining 99.7% uptime under 24x7 on-call",
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
"Zero-downtime CI/CD pipelines with automated quality gates",
"Full-stack observability with Prometheus, Grafana, and Azure Monitor",
"Azure Front Door WAF/CDN for global routing and edge security",
"High availability production environment sustaining 99.7% uptime",
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

features: [
"Secure document delivery",
"Customer based access control",
"OAuth authentication with external providers",
"Audit logging for document access",
],

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
slug: "cloud-cost-guardian",

title: "Cloud Cost Guardian",

category: "Production Tooling",

description:
"Automated orphaned-resource detection tool that scans Azure subscriptions and alerts on wasted cloud spend.",

overview:
"Built while operating a 60+ tenant production platform, this tool continuously scans Azure resources across subscriptions to identify orphaned disks, unattached IPs, idle App Service plans, and other billed-but-unused resources — then raises automated alerts so waste gets cut before it shows up on the invoice.",

responsibilities: [
"Designed detection rules for orphaned Azure resources (disks, IPs, NICs, idle compute)",
"Built automated alerting so findings reach the team without manual audits",
"Integrated with existing Azure Monitor and cost management workflows",
],

features: [
"Automated orphaned-resource scanning across subscriptions",
"Alerting pipeline for wasted-spend findings",
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