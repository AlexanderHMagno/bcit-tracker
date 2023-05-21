import styles from "./assignment.module.css";
import { intervalToDuration } from 'date-fns';




interface props {
  dueDate: Date,
}


export function DueDate({dueDate} : props) {

  const dueDateFormat = intervalToDuration({end: dueDate, start: new Date()});
  const {days, hours} = dueDateFormat;
  

  if (days) {
    return <><span className={[styles.regularPill, styles.pill].join(" ")}>{"Due: " + (days + 1 )  + " days"}</span></>
  }

  if (hours) {
    return <><span className={[styles.dangerPill, styles.pill].join(" ")}>Due: Tomorrow</span></>;
  }

  return <>{""}</>
 
}
