import styles from "./assignment.module.css";
import { differenceInDays } from 'date-fns';




interface props {
  dueDate?: Date,
}


export function DueDate({dueDate} : props) {
  
  const today = new Date();
  const deadLine = dueDate || today;
  const days = differenceInDays(deadLine, today);
  
  if (days) {
    return <><span className={[styles.regularPill, styles.pill].join(" ")}>{"Due: " + (days + 1)  + " days "}</span></>
  }

  if (today.getDate() != deadLine.getDate()) {
    return <><span className={[styles.dangerPill, styles.pill].join(" ")}>Due: Tomorrow</span></>;
  }

  return <></>
 
}
