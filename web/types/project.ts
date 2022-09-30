import { Author } from "./author"

export interface Project {
    title: string;
    intro: string;
    description: string;
    completed: boolean;
    author: string;
    resources: string[];
}
