import { SanityContactPerson } from "./sanity-contact-person";
import { SanityEmployee } from "./sanity-employee";
import { SanityColabTool } from "./sanity-colabtool";

export interface SanityProject {
  _id: string;
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
  contactPersons: SanityContactPerson[];
  contributors: SanityEmployee[];
  collabtools?: SanityColabTool[];
}
