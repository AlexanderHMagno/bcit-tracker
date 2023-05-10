import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";


interface props {
  addTodo: (title:string) => void
}


export function Header({addTodo} : props) {

  const [title, setTitle] = useState("");
  const handleClick = () => {
    setTitle("");
    addTodo(title);
    
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <div className={styles.newAssignmentForm}>
        <input onChange={(e) => setTitle(e.target.value) } placeholder="Add a new assignment" type="text" value={title} />
        <button disabled={!title.length} onClick={handleClick}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </div>
    </header>
  );
}
