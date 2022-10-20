import { SanityEmployee } from "./sanity-employee";

export interface SanityProject {
  title?: string;
  intro: string;
  description: string;
  completed: boolean;
  status: string;
  employee: SanityEmployee;
  resources: string[];
  projectLeader: string;
  techLead: string;
  designLead: string;
  contributors: SanityEmployee[];
}
