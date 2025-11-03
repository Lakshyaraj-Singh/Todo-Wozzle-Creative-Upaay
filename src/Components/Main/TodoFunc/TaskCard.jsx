import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { deleteTask } from '../../../AppStore/taskSlice';

export const TaskCard = ({task,columnId}) => {
    const dispatch = useDispatch();
    let [hover,setHover]=useState(false)
    const handleDelete = () => {
        if (confirm('Delete this task?')) {
          dispatch(deleteTask({ columnId, taskId: task.id }));
        }
      };
    const handleMove=()
    
  return (
    <>
    <div onClick={()=>setHover(!hover)} className="card bg-white w-70  text-sm shadow-sm">
    {hover?<div className="card-body" > <button onClick={handleDelete} className='btn bg-red-500 '>Delete</button><button onClick={handleDelete} className='btn bg-red-500 '>Move Progress</button><button onClick={handleDelete} className='btn bg-red-500 '>Move Done</button></div>:
    
  <div className="card-body">

    <h2 className="card-title  ">
     
     <div className='flex flex-col' ><div className="badge badge-secondary ">{task.priority}</div>
      <span >{task.name}</span></div>
    </h2>
    <p className='text-xs text-gray-700'>{task.description}</p>
    <div className="card-actions justify-end">
      <div className="text-xs text-gray-700"><i className="fa-regular fa-message mr-0.5"></i> 10 comments</div>
      <div className="text-xs text-gray-700"><i>3 files</i></div>
    </div>
  </div>}
</div>
    
    </>
  )
}