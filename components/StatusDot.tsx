const toneClasses = {
  green: "bg-signal-green shadow-[0_0_0_2px_rgba(52,211,153,0.15)]",
  cyan: "bg-signal-cyan shadow-[0_0_0_2px_rgba(34,211,238,0.15)]",
  amber: "bg-signal-amber shadow-[0_0_0_2px_rgba(251,191,36,0.15)]",
} as const;

interface Props {
  label: string;
  tone?: keyof typeof toneClasses;
  pulse?: boolean;
  className?: string;
}

export default function StatusDot({
  label,
  tone = "green",
  pulse = true,
  className = "",
}: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono-eyebrow text-[11px] uppercase text-slate-400 ${className}`}
    >
      <span
        className={`relative w-2 h-2 rounded-full ${toneClasses[tone]} ${
          pulse ? "animate-pulse-dot" : ""
        }`}
      />
      {label}
    </span>
  );
}
