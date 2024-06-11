import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        userId: 1,
        id: Math.random(),
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <Flex
      gap={3}
      h={"max-content"}
      bg={"#5D5FEF"}
      direction={"column"}
      borderRadius={"md"}
      p={6}
    >
      <Heading color={"white"} fontSize={"xxx-large"}>
        Todo App
      </Heading>
      <FormControl bg={"white"} p={3} rounded={"md"} isRequired>
        <FormLabel>Task Name</FormLabel>
        <Input placeholder="Add your task name" />
        <FormLabel>Priority</FormLabel>
        <Select placeholder="Select Priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
      </FormControl>
    </Flex>
  );
};

export default AddTodo;
