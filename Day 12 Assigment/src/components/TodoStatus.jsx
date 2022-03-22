import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const TodoStatus =( ) =>{

    const {id} = useParams()

    const todos = useSelector((s)=>s.Todo) 
    // console.log(todos)
    let a = todos.filter((e,i)=>{
        if(id==i){
            return e
        }
    })
    console.log(a[0].status)
    return (<> 
        <h1>Your id is {+id + 1}</h1>
         <h2>Status {a[0].status}</h2> 
        </>)

}