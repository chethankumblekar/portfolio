import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="pt-40 pb-28">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-signal-cyan transition mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        <p className="font-mono-eyebrow text-signal-cyan text-sm mb-4 uppercase">
          {project.category}
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-glow-cyan">
          {project.title}
        </h1>

        <p className="text-xl text-slate-400 mb-10 max-w-3xl">
          {project.description}
        </p>

        {project.confidential && (
          <p className="font-mono-eyebrow text-[11px] uppercase text-slate-500 mb-16">
            🔒 Confidential System: details generalized to protect customer
            data
          </p>
        )}

        {project.overview && (
          <Block title="Overview">
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </Block>
        )}

        {project.customers && (
          <Block title="Scale">
            <div className="flex flex-wrap gap-4">
              {Object.entries(project.customers).map(([key, value]) => (
                <div key={key} className="panel rounded-xl px-5 py-4">
                  <p className="text-white font-mono-eyebrow">{value}</p>
                  <p className="font-mono-eyebrow text-[10px] uppercase text-slate-500 mt-1">
                    {key}
                  </p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {project.responsibilities && (
          <Block title="Responsibilities">
            <ul className="space-y-2 list-disc list-inside text-slate-300 max-w-3xl">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>
        )}

        {project.features && (
          <Block title="Key Features">
            <ul className="space-y-2 list-disc list-inside text-slate-300 max-w-3xl">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>
        )}

        {project.challenges && (
          <Block title="Challenges">
            <ul className="space-y-2 list-disc list-inside text-slate-300 max-w-3xl">
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>
        )}

        <Block title="Tech Stack">
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-xs panel text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>

        {project.github && (
          <Block title="Source">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full panel text-sm text-slate-300 hover:text-white hover:border-signal-cyan/40 transition"
            >
              View on GitHub
            </a>
          </Block>
        )}

        {project.architecture && !project.confidential && (
          <Block title="System Architecture">
            <ArchitectureDiagram
              nodes={project.architecture.nodes}
              edges={project.architecture.edges}
            />
          </Block>
        )}
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-signal-cyan">{title}</h2>
      {children}
    </div>
  );
}
