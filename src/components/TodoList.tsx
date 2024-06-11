import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Flex } from "@chakra-ui/react";

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  console.log(todos)

  const onDelete = () => {};

  const onToggle = () => {};

  return (
    <Flex  bg="#D5CCFF"
    gap={3}
    p={3}
    direction="column"
    maxH="98vh"
    overflowY="scroll"
    css={{
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        borderRadius:"10px"
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '8px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }}>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
    </Flex>
  );
};

export default TodoList;
