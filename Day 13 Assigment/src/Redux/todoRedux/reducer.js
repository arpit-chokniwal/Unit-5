import { ADD_TODO , DELETE_TODO } from "./action";

const initialState ={
    todo:[]
}

export const todoReducer = (store = initialState  , {type, payload}) =>{
       
    switch(type){
        case ADD_TODO:
        return {...store , todo:[...store.todo , ...payload] }

        case DELETE_TODO:
        return {...store , todo: store.todo.filter((e)=>e.id != payload) }

        default : return store
    }
}