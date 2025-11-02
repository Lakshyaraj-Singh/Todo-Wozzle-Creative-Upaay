import { useDispatch } from 'react-redux';
import { deleteTask, moveTask } from '../store/taskSlice';
import { useState } from 'react';

export const TaskCard = ({key,task,columnId}) => {
    let [hover,setHover]=useState(false)
    const handleDelete = () => {
        if (confirm('Delete this task?')) {
          dispatch(deleteTask({ columnId, taskId: task.id }));
        }
      };
    
  return (
    <>
    <div onClick={()=>setHover(!hover)} className="card bg-base-100 w-96 shadow-sm">
    {hover?<div className="card-body" > <button onClick={handleDelete} className='btn bg-red-500 '>Delete</button></div>:
    
  <div className="card-body">

    <h2 className="card-title flex flex-col ">
      <div className="badge badge-secondary badge-outline">{task.priority}</div>
      <span>{task.name}</span>
    </h2>
    <p className='text-xs text-gray-700'>{task.description}</p>
    <div className="card-actions justify-end">
      <div className="text-xs text-gray-700"><i></i> 10 comments</div>
      <div className="text-xs text-gray-700"><i>3 files</i></div>
    </div>
  </div>}
</div>
    
    </>
  )
}