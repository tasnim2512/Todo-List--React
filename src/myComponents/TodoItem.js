import React from 'react'
import edit from '../image/edit.svg'
import deleteImg from '../image/delete-1.svg'

export default function TodoItem({ todo, onDelete, taskDone, onEdit }) {

  const handleCheckbox = () => {
    taskDone(todo.slNo)
  };
  return (
    <div className='w-full px-8'>
      <div className='my-2 p-2 w-full flex justify-between border-b border-gray-300'>
        <ul className='text-left px-10 w-9/12 flex flex-wrap mb-2'>
          <label className="checkboxCustome mt-1">
            <input onChange={handleCheckbox} checked={todo.checked} id={`checkTask-${todo.slNo}`} type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <div className='w-6/12 px-2'>
            <h1 className='font-medium font-xl w-full'>
              {todo.checked ? <span className='line-through'>{todo.title}</span> : <span>{todo.title}</span>}
            </h1>
            <p className='text-xs w-full'>{todo.desc}</p>
          </div>
        </ul>
        <div className='flex space-x-3 px-8'>
          {!todo.checked ?
            <button onClick={() => onEdit(todo)} className='w-9 h-9 bg-HeaderbgColor rounded-full flex justify-center p-1'>
              <img className='w-5' src={edit} alt="" />
            </button> : ""}
          <button onClick={() => { onDelete(todo) }} className='w-9 h-9 bg-HeaderbgColor rounded-full flex justify-center p-1'>
            <img className='w-5' src={deleteImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
