// src/state/todosSlice.ts

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { fetchTodosApi, deleteTodoApi, editTodoApi, addTodoApi } from '../services/api';

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

// Async thunk for deleting a todo
export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
  await deleteTodoApi(id);
  return id;
});

// Async thunk for editing a todo
export const editTodo = createAsyncThunk('todos/editTodo', async (todo: Todo) => {
  const updatedTodo = await editTodoApi(todo);
  return updatedTodo;
});

// Async thunk for adding a todo
export const addTodo = createAsyncThunk('todos/addTodo', async (todo: Omit<Todo, 'id'>) => {
  const newTodo = await addTodoApi(todo);
  return newTodo;
});

// Slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    });
    builder.addCase(editTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    });
    builder.addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    });
  },
});

export default todosSlice.reducer;
