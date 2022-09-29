import Contributions from '../contributions/contributions';
import Heading from '../heading/heading';
import Interest from '../interest/interest';
import Tasks from '../tasks/tasks';
import Container from '../container/container';

interface ProjectProps {
    title: string;
    intro: string;
    description: string;
    author: string;
    resources: string[];
}

const Project: React.FC<ProjectProps> = ({
    title,
    intro,
    description,
    author,
    resources
}) => (
    <div className='project'>
        <Container className='project__container' theme='article'>
            <Heading headingLevel='h1' className='project__title'>{title}</Heading>
            <div className='project__onboarding'>
                <div className='project__intro'>
                    <p>{intro}</p>
                </div>
                <div className='project__resources'>
                    {resources && resources.length > 0 && (
                        <ul>
                            <li>resource</li>
                        </ul>
                    )}
                </div>
                <div className='project_persons'>
                    <p>{author}</p>
                </div>
                <div className='project__description'>{description}</div>
            </div>
            
            <Interest />
            <Tasks tasks={["1", "to", "drei"]}/>
            <Contributions contributions={["1", "to", "drei"]} />
        </Container>
    </div>
    
);

export default Project;
