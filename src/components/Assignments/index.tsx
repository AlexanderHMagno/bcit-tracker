import { useStore } from "../../appStore";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";


export function Assignments() {

  const {todos} = useStore();
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

        {todos.map((todo, idx) =>  <Assignment key={idx} idx={idx} {...todo}/> )}
       
      </div>
    </section>
  );
}
