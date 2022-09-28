interface ProjectProps {
    title: string;
    intro: string;
    description: string;
    author: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    intro,
    description,
    author,
}) => (
    <main>
        <h1>{title}</h1>
        <div>Intro: {intro}</div>
        <div>Beskrivelse: {description}</div>
        <div>Forfatter: {author}</div>
    </main>
    
);

export default Project;
