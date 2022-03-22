import { ADD_TODO, DELETE_TODO } from "./action";

export const reducer = ( store , {type, paylode} ) =>{
// console.log(store,paylode);
    switch( type){
        case ADD_TODO: return { ...store , Todo: [ ...store.Todo , paylode]  }

        case DELETE_TODO: return {...store, Todo:  store.Todo.filter((e)=>{ return e.id != paylode }) }

        default: return store

    }
}