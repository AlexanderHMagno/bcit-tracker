import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { todos } from "./data";
import { useState } from "react";

function App() {

  const [Todo, setTodos] = useState(todos);
  const addTodo = (title:string) => {
    const newTodo = {
      title,
      status:0
    }
    setTodos([...Todo,newTodo]);
  }

  const removeTodo = (idx:number) => {
    Todo.splice(idx,1);
    setTodos([...Todo]);
  }

  return (
    <>
      <Header addTodo={addTodo} />
      <Assignments removeTodo= {removeTodo} todos = {Todo} />
    </>
  );
}

export default App;
