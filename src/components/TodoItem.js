import React from 'react'
import { useDispatch } from 'react-redux'

function TodoItem({ele,removeTodo,handleCheckbox}) {
    const dispatch=useDispatch()
    const handelRemove=(id)=>{dispatch(removeTodo(id))}
    const handleCheck=(id)=>{dispatch(handleCheckbox(id))}
  return (
    <div className="container text-center bg-dark pt-3 ">
        <div className="row bg-warning g-2">
          <div className="col-6 fw-bold" >
            <label htmlFor={ele.id}  className="p-2 text-dark" style={ele.completed===true?{textDecoration:'line-through'}:null}>
              <input id={ele.id} type={'checkbox'} className={ele.completed? 'form-check-input border border-5 rounded-5  bg-success':'form-check-input border border-5 rounded-5 me-5 p-3'}
              checked={ele.completed} onChange={()=>handleCheck(ele.id)} />{ele.todo}</label>
            </div>
          <div className="col-6 my-auto">
            <button className='btn btn-danger w-50  mb-2 ' onClick={()=>handelRemove(ele.id)}><i className='bi bi-trash'></i></button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem

