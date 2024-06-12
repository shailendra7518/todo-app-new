// src/services/api.ts

import axios from 'axios';
import { Todo } from '../types/todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodosApi = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(API_URL);
  return response.data;
};

export const deleteTodoApi = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const editTodoApi = async (todo: Todo): Promise<Todo> => {
  // const response = await axios.put(`${API_URL}/${todo.id}`, todo);
  // return response.data;
  return todo
};

export const addTodoApi = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};
