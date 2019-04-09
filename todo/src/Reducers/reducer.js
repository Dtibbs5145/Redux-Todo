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


switch (action.type) {
    case NEWTODO:
    return { ...state, count: state.count + 1 }
    case COMPLETED:
    return { ...state, count: state.count - 1}
    default:
        return state;

}
};