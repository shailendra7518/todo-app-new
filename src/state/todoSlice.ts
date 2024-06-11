import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { fetchTodosApi } from '../services/api';

// Initial state for todos
interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

// Async thunk for fetching todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const todos = await fetchTodosApi();
  return todos;
});

// Slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    });
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
