import { create } from 'zustand';
import { todos } from "./data";


type Todos = {
  title: string, 
  status: number,
   dueDate: Date |undefined
}

type State = {
  todos: Todos[], 
  addTodo : (title:string, dueDate: Date) => void,
  removeTodo : (idx:number) => void,
  markTodo : (idx:number) => void,
}


export const useStore = create<State>((set) => ({
  todos: todos,
  addTodo: (title:string, dueDate: Date ) => set((state) => ({todos: [...state.todos, {title,status:0, dueDate} ]})),
  removeTodo : (idx:number) => set ((state) => {
    const newTodos = [...state.todos];
    newTodos.splice(idx,1);
    return ({todos: [...newTodos]});
  }),
  markTodo: (idx:number) => set((state) => {
    const newTodos = [...state.todos];
    let newStatus = newTodos[idx];
    newStatus.status = newStatus.status ? 0 : 1;
    newTodos[idx] = newStatus;
    return ({todos: [...newTodos]});
  })

}))

