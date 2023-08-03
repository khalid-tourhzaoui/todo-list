import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let todoObj = {
      todo: value,
      completed: false,
    };
    setValue('');
    dispatch(addTodo(todoObj));
	navigate("/");
  };

  const disabled = () => {
    return !value; // Return false when value is empty, to disable the button.
  };

  return (
    <form className="container text-center pt-5 mt-5 " onSubmit={(e) => handleSubmit(e)}>
      <div className="row g-2">
        <div className="col-8 mx-auto">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Add todo..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button className="btn btn-warning  w-25 mx-auto" type="submit" disabled={disabled()}>
          ADD 
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
