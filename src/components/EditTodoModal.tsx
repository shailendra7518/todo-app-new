import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { Todo } from "../types/todo";
import { useActions } from "../hooks/useActions";

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  todo,
}) => {
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);
  const { editTodo } = useActions();

  useEffect(() => {
    setTitle(todo.title);
    setCompleted(todo.completed);
  }, [todo]);

  const handleSave = () => {
    console.log(todo);
    editTodo({ ...todo, title, completed });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Task Name</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <Checkbox
              isChecked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            >
              Done
            </Checkbox>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTodoModal;
