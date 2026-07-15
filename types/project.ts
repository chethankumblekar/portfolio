import { ArchitectureDiagram } from "./architecture";

export interface ProjectCustomers {
  environments?: string;
  deploymentModel?: string;
  accessModel?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;

  confidential?: boolean;
  github?: string;
  

  overview?: string;
  responsibilities?: string[];
  customers?: ProjectCustomers;
  features?: string[];
  challenges?: string[];

  tech: string[];

  architecture?: ArchitectureDiagram;
}