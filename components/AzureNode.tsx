"use client";

import { Handle, Position, NodeProps } from "reactflow";
import { Icon } from "@iconify/react";
import { AzureNodeData } from "@/types/architecture";

export default function AzureNode({ data }: NodeProps<AzureNodeData>) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg"
      style={{
        background: "#020617",
        border: "1px solid #1e293b",
        minWidth: 200,
      }}
    >
      <Icon icon={data.icon} width={26} color={data.color} />

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-white">
          {data.label}
        </span>

        {data.subtitle && (
          <span className="text-xs text-slate-400">
            {data.subtitle}
          </span>
        )}
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}