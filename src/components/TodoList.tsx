import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Flex } from "@chakra-ui/react";

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  console.log(todos);

  const onDelete = () => {};
  const onToggle = () => {};

  return (
    <Flex  
      gap={3}
      p={[0, 10]}
      direction="column"
      maxH="100vh"
      // alignItems={"center"}
      // justifyContent={"left"}
      w={["100vw",'initial']}
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
          borderRadius: "10px",
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'transparent',
        },
      }}
    >
      {todos &&
        todos.slice().reverse().map((todo) => (
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
