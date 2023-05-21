import styles from "./assignment.module.css";
import { intervalToDuration } from 'date-fns';




interface props {
  dueDate: Date,
}


export function DueDate({dueDate} : props) {

  const dueDateFormat = intervalToDuration({end: dueDate, start: new Date()});
  const {days = 0, hours = 0, years = 0 , months = 0} = dueDateFormat;
  

  

  if (years || months || days) {
    let totalDays = days? (days + 1) : 0;
    totalDays += months? (months *  30) : 0;
    totalDays += years ? years * 365 : 0;
    return <><span className={[styles.regularPill, styles.pill].join(" ")}>{"Due: " + (totalDays)  + " days"}</span></>
  }

  if (hours) {
    return <><span className={[styles.dangerPill, styles.pill].join(" ")}>Due: Tomorrow</span></>;
  }

  return <>{""}</>
 
}
