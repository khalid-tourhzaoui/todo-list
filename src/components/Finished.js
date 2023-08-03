import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo,handleCheckbox } from '../redux/actions'
import TodoItem from './TodoItem'
function FinishTodo() {
  const countState=useSelector(state=>state)
  return (
    <>
    {
      countState.map((ele)=>ele.completed ?<TodoItem ele={ele} removeTodo={removeTodo} handleCheckbox={handleCheckbox} key={ele.id}/> :null)}
    </>
  )
}

export default FinishTodo


    
