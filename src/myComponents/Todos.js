import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className=' w-full justify-center flex pt-4 text-gray-600'>
      <div className='shadow-md bg-white w-full rounded-md py-5'>
        <p className='font-bold w-full my-auto py-2 uppercase  text-sm'>My Todo List</p>
        {props.todos.length === 0 ? <p className='font-bold py-2 text-sm'>No todo to display!!</p> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.slNo} onDelete={props.onDelete}
              taskDone={props.taskDone} onEdit={props.handleOpenEditModal} />
          })
        }
      </div>
    </div>
  )
}
