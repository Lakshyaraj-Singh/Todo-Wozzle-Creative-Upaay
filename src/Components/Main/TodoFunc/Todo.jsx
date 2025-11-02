import { useSelector } from 'react-redux';

export const Todo = () => {
    const columns = useSelector(state => state.tasks.columns);
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

    </div>
    </>
  )
}