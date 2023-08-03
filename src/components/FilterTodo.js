import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
function FilterTodo() {
  return (
    <div className="container-fluid text-center">
    <div className="row">
      <div className="btn-group btn-group-lg mt-5  ">
        <Link className="btn btn-default btn-lg btn-primary me-3" to={'finished'}>Finish Todo</Link>
        <Link className="btn btn-default btn-lg btn-primary" to={'infinished'}>Infinish Todo</Link>      </div>
    </div>
  
  <Outlet/>
</div>
  )
}

export default FilterTodo
