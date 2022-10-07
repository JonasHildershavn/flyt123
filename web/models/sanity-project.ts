import { SanityAuthor } from "./sanity-author";

export interface SanityProject {
  title?: string;
  intro: string;
  description: string;
  completed: boolean;
  status: string;
  author: SanityAuthor;
  resources: string[];
  projectLeader: string;
  techLead: string;
  designLead: string;
  contributors: SanityAuthor[];
}
