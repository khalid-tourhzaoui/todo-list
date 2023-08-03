
const initialState=[
    {id: 1, todo: 'learn React js', completed: false},
    {id: 2, todo: 'Learn PHP Laravel', completed: false},
    {id: 3, todo: 'Learn UML', completed: true},
];

const TodoReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_ALL':
            return [];
        case 'REMOVE_TODO':
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case 'UPDATE_CHECKBOX':
            let chekArray=[];
            state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
                chekArray.push(item);
            })
            return chekArray;
        default: return state;
    }
}
export default TodoReducer