import { SanityEmployee } from "./sanity-employee";

export interface SanityProject {
  title: string;
  intro: string;
  description: string;
  completed: boolean;
  employee: SanityEmployee;
  resources: string[];
  projectLeader: string;
  techLead: string;
  designLead: string;
  contributors: SanityEmployee[];
}
