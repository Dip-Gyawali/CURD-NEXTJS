import React, { useContext } from 'react'
import ItemContext from '../context/itemContext'
import Link from 'next/link'

export default function Alltasks({tasks,id}) {
    const {handleDelete} = useContext(ItemContext)
  return (
    <Link href={`/tasks/${id}`}>
    <ul className='flex justify-between gap-10'>
      <li className='flex gap-5 border-2 border-black rounded-lg p-4 items-center'>
        <h1 className='text-yellow-600 font-bold'>{tasks}</h1>
        <button className='bg-green-600  p-3 rounded-xl' onClick={()=> handleDelete(id)}>Delete</button>
      </li>
    </ul>
    </Link>
  )
}
