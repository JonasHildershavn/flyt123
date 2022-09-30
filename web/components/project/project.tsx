import Contributions from '../contributions/contributions';
import Heading from '../heading/heading';
import Interest from '../interest/interest';
import Tasks from '../tasks/tasks';
import Container from '../container/container';

interface ProjectProps {
    title: string;
    intro: string;
    description: string;
    completed: boolean;
    author: string;
    resources: string[];
    projectLeader: string;
    techLead: string;
    designLead: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    intro,
    description,
    completed,
    author,
    resources,
    projectLeader,
    techLead,
    designLead
}) => {

    return (
    <div className='project'>
        <Container className='project__container' theme='article'>
            <Heading headingLevel='h1' className='project__title'>{title}</Heading>
            <div className='project__onboarding'>
                <div className='project__short-info'>
                    <div className='project__intro'>
                        <Heading headingLevel='h2'>Intro:</Heading>
                        <p>{intro}</p>
                    </div>
                    <div className='project__resources'>
                        {resources && resources.length > 0 && (
                            <ul>
                                {resources.map((resource, index) => (
                                    <li key={'resource-'+index}>{resource}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='project__contact-persons'>
                        <Heading headingLevel='h2'>Kontaktpersoner:</Heading>
                        {projectLeader && (
                            <ul className='project__contact-persons-list'>
                                {projectLeader && (
                                    <li className='project__contact-person'>
                                        <span className='project__contact-person-pretext'>Prosjektleder:</span>
                                        <p>{projectLeader}</p>
                                    </li>
                                )}
                                {techLead && (
                                    <li className='project__contact-person'>
                                        <span className='project__contact-person-pretext'>Tech lead:</span>
                                        <p>{techLead}</p>
                                    </li>
                                )}
                                {designLead && (
                                    <li className='project__contact-person'>
                                        <span className='project__contact-person-pretext'>Design lead:</span>
                                        <p>{designLead}</p>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
                <div className='project__description'>
                    <Heading headingLevel='h2'>Beskrivelse:</Heading>
                    <p>{description}</p>
                </div>
                
            </div>
            
            <Interest />
            <Tasks tasks={["1", "to", "drei", "svei"]}/>
            <Contributions contributions={["1", "to", "drei"]} />
        </Container>
    </div>
    
)};

export default Project;
