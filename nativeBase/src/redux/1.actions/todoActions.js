export const onChangeTodo = (text) => {
    return {
        type : 'TODO_INPUT',
        payload : text
    }
}

export const onAddTodo = () => {
    return {
        type : 'ADD_TODO'
    }
}