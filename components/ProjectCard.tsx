"use client";

import Link from "next/link";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <div className="panel h-full min-h-[220px] flex flex-col justify-between p-6 rounded-xl hover:border-signal-cyan/30 transition">
        <div>
          <p className="font-mono-eyebrow text-xs text-signal-cyan uppercase mb-2">
            {project.category}
          </p>

          <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

          <p className="text-sm text-slate-400 line-clamp-3">
            {project.description}
          </p>
        </div>

        {project.confidential && (
          <p className="font-mono-eyebrow text-[11px] uppercase text-slate-500 mt-4">
            🔒 Confidential System
          </p>
        )}
      </div>
    </Link>
  );
}
