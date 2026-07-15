import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const profile = `
Chethan K is a DevOps & Cloud/Platform Engineer based in Bengaluru, India.
He designs, builds, and operates production-grade cloud infrastructure on
Microsoft Azure, owning AKS, CI/CD, security, and observability end-to-end
for a multi-tenant SaaS platform running 24x7 in production.

Headline metrics: 99.7% platform uptime, 60+ tenant platform, 20+ CI/CD
pipelines owned, ~90% less manual provisioning via Infrastructure as Code.
`.trim();

const experienceSummary = experience
  .map(
    (e) => `
${e.role} at ${e.company} (${e.period}, ${e.location})${e.current ? " [current role]" : ""}
${e.summary}
Key impact:
${e.impact.map((i) => `- ${i}`).join("\n")}
`.trim()
  )
  .join("\n\n");

const projectsSummary = projects
  .map(
    (p) => `
${p.title} (${p.category})
${p.description}
Tech: ${p.tech.join(", ")}
`.trim()
  )
  .join("\n\n");

const education = `
B.E., Information Science and Engineering, MVJ College of Engineering,
Bengaluru (VTU), CGPA 8.5/10.

Certifications: Microsoft Certified Azure Administrator Associate (AZ-104,
in progress), Azure Solutions Architect Expert (AZ-305) x2 via Pluralsight,
IBM Data Science Specialization (Coursera).
`.trim();

export const aiKnowledge = {
  profile,
  experience: experienceSummary,
  projects: projectsSummary,
  education,
};
