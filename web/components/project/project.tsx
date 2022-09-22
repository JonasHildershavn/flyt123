import type { NextPage } from 'next'

interface ProjectProps {
    title: string;
}

const Project: NextPage<ProjectProps> = ({
    title,
}) => (
    <header className="header">
        <a>Project comes here </a>
        <a>{title}</a>
    </header>
    
);

export default Project;
