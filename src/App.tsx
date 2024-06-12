import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import TodoList from "./components/TodoList";
import {  Flex } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";

function App() {
  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Flex  direction={["column","column","row"]} alignItems={["space-between","center"]} justifyContent={["center","space-between"]}  w={'full'}  bg={"#2C43DD"}>\
     <AddTodo/>
      <TodoList />;
    </Flex>
  );
}

export default App;
