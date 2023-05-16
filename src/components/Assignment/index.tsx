import styles from "./assignment.module.css";
import { TbTrash  } from "react-icons/tb";
import { BsFillCheckCircleFill  } from "react-icons/bs";
import { capitalize } from "../../helpers/stringHelpers";


interface props {
  title: string
  status : number,
  removeTodo: (idx:number) => void,
  markTodo: (idx:number) => void,
  idx: number
}


export function Assignment({title, status,removeTodo, markTodo, idx} : props) {
  return (
    <div className={styles.assignment}>
      
      <button onClick={() => markTodo(idx)} className={styles.checkContainer}>
        {status ?<BsFillCheckCircleFill/> :<div />}
      </button>

      <p className={status? styles.textCompleted : ""}>{capitalize(title)}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} onClick={() => removeTodo(idx)} />
      </button>
    </div>
  );
}
