import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";


interface todo { 
  title: string,
  status: number,
}

interface props {
  todos : todo[],
  removeTodo : (idx:number) => void
  markTodo: (idx:number) => void,
}



export function Assignments({todos, removeTodo, markTodo} : props) {

  const completed = todos.filter(x => x.status).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{todos.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {todos.length}</span>
        </div>
      </header>

      <div className={styles.list}>

        {todos.map((todo, idx) =>  <Assignment key={idx} idx={idx} title = {todo.title} status = {todo.status} removeTodo ={removeTodo} markTodo={markTodo}/> )}
       
      </div>
    </section>
  );
}
