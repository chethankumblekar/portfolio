import { Edge, Node } from "reactflow";

export interface AzureNodeData {
  label: string;
  subtitle?: string;
  icon: string;
  color: string;
}

export type AzureNode = Node<AzureNodeData>;
export type AzureEdge = Edge;

export interface ArchitectureDiagram {
  nodes: AzureNode[];
  edges: AzureEdge[];
}