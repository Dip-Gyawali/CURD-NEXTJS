'use client'
import React, { createContext, useState } from "react";

const ItemContext = createContext();
export function ItemProvider({ children }) {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  function handleTasks() {
    if (input.length > 0) {
      setTask((prevTask) => [...prevTask, input]);
      setInput("");
    }
  }

  function handleDelete(id){
    const newTask = task.filter((ele,index)=> {return index!==id});
    setTask(newTask);
  }

  function handleUpdate(id,newChange){
    const taskUpdated = task.map((ele,index)=>{
       return id === index? newChange: ele;
    })
    setTask(taskUpdated);
  }
  return (
    <ItemContext.Provider value={{ input, setInput, task, handleTasks , handleDelete , handleUpdate }}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;
