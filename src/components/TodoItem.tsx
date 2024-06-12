import React, { useState } from "react";
import { Todo } from "../types/todo";

import {
  Flex,
  Heading,
  Tag,
  TagLabel,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useActions } from "../hooks/useActions";
import EditTodoModal from "./EditTodoModal";
import { capitalizeFirstLetter } from "../utils";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { deleteTodo } = useActions();

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  

  return (
    <Flex
      bg={"white"}
      p={5}
      maxW={"lg"}
      rounded={"md"}
      justifyContent={"space-between"}
    >
      <Heading as="h5" size="md" isTruncated>
        {capitalizeFirstLetter(todo.title)}
      </Heading>
      <Flex gap={2}>
        <Tag
          borderRadius="full"
          variant="solid"
          colorScheme={todo.completed ? "green" : "yellow"}
        >
          <TagLabel>{todo.completed ? "Done" : "Pending"}</TagLabel>
        </Tag>

        <IconButton
          onClick={() => setIsOpen(true)}
          size={"medium"}
          p={1}
          variant="solid"
          colorScheme="blue"
          aria-label="Edit"
          icon={<EditIcon />}
        />
        <IconButton
          onClick={handleDelete}
          size={"medium"}
          p={1}
          variant="solid"
          colorScheme="red"
          aria-label="Delete"
          icon={<DeleteIcon />}
        />
      </Flex>
      <EditTodoModal
        onClose={() => setIsOpen(false)}
        todo={todo}
        isOpen={isOpen}
      />
    </Flex>
  );
};

export default TodoItem;
