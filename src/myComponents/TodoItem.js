import React from 'react'

export default function TodoItem({ todo, onDelete }) {
  return (
    <div className='w-full'>
      <div className='my-2 p-2 w-full flex justify-between'>
        <ul className='text-left px-10 w-8/12'>
          <h1 className='font-medium font-xl'>{todo.slNo}. {todo.title}</h1>
          <p className='text-xs'>{todo.desc}</p>
        </ul>
        <button onClick={() => { onDelete(todo) }} className='w-16 h-10 bg-red-700 text-white text-sm rounded-md'>
          Delete
        </button>
      </div>
    </div>
  )
}
