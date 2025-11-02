import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import TaskCard from './TaskCard';

export const Columns = ({ title, columnId, tasks }) => {
    const dispach = useDispatch();
    let [taskDetails, SetTaskDetails] = useState(
        {
            taskName: "",
            taskDesc: "",
            priority: "high"
        }
    )
    let [taskNew,setTaskNew]=useState(false)

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskDetails.taskName.trim()) {
            dispatch(addTask({
                columnId,
                task: {
                    name: taskDetails.taskName,
                    description: taskDetails.taskDesc,
                    priority: taskDetails.priority
                }
            }));
            SetTaskDetails({
                taskName: "",
                taskDesc: "",
                priority: "high"
            })

        }
    };

    return (
        <>
            <div className='w-60 rounded'>
                <div className='flex justify-between border-b-4 border-pink-700 '><div><h2>{title}</h2> <span>{tasks.length}</span></div>
                    <i onClick={()=>setTaskNew(true)}>+</i>
                </div>
                <div className='tasks mt-5 flex flex-col gap-3'>
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} columnId={columnId} />
                    ))}
                </div>

            </div>
        </>
    )
}