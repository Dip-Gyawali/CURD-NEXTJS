"use client";
import { useContext, useState } from "react";
import "./globals.css";
import Alltasks from "./component/Alltasks";
import itemContext from "./context/itemContext";

export default function Home() {
  const {input,setInput,task,handleTasks}= useContext(itemContext);
  
  return (
    <div className="flex items-center flex-col gap-5">
      <div className="text-white bg-black w-[100%] flex items-center justify-center p-5">
        <h1 className="font-bold text-4xl">NextJS Curd</h1>
      </div>
      <div className="flex gap-5 ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-black rounded-xl p-2"
          placeholder="Enter Task"
        />
        <button onClick={handleTasks} className="p-2 bg-green-600 rounded-xl hover:bg-green-700">Submit</button>
      </div>
        {task.map((ele, index) => (
          <Alltasks tasks={ele} id={index} key={index}/>
        ))}
    </div>
  );
}
