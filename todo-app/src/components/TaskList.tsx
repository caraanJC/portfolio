import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

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
    <li>
      {task.name}

      {task.status === 'Pending' && (
        <button onClick={() => changeStatusToDone(task.id)}>Done</button>
      )}
      <button onClick={() => removeFromTasks(task.id)}>Delete</button>
    </li>
  );
};

export default TaskList;
