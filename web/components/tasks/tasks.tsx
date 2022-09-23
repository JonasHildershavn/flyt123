import Heading from '../heading/heading'

interface TasksProps {
  tasks: string[]
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => (
  <div className="tasks">
    <Heading headingLevel='h2' className='tasks__title'>Noen oppgaver vi trengre hjelp med</Heading>
    <div>tags</div>
    <div className='tasks__list'>
      {tasks && tasks.length > 0 && (
        <ul>
          {tasks.map((index) => (
            <li key={index}>heisann</li>
          ))}
        </ul>
      )}
    </div>  
  </div>
);
  
  export default Tasks;
  