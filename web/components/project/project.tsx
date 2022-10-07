import Contributions from '../contributions/contributions';
import Heading from '../heading/heading';
import Interest from '../interest/interest';
import Tasks from '../tasks/tasks';
import Container from '../container/container';
import { SanityProject } from '../../models/sanity-project';
import CollabtoolList from '../collabtool-list/collabtool-list';

// interface ProjectProps {
//     title: string;
//     intro: string;
//     description: string;
//     completed: boolean;
//     author: string;
//     resources: string[];
// }

const Project: React.FC<SanityProject> = ({
    title,
    intro,
    description,
    completed,
    author,
    resources,
    collabtools,
}) => (
    <div className='project'>
        <Container className='project__container' theme='article'>
            <Heading headingLevel='h1' className='project__title'>{title}</Heading>
            <div className='project__onboarding'>
                <div className='project__short-info'>
                    <div className='project__intro'>
                        <span className='project__pretext'>Intro:</span>
                        <p>{intro}</p>
                    </div>
                    <div className='project__resources'>
                        {resources && resources.length > 0 && (
                            <ul>
                                {resources.map((resource: any, index: number) => (
                                    <li key={'resource-'+index}>{resource}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='project__project-leader'>
                        <span className='project__pretext'>Prosjektleder:</span>
                        <p>{author}</p>
                    </div>
                </div>
                <div className='project__description'>
                    <span className='project__pretext'>Beskrivelse:</span>
                    <p>{description}</p>
                </div>
                
            </div>
            <div>
            {collabtools && collabtools.length > 0 && (
            <div className="project_collabtools">
              <h2>Samarbeidsverktøy</h2>
            <CollabtoolList collabtools={collabtools}/>
            </div>
            )}
            </div>
            
            <Interest />
            <Tasks tasks={["1", "to", "drei", "svei"]}/>
            <Contributions contributions={["1", "to", "drei"]} />
        </Container>
    </div>
    
);

export default Project;


