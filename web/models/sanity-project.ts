import { SanityAuthor } from "./sanity-author"

export interface SanityProject {
    title: string;
    intro: string;
    description: string;
    completed: boolean;
    author: string;
    resources: string[];
}
