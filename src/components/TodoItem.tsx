import React from "react";
import { Todo } from "../types/todo";

import {
  Flex,
  Heading,
  Text,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";

import { Icon } from '@chakra-ui/react'
import { DeleteIcon,EditIcon } from '@chakra-ui/icons'

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <Flex bg={"white"} p={5} rounded={"md"} justifyContent={"space-between"}>
      <Heading as="h5" size="md">
        {todo.title}
      </Heading>
      <Flex gap={2}>
      <Tag borderRadius="full" variant="solid" colorScheme={todo.completed? "green":"yellow"}>
        <TagLabel>{todo.completed? "Done":"Pending"}</TagLabel> 
      </Tag>
      <Icon color={'blue'} as={EditIcon} />
      <Icon as={DeleteIcon} color={"red"} />
      </Flex>
     
    </Flex>
  );
};

export default TodoItem;
