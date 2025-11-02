import { useSelector } from 'react-redux';
import { Columns } from './Columns';

export const Todo = () => {
    const columnss = useSelector(state => state.tasks.columns);
  const filter = useSelector(state => state.tasks.filter);
  
  
    const filterTasks = (tasks) => {
    if (filter === 'all') return tasks;
    return tasks.filter(task => task.priority === filter);


  };
  return (
    <>
    <div className="space-x-1"><h1>Demo App<i></i> </h1></div>
    <div className="FilterBoxes"></div>
    <div className="colums flex justify-between">
    <Columns 
          title="To Do" 
          columnId="todo" 
          tasks={filterTasks(columnss.todo)} 
        />
        <Columns 
          title="In Progress" 
          columnId="inProgress" 
          tasks={filterTasks(columnss.inProgress)} 
        />
        <Columns 
          title="Done" 
          columnId="done" 
          tasks={filterTasks(columnss.done)} 
        />
    </div>
    </>
  )
}