import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch } from '../state/store';
import { addTodo, deleteTodo, editTodo, fetchTodos } from '../state/todoSlice';

const actionCreators = {
  addTodo,
  deleteTodo,
  editTodo,
  fetchTodos,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionCreators, dispatch);
};
