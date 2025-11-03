import { useSelector } from 'react-redux';
import { Columns } from './Columns';

export const Todo = () => {
  // Get data from Redux store
  const columnss = useSelector(state => state.tasks.columns);
  const filter = useSelector(state => state.tasks.filter);
  
  // Filter tasks based on priority
  const filterTasks = (tasks) => {
    if (filter === 'all') return tasks;
    return tasks.filter(task => task.priority === filter);
  };

  return (
    <>
      <div className="px-6 space-x-3 flex items-center">
        <h1 className="text-3xl font-bold">Demo App</h1>
        <i className="fa-regular fa-pen-to-square text-xl p-1 h-7 w-7 text-purple-600 bg-purple-200 rounded-md"></i>
        <i className="fa-solid fa-link bg-purple-200 text-xl py-1 px-0.5 text-purple-600 rounded-md"></i>
        <div className='ml-96 w-50 h-fit'>
          <img src="https://static-cse.design.ing/_next/static/assets/quick-feature_2_w909xh681_e72b9fc9d2a5cfb1f37891e4c14ef9217f9fb3bc07257f586d9a2e8d333ecccc.png" alt="" />
        </div>
        <p className='font-bold -ml-6 bg-purple-100 rounded-full h-7 w-7 flex justify-center items-center'>
          <span>+2</span>
        </p>
      </div>
      
      <div className="FilterBoxes px-6 mb-4 flex justify-between items-center p-2">
        <div className='flex items-center gap-1'>
          <button className='rounded w-25 p-2 btn bg-white'>
            <i className="fa-solid fa-filter mr-1"></i>Filter
          </button>
          <button className='rounded w-25 p-2 btn bg-white'>
            <i className="fa-solid fa-calendar mr-1"></i>Today
          </button>
        </div>
        <div>
          <button className='rounded p-2 w-25 btn text-white bg-purple-900'>
            <i className="fa-solid fa-share mt-1"></i> Share
          </button>
        </div>
      </div>
      
      <div className="columns flex justify-between gap-5 px-6">
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
  );
}