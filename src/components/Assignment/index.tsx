import styles from "./assignment.module.css";
import { TbTrash  } from "react-icons/tb";
import { BsFillCheckCircleFill  } from "react-icons/bs";
import { capitalize } from "../../helpers/stringHelpers";
import { DueDate } from "../DueDate";
import { useStore } from "../../appStore";


interface props {
  title: string
  status : number,
  dueDate?: Date,
  idx: number
}


export function Assignment({title, status, dueDate, idx} : props) {

  const {removeTodo, markTodo} = useStore();
  
  
  return (
    <div className={styles.assignment}>
      
      <button onClick={() => markTodo(idx)} className={styles.checkContainer}>
        {status ?<BsFillCheckCircleFill/> :<div />}
      </button>

      <p className={status? styles.textCompleted : ""}>{capitalize(title)} {!status && <DueDate dueDate={dueDate}/>}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} onClick={() => removeTodo(idx)} />
      </button>
    </div>
  );
}
