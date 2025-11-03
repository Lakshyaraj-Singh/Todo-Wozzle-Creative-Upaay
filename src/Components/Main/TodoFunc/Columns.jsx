import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {TaskCard} from './TaskCard';
import { addTask } from '../../../AppStore/taskSlice';
import { AddTask } from './AddTask';

export const Columns = ({ title, columnId, tasks }) => {
    const dispatch = useDispatch();
   
    let [taskNew,setTaskNew]=useState(false)

    const handleAddTask = (taskDetails) => {
        
        if (taskDetails.taskName.trim()) {
            dispatch(addTask({
                columnId,
                task: {
                    name: taskDetails.taskName,
                    description: taskDetails.taskDesc,
                    priority: taskDetails.priority
                }
            }));
            
            console.log("Form SUbm")

        }
    };

    return (
        <>
            <div className='w-80 rounded-md bg-gray-200 p-3 rounded'>
                <div className='flex justify-between border-b-4 border-pink-700  cursor-pointer'><div className='flex gap-2'><h2 className='font-semibold'>{title}</h2> <span className='rounded-full bg-gray-500 text-white h-5 w-5 flex justify-center items-center '>{tasks.length}</span></div>
                    <i className=' rounded-md h-5 w-5 flex items-center justify-center font-semibold border-2 cursor-pointer border-purple-700' onClick={()=>setTaskNew(true)}>+</i>
                </div>
                <div className='tasks mt-5 cursor-pointer flex flex-col gap-3'>
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} columnId={columnId} />
                    ))}
                </div>

            </div>

        {taskNew&&<AddTask handleAddTask={handleAddTask} onclose={()=>{setTaskNew(false)}}/>}  
        </>
    )
}