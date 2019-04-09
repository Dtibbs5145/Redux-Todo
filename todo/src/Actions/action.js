export const NEWTODO = 'NEWTODO';
export const COMPLETED = 'COMPLETED';

export function newTodo(newTodo) {
    return {
        type: 'NEWTODO',
        payload: newTodo
    }
}

export function completed(index) {
    return {
        type: 'COMPLETED',
        payload: index
    }
}