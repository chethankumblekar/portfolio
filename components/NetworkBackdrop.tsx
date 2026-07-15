"use client";

import { motion } from "framer-motion";

/**
 * Deterministic node layout (no Math.random) so server/client markup matches.
 * Positions are generated from index via sin/cos so the map always looks the
 * same but isn't a hand-placed grid.
 */
const NODE_COUNT = 22;

// Math.cos/Math.sin can differ by a few ULPs between Node (server) and the
// browser's V8 build, so raw values hydration-mismatch on the last digit.
// Round to a fixed precision so server and client serialize identically.
const round = (n: number) => Math.round(n * 10000) / 10000;

const nodes = Array.from({ length: NODE_COUNT }, (_, i) => {
  const angle = i * 137.508; // golden-angle spread
  const radius = 6 + (i % 7) * 5.4;
  const cx = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const cy = 50 + radius * Math.sin((angle * Math.PI) / 180) * 0.6;
  return { id: i, x: round(cx), y: round(cy) };
});

const edges = nodes
  .map((node, i) => {
    const next = nodes[(i + 3) % nodes.length];
    return { id: `${node.id}-${next.id}`, from: node, to: next };
  })
  .slice(0, 16);

export default function NetworkBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-[0.35]"
      >
        {edges.map((edge, i) => (
          <motion.line
            key={edge.id}
            x1={edge.from.x}
            y1={edge.from.y}
            x2={edge.to.x}
            y2={edge.to.y}
            stroke="url(#edgeGradient)"
            strokeWidth="0.12"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={0.35}
            fill={i % 3 === 0 ? "#34d399" : "#22d3ee"}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.4,
            }}
          />
        ))}

        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite-900/40 to-graphite-900" />
    </div>
  );
}
