"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const FEATURED_SLUGS = ["edms-platform", "tenantforge", "policyforge"];

export default function FeaturedWork() {
  const featured = FEATURED_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <section className="py-24">
      <div className="relative w-full max-w-[110rem] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12 gap-6 flex-wrap"
        >
          <div>
            <p className="font-mono-eyebrow text-signal-cyan text-xs uppercase mb-3">
              $ ls ./featured
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Featured Work
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-signal-cyan transition"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
