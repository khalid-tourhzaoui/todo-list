export const addTodo=(payload)=>{
    return{
        type: 'ADD_TODO',
        payload
    }
}

export const deleteAll = () =>{
    return{
        type: 'DELETE_ALL'
    }
}

export const removeTodo=(payload)=>{
    return{
        type: 'REMOVE_TODO',
        payload
    }
}



export const handleCheckbox=(payload)=>{
    return{
        type: 'UPDATE_CHECKBOX',
        payload
    }
}