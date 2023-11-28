
import { createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "list",
  initialState: {
    list: [
      {
        id: 1,
        taskname: "Wake up",
        status: false,
      },
      {
        id: 2,
        taskname: "Be surprised",
        status: false,
      },
      {
        id: 3,
        taskname: "Doing something",
        status: false,
      },
      {
        id: 4,
        taskname: "Get drunk",
        status: true,
      },
      {
        id: 5,
        taskname: "Go back to sleep",
        status: false,
      },
    ],
    selectedItems: [],
  },
  reducers: {
    addTodo(state, action) {
      state.list.push({
        id: action.payload.id,
        taskname: action.payload.taskname,
        status: action.payload.status,
      });
    },
    removeTodo(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    statusTodo(state, action) {
      state.list = state.list.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
    },
    changeName(state, action) {
      const { id, newTaskName } = action.payload;
      state.list = state.list.map((item) =>
        item.id === id ? { ...item, taskname: newTaskName } : item
      );
    },
    SelectAll: (state) => {
      state.selectAllChecked = !state.selectAllChecked;
    
      if (state.selectAllChecked) {
        state.selectedItems = state.list.map((item) => item.id);
      } else {
        state.selectedItems = [];
      }
      },
    deleteSelected: (state) => {
      state.list = state.list.filter(
        (item) => !state.selectedItems.includes(item.id)
      );
      state.selectedItems = [];
      state.selectAllChecked = false;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  statusTodo,
  changeName,
  SelectAll,
  deleteSelected,
} = todoSlice.actions;

export default todoSlice.reducer;


