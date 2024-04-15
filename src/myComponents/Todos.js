import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className=' w-full justify-center flex'>
      <div className='w-6/12 border border-gray-300'>
        <p className='font-medium w-full border-b border-gray-300 my-3'>My Todo List!</p>
        {props.todos.length === 0 ? "No todo to display" :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.slNo} onDelete={props.onDelete} />
          })
        }

      </div>
    </div>
  )
}
