import './App.css';
import Tasks from './components/Tasks';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className='app'>
      <h1 className='app__title'>Todo App</h1>
      <TodoForm />
      <Tasks />
    </div>
  );
}

export default App;
