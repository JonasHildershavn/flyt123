import { SanityContactPerson } from "./sanity-contact-person";
import { SanityEmployee } from "./sanity-employee";
import { SanityProjectTag } from "./sanity-project-tags";

export interface SanityProject {
  title?: string;
  intro: string;
  description: string;
  slug: string;
  completed: boolean;
  status: string;
  employee: SanityEmployee;
  resources: string[];
  contactPersons: SanityContactPerson[];
  contributors: SanityEmployee[];
  tags: SanityProjectTag[]
}
