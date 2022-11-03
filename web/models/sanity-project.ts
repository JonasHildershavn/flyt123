import { SanityContactPerson } from "./sanity-contact-person";
import { SanityEmployee } from "./sanity-employee";
import { SanityProjectTag } from "./sanity-project-tags";
import { SanityColabTool } from "./sanity-colabtool";

export interface SanityProject {
  title?: string;
  intro: string;
  description: any[] | any;
  slug: string;
  completed: boolean;
  status: string;
  employee: SanityEmployee;
  resources: string[];
  contactPersons: SanityContactPerson[];
  contributors: SanityEmployee[];
  tags: SanityProjectTag[];
  collabtools?: SanityColabTool[];
}
