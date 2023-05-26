import styles from "./header.module.css";
import { AiOutlinePlusCircle, AiOutlineCalendar } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';
import { useStore } from "../../appStore";




export function Header() {

  const {addTodo} = useStore();
  const [dueDate, setDueDate] = useState<Date>();
  const [dateOpen, setDateOpen] = useState(false);
  const [title, setTitle] = useState("");
  
  const buttonDisabled = !title.length || !dueDate;
  const selectDate = (e: Date | undefined) => {
    
    setDateOpen(false);
    if(!e) return;
    setDueDate(e); 
    
  } 

  const handleClick = () => {
    setTitle("");
    if(title && dueDate) addTodo(title,dueDate);
    setDueDate(undefined);
    
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <div className={styles.newAssignmentForm}>
        <input onChange={(e) => setTitle(e.target.value) } placeholder="Add a new assignment" type="text" value={title} />
        
        <div >
        <span onClick={()=>setDateOpen(!dateOpen)} className={styles.dateButton}> <AiOutlineCalendar size="20"/> <p>{dueDate && format(dueDate,'PP')}</p> </span> 
          <div >
            {dateOpen ? 
            <div className={styles.absolute} >
              <DayPicker
                mode="single"
                selected={dueDate}
                onSelect={selectDate}
                fromDate={new Date()}
              />
              </div>
              : ""
            }
          </div>
        </div> 

        <button disabled={buttonDisabled} onClick={handleClick}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </div>
    </header>
  );
}
