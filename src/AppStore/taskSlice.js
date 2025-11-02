import { createSlice,nanoid } from '@reduxjs/toolkit';

const loadState = () => {
      const serializedState = localStorage.getItem('tasks');
      if (serializedState === null) {
        return {
          todo: [],
          inProgress: [],
          done: []
        };
      }
      return JSON.parse(serializedState);
    };

const taskSlice=createSlice({
    name:"tasks",
    initialState: {
        columns: loadState(),
        filter: 'all' 
      },
      reducers: {
        addTask: (state, action) => {
          const { columnId, task } = action.payload;
          state.columns[columnId].push({
            id: nanoid(),
            ...task,
            createdAt: new Date().toISOString()
          });
         
          localStorage.setItem('tasks', JSON.stringify(state.columns));
        },
        
        moveTask: (state, action) => {
          const { fromColumn, toColumn, taskId } = action.payload;
          
          
          const taskIndex = state.columns[fromColumn].findIndex(t => t.id === taskId);
          const [task] = state.columns[fromColumn].splice(taskIndex, 1);
          
         
          state.columns[toColumn].push(task);
          
          localStorage.setItem('tasks', JSON.stringify(state.columns));
        },
        
        deleteTask: (state, action) => {
          const { columnId, taskId } = action.payload;
          state.columns[columnId] = state.columns[columnId].filter(t => t.id !== taskId);
          localStorage.setItem('tasks', JSON.stringify(state.columns));
        },
        
        setFilter: (state, action) => {
          state.filter = action.payload;
        }
      } 
    });
    
    export const { addTask, moveTask, deleteTask, setFilter } = taskSlice.actions;
    export default taskSlice.reducer;

