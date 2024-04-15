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

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log();
    const newTodos = (todos.filter((e) => {
      return e != todo
    }))

    const updatedTodos = newTodos.map((todo, index) => ({
      ...todo, slNo: index + 1
    }))

    setTodos(updatedTodos)
  }

  const [todos, setTodos] = useState(initTodo)

  const addTodo = (title, desc) => {
    let slNo = 0
    if (todos.length == 0) {
      slNo = 1
    } else {
      slNo = todos[todos.length - 1].slNo + 1
    }
    const myTodo = {
      slNo: slNo,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <Router>
      <div className="App">
        <Header title="Todos List"></Header>
        <Routes> {/* Use Routes instead of Switch */}
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo}></AddTodo>
              <Todos todos={todos} onDelete={onDelete}></Todos>
            </>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
