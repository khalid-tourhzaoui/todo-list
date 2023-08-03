import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo,handleCheckbox } from '../redux/actions'
import TodoItem from './TodoItem'

function InfishedTodo() {
  const data=useSelector(state=>state)
  return (
    <>
    {data.map((ele)=>ele.completed===false ?<TodoItem ele={ele} removeTodo={removeTodo} handleCheckbox={handleCheckbox} key={ele.id}/> :null )}
    </>
      )
}

export default InfishedTodo
