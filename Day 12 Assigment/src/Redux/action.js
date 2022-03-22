export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"



export const addTodo = (paylode) => ({type: ADD_TODO , paylode})
export const deleteTodo = (paylode) => ({type: DELETE_TODO, paylode})