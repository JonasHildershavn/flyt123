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
    <div>
        <h1>{title}</h1>
        <div>Intro: {intro}</div>
        <div>Beskrivelse: {description}</div>
        <div>Forfatter: {author}</div>
    </div>
    
);

export default Project;
