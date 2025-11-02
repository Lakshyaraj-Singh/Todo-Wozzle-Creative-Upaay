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
      <div className="p-6 space-x-1">
        <h1 className="text-3xl font-bold">Demo App 📋</h1>
      </div>
      
      <div className="FilterBoxes px-6 mb-4">
        {/* Add filter dropdown here later */}
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