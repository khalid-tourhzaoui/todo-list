import React from 'react'
import { useSelector } from 'react-redux';

function CountTodo() {
  const todos_completed = useSelector((state) =>state.filter((todo) => todo.completed === true));
  const todos_incompleted = useSelector((state) =>state.filter((todo) => todo.completed === false));

	return(
  <div className='container text-center' style={{paddingTop:'5rem'}}>
<table className="table  w-75 mx-auto bg-warning">
  <thead>
    <tr>
      <th className='border border-5 rounded-1'>TOTAL COMPLETED ITEMS</th>
      <th className='border border-5 rounded-1'>TOTAL INCOMPLETED ITEMS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='border border-5 rounded-1 bg-dark text-danger'>{todos_completed.length}</td>
      <td className='border border-5 rounded-1 bg-dark text-danger'>{todos_incompleted.length}</td>
    </tr>
  </tbody>
</table>
</div>
)}
export default CountTodo