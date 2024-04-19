import './App.css';
import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';
import AddTodo from './myComponents/AddTodo';
import About from './myComponents/About';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EditTodo from './myComponents/EditTodo';

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    const newTodos = (todos.filter((e) => {
      return e != todo
    }))

    const updatedTodos = newTodos.map((todo, index) => ({
      ...todo, slNo: index + 1
    }))

    setTodos(updatedTodos)
  }


  const taskDone = (slNo) => {
    const newTodos = todos.map((todo) => {
      if (todo.slNo === slNo) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState(initTodo)

  const addTodo = (title, desc) => {
    let slNo = 0
    if (todos.length === 0) {
      slNo = 1
    } else {
      slNo = todos[todos.length - 1].slNo + 1
    }
    const myTodo = {
      slNo: slNo,
      title: title,
      desc: desc,
      checked: false
    }
    setTodos([...todos, myTodo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);



  const [isModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleOpenEditModal = (todo) => {
    setIsEditModalOpen(true);
    setEditingTodo(todo)
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingTodo(null)
  };

  const updateTodo = (slNo, newTitle, newDesc) => {
    const editedTodos = todos.map((todo) => {
      if (todo.slNo === slNo) {
        return { ...todo, title: newTitle, desc: newDesc };
      }
      return todo;
    });
    setTodos(editedTodos);
    console.log(editedTodos);
    handleCloseEditModal();
  };

  return (
    <Router>
      <div className="App mx-auto w-full bg-MainbgColor h-screen">
        <Header title="TODO LIST"></Header>
        <div className='w-full flex justify-center'>
          <div className='w-6/12'>
            <Routes>
              <Route exact path="/" element={
                <>
                  <AddTodo addTodo={addTodo}></AddTodo>
                  <EditTodo
                    updateTodo={(title, desc) => updateTodo(editingTodo.slNo, title, desc)}
                    isOpen={isModalOpen}
                    onClose={handleCloseEditModal}
                    editingTodo={editingTodo}
                  ></EditTodo>
                  <Todos
                    todos={todos}
                    taskDone={taskDone}
                    handleOpenEditModal={handleOpenEditModal}
                    onDelete={onDelete}
                  ></Todos>
                </>
              } />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
