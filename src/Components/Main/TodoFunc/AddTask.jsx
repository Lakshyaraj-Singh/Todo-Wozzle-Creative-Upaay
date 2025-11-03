import { useEffect, useState ,useRef} from 'react';

export const AddTask = ({handleAddTask,onclose}) => {
  const [form, setForm] = useState({ taskName: '', taskDesc: '', priority: 'high' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
   e.preventDefault()
   
      handleAddTask(form);
      onclose();
    
   
    
  };

  return (
    <>
      <div  className=" absolute inset-0 z-50 h-full w-full flex justify-center items-center backdrop-blur-sm bg-black/20 p-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Add Task</h3>
            <button type="button" onClick={onclose} className="h-8 w-8 rounded-md border hover:bg-gray-50">✕</button>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="taskName"
              placeholder="Task name"
              value={form.taskName}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              required
            />
            <textarea
              name="taskDesc"
              placeholder="Task description"
              value={form.taskDesc}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full min-h-28"
            />
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={onclose}
                className="px-4 py-2 rounded-md border hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}