import { useSelector } from 'react-redux';
import { Columns } from './Columns';

export const Todo = () => {
  const tempColumns = {
    todo: [
        {
            id: 1,
            name: "Setup Project",
            description: "Initialize React + Vite project with Tailwind",
            priority: "high"
        },
        {
            id: 2,
            name: "Create Components",
            description: "Build Board, Column, and TaskCard components",
            priority: "medium"
        },
        {
            id: 3,
            name: "Add Styling",
            description: "Match Figma design with Tailwind CSS",
            priority: "low"
        }
    ],
    inProgress: [
        {
            id: 4,
            name: "Redux Setup",
            description: "Configure store and taskSlice with actions",
            priority: "high"
        },
        {
            id: 5,
            name: "Task Filtering",
            description: "Implement filter by priority feature",
            priority: "medium"
        }
    ],
    done: [
        {
            id: 6,
            name: "Install Dependencies",
            description: "npm install all required packages",
            priority: "high"
        },
        {
            id: 7,
            name: "Setup Routes",
            description: "Configure React Router for navigation",
            priority: "low"
        }
    ]
  };

  const columnss = tempColumns;
  // const columnss = useSelector(state => state.tasks.columns); // Uncomment when Redux ready
  
  // For now, just return all tasks (no filtering)
  const filterTasks = (tasks) => {
    return tasks; // Returns all tasks as-is
  };

  // When Redux is ready, uncomment this:
  // const filter = useSelector(state => state.tasks.filter);
  // const filterTasks = (tasks) => {
  //   if (filter === 'all') return tasks;
  //   return tasks.filter(task => task.priority === filter);
  // };

  return (
    <>
      <div className="px-6 space-x-3 flex items-center ">
        <h1 className="text-3xl font-bold">Demo App</h1>
        <i class="fa-regular fa-pen-to-square text-xl p-1 h-7 w-7 text-purple-600 bg-purple-200 rounded-md"></i>
        <i class="fa-solid fa-link bg-purple-200 text-xl py-1 px-0.5 text-purple-600 rounded-md"></i>
      <div className='ml-96 w-50 h-fit'><img src="https://static-cse.design.ing/_next/static/assets/quick-feature_2_w909xh681_e72b9fc9d2a5cfb1f37891e4c14ef9217f9fb3bc07257f586d9a2e8d333ecccc.png" alt="" /></div>
      <p className='font-bold -ml-6 bg-purple-100 rounded-full h-7 w-7 flex justify-center items-center'><span className=''>+2</span></p>
      </div>
      
      <div className="FilterBoxes px-6 mb-4  flex justify-between items-center p-2">
        <div className='flex items-center gap-1'>
          <button className=' rounded w-25 p-2 btn bg-white'><i class="fa-solid fa-filter mr-1"></i>Filter</button>
          <button className=' rounded w-25 p-2 btn bg-white'><i class="fa-solid fa-calendar mr-1"></i>Today</button>
        </div>
        <div>
          <button className=' rounded p-2 w-25 btn text-white bg-purple-900'><i class="fa-solid fa-share mt-1"></i>Share</button>
          <i></i>
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