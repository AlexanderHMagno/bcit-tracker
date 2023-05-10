import styles from "./assignment.module.css";
import { TbTrash  } from "react-icons/tb";
import { BsFillCheckCircleFill  } from "react-icons/bs";


interface props {
  title: string
  status : number,
  removeTodo: (idx:number) => void,
  idx: number
}


export function Assignment({title, status,removeTodo, idx} : props) {
  return (
    <div className={styles.assignment}>
      
      <button onClick={() => console.log("alex")} className={styles.checkContainer}>
        {status ?<BsFillCheckCircleFill/> :<div />}
      </button>

      <p className={status? styles.textCompleted : ""}>{title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} onClick={() => removeTodo(idx)} />
      </button>
    </div>
  );
}
