import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {TaskCard} from './TaskCard';
import { addTask } from '../../../AppStore/taskSlice';
import { AddTask } from './AddTask';

export const Columns = ({ title, columnId, tasks }) => {
    const dispatch = useDispatch();
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
            <div className='w-80 rounded-md bg-gray-200 p-3 rounded'>
                <div className='flex justify-between border-b-4 border-pink-700 '><div className='flex gap-2'><h2 className='font-semibold'>{title}</h2> <span className='rounded-full bg-gray-500 text-white h-5 w-5 flex justify-center items-center '>{tasks.length}</span></div>
                    <i className=' rounded-md h-5 w-5 flex items-center justify-center font-semibold border-2 border-purple-700' onClick={()=>setTaskNew(true)}>+</i>
                </div>
                <div className='tasks mt-5 flex flex-col gap-3'>
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} columnId={columnId} />
                    ))}
                </div>

            </div>

        {taskNew&&<AddTask handleAddTask={handleAddTask} onclose={()=>{SetTaskDetails(false)}} taskDetails={taskDetails}/>}  
        </>
    )
}