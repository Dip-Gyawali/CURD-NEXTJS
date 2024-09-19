'use client'
import ItemContext from "@/app/context/itemContext"
import Link from "next/link";
import { useContext, useState } from "react"

export default function Tasks({params}){
    const {task, handleUpdate} = useContext(ItemContext);
    const taskid = parseInt(params.id)
    const individualTask = task[taskid];

    const [taskUpdate,setTaskUpdate] = useState(individualTask);

    function UpdateTask(e){
        setTaskUpdate(e.target.value)
    }

    function Updating(){
        handleUpdate(taskid , taskUpdate);
    }

    function getRandom(count){
        return Math.floor(Math.random() * count)
     }

     const random = getRandom(2);
     if(random===1){
        throw new Error("Error occured")
     }
     
    return(
        <div className="flex gap-5 ">
            <input type="text" value={taskUpdate} onChange={UpdateTask} className="border-2 border-black p-2 rounded-xl" />
            <Link href='/'>
            <button onClick={Updating} className="bg-green-500 p-2 rounded-xl">Update</button>
            </Link>
        </div>
    )
}