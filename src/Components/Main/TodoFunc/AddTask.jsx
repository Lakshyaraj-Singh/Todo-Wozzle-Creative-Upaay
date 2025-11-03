export const AddTask = ({taskDetails,handleAddTask,onclose}) => {

   const handleAddTask=(e)=>{
  
   }
  return (
    <>
    <div className=" absolute backdrop-blur-sm inset-0 z-50 h-full w-full flex justify-center items-center">
        <div className="h-50 w-50 bg-white rounded-md shadow-2xl ">
          <form action="
">
  <input type="text" placeholder="Task name" value={taskDetails.name} onChange={handleChange} />


            </form>
        </div>
    </div>
    </>
  )
}