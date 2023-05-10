import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { todos } from "./data";
import { useState } from "react";

function App() {

  const [Todo, setTodos] = useState(todos);
  
  const addTodo = (title:string) => setTodos([...Todo,{title,status:0}]);

  const removeTodo = (idx:number) => {
    const newTodos = [...Todo];
    newTodos.splice(idx,1);
    setTodos([...newTodos]);
  }

  const markTodo = (idx:number) => {
    const newTodos = [...Todo];
    let newStatus = newTodos[idx];
    newStatus.status = newStatus.status ? 0 : 1;
    newTodos[idx] = newStatus;
    setTodos([...newTodos]);
  }

  return (
    <>
      <Header addTodo={addTodo} />
      <Assignments removeTodo= {removeTodo} markTodo={markTodo} todos = {Todo} />
    </>
  );
}

export default App;
