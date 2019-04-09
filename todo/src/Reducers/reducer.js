import { NEWTODO, COMPLETED } from '../Actions/action';

const initialState = {
    todos: [
        {
            value: 'Walk the dog.',
            completed: false
        },
        {
            value: 'Finish homework',
            completed: false
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case NEWTODO:
            const newTodo = { value: action.payload, completed: false }
            return { ...state, todos: [...state.todos, newTodo] }
        case COMPLETED:
            return {
                ...state, todos: state.todos.map((todo, index) =>
                    action.payload === index ? { ...todo, completed: !todo.completed } : todo)
            }
        default:
            return state;

    }
}

export default reducer;