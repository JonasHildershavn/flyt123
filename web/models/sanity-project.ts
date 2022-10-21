import { SanityContactPerson } from "./sanity-contact-person";
import { SanityEmployee } from "./sanity-employee";

export interface SanityProject {
  title?: string;
  intro: string;
  description: string;
  completed: boolean;
  status: string;
  employee: SanityEmployee;
  resources: string[];
  contactPersons: SanityContactPerson[];
  contributors: SanityEmployee[];
}
