import React from "react";
import { Route,Routes } from "react-router";
import Nav from './components/Navbar/Nav'
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import CountTodo from "./components/CountTodo";
import About from "./components/About";
import FinishTodo from './components/Finished'
import InfishTodo from './components/Infinished'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
function App() {
  return (
    <div style={{height:'36.7rem'}} className='bg-dark'>
      <Nav/>
        <Routes className="container ">
                  <Route exact path='/' element={<TodoList/>}></Route>
                  <Route exact path='/addTodo' element={<AddTodo/>}></Route>
                  <Route exact path='/filterTodo' element={<FilterTodo/>}>
                    <Route exact path="finished" element={<FinishTodo/>}/>
                    <Route exact path="infinished" element={<InfishTodo/>}/>
                  </Route>
                  <Route exact path='/countTodo' element={<CountTodo/>}></Route>
                  <Route exact path='/about' element={<About/>}></Route>
           </Routes>
        
          
    </div>
  );
}

export default App;
