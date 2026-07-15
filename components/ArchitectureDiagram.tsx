"use client";

import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  NodeTypes,
} from "reactflow";

import "reactflow/dist/style.css";

import AzureNode from "./AzureNode";
import { AzureNode as AzureNodeType, AzureEdge } from "@/types/architecture";

interface Props {
  nodes: AzureNodeType[];
  edges: AzureEdge[];
}

const nodeTypes: NodeTypes = {
  azure: AzureNode,
};

export default function ArchitectureDiagram({
  nodes,
  edges,
}: Props) {
  const [activeFlow, setActiveFlow] = useState<string>("all");

  const filteredEdges =
    activeFlow === "all"
      ? edges
      : edges.filter((e) => e.label === activeFlow);

  return (
    <div className="w-full">

      {/* FLOW CONTROLS */}

      <div className="flex flex-wrap gap-3 mb-6">

        {[
          { key: "all", label: "All Traffic" },
          { key: "request", label: "Request Flow" },
          { key: "auth", label: "Auth Flow" },
          { key: "event", label: "Messaging" },
          { key: "db", label: "Database" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFlow(key)}
            className={`px-3 py-1.5 font-mono-eyebrow text-xs uppercase rounded-full border transition ${
              activeFlow === key
                ? "bg-signal-cyan/20 border-signal-cyan/40 text-signal-cyan"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            {label}
          </button>
        ))}

      </div>

      <div className="h-[550px] border border-white/10 rounded-xl bg-graphite-950">

        <ReactFlow
          nodes={nodes}
          edges={filteredEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>

      </div>

    </div>
  );
}