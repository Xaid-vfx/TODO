import './App.css';
import Header from "./Components/header";
import { Footer } from "./Components/Footer";
import { Todos } from "./Components/Todos";
import React, { useState, useEffect } from 'react';
//import {Todoitems} from "./Components/Todoitems";
import { Addtodo } from "./Components/Addtodo";
import { About } from "./Components/About";
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
// import { Switch } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on DEL of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno
    if (todos.length === 0)
      sno = 1
    else
      sno = todos[todos.length - 1].sno + 1;
    console.log("added")
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title={"Todos List"} />
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path='/add' element={<Addtodo addTodo={addTodo} />}/>
        <Route path='/' element={<Todos todos={todos} onDelete={onDelete} />}/>
          

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
