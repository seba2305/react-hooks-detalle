// Arreglo inicial con su estado
const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}];
// Definimos el reducer
const todoReducer = ( state = initialState, action ) => {
    
    if (action?.type === 'agregar') {
        return [ ...state, action.payload ];
    }

    return state;
}
// Inicializamos
let todos = todoReducer();

// Definimos y agregamos un nuevo todo
const newTodo = [{
    id: 2,
    todo: 'comprar leche',
    done: false
}];
// Lo agregamos por medio de una accion
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};
// Enviamos la accion definida al reducer
todos = todoReducer(todos, agregarTodoAction);


console.log(todos);