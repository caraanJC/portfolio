import { useSelector } from 'react-redux';
import { State } from '../state';
import TaskList from './TaskList';

import '../styles/Tasks.css';

const Tasks = () => {
  const tasks = useSelector((state: State) => state.tasks);
  return (
    <div className='tasks'>
      <div className='tasks__pending'>
        {[...tasks].find((task) => task.status === 'Pending') ? (
          <h2 className='tasks__title'>Pending Tasks</h2>
        ) : (
          <h2 className='tasks__empty'>No Pending Tasks</h2>
        )}
        <ul>
          {[...tasks]
            .filter((task) => task.status === 'Pending')
            .map((task) => (
              <TaskList key={task.id} task={task} />
            ))}
        </ul>
      </div>
      <div className='tasks__done'>
        {[...tasks].find((task) => task.status === 'Done') ? (
          <h2 className='tasks__title'>Done Tasks</h2>
        ) : (
          <h2 className='tasks__empty'>No Done Tasks</h2>
        )}
        <ul>
          {[...tasks]
            .filter((task) => task.status === 'Done')
            .map((task) => (
              <TaskList key={task.id} task={task} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
