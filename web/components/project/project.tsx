interface ProjectProps {
    title: string;
    intro: string;
    description: string;
    completed: boolean;
    author: string;

}

const Project: React.FC<ProjectProps> = ({
    title,
    intro,
    description,
    completed,
    author,
}) => (
    <main>
        <h1>{title}</h1>
        <div>Intro: {intro}</div>
        <div>Beskrivelse: {description}</div>
        <div>Forfatter: {author}</div>
        <div>Ferdigstilt: {completed.toString()}</div>
    </main>
    
);

export default Project;
