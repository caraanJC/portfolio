import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

import '../styles/TaskList.css';

interface IProps {
  task: {
    id: string;
    name: string;
    status: string;
  };
}

const TaskList: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch();

  const { removeFromTasks, changeStatusToDone } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <li className='taskList'>
      <p className='taskList__name'>{task.name}</p>
      <div className='taskList__buttons'>
        {task.status === 'Pending' && (
          <button
            className='taskList__button'
            onClick={() => changeStatusToDone(task.id)}
          >
            <img
              className='taskList__icon'
              src='https://image.flaticon.com/icons/png/512/190/190411.png'
              alt='check'
            />
          </button>
        )}
        <button
          className='taskList__button'
          onClick={() => removeFromTasks(task.id)}
        >
          <img
            className='taskList__icon'
            src='https://image.flaticon.com/icons/png/512/2496/2496733.png'
            alt='delete'
          />
        </button>
      </div>
    </li>
  );
};

export default TaskList;
