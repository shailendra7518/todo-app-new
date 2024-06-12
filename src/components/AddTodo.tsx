import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        userId: 10,
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
      minW={"30%"}
      maxW={"md"}
      p={6}
    >
      <Heading color={"white"} fontSize={"xxx-large"}>
        Todo App
      </Heading>
      <FormControl
        as="form"
        bg={"white"}
        p={3}
        rounded={"md"}
        isRequired
        onSubmit={handleSubmit}
      >
        <FormLabel>Task Name</FormLabel>
        <Input
          placeholder="Add your task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Button colorScheme="green" mt={2} type="submit" variant="solid">
          Add Task
        </Button>
      </FormControl>
    </Flex>
  );
};

export default AddTodo;
