"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { certifications, education } from "@/data/credentials";

const certIcon = (title: string) =>
  title.startsWith("IBM") ? BookOpen : Award;

export default function Credentials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="panel p-10 rounded-3xl mt-24"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* EDUCATION */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-signal-cyan/10 text-signal-cyan">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <p className="text-lg text-white mb-1">{education.degree}</p>
          <p className="text-slate-400 mb-1">{education.institution}</p>
          <p className="font-mono-eyebrow text-xs uppercase text-slate-500">
            {education.cgpa}
          </p>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 flex items-center justify-center rounded-xl bg-signal-green/10 text-signal-green">
              <Award className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>

          <ul className="space-y-4">
            {certifications.map((cert) => {
              const Icon = certIcon(cert.title);
              return (
                <li key={cert.title} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-signal-green mt-1 shrink-0" />
                  <div>
                    <p className="text-slate-200 leading-snug">{cert.title}</p>
                    <p className="font-mono-eyebrow text-[11px] uppercase text-slate-500 mt-1">
                      {cert.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
