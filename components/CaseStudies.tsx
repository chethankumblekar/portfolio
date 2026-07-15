import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function CaseStudies() {
  return (
    <main className="max-w-[1400px] mx-auto pt-40 pb-28 px-6 md:px-12 lg:px-16">
      <p className="font-mono-eyebrow text-signal-cyan text-sm mb-4 uppercase">
        $ ls ./production-systems
      </p>
      <h1 className="text-5xl md:text-6xl font-semibold mb-16 text-glow-cyan">
        Case Studies
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
