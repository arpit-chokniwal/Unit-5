import {useEffect, useState} from 'react'
import axios from 'axios'
import { addTodo,delTodo } from '../../Redux/todoRedux/action'
import  { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
export const Todos = ()=>{
    useEffect(()=>{
        getalldata()
    },[])
    const navigate = useNavigate()
    const [text , setText] = useState('')
    const dispatch = useDispatch()
    const todo = useSelector((s)=>s.todo.todo)
    const {auth} = useSelector((s)=>s.auth)

    if(!auth){
        navigate('/login')
    }

    function getalldata(){
        axios.get('http://localhost:8080/todo').then((response)=>{
        
            dispatch(addTodo(response.data))
        })
    }

    function setit(text) {
        const data = { text : text}
        axios.post('http://localhost:8080/todo',data).then((response)=>{
           
            dispatch(addTodo([response.data]));
        })
    }

    function dele(i){
        axios.delete(`http://localhost:8080/todo/${i}`).then((response)=>dispatch(delTodo(i)));
    }

    return (<>
        
        <input placeholder="Todo's" type="text" onChange={(e)=>setText(e.target.value)} value={text}/>

        <button onClick={()=>{
            setit(text)
            setText('')
        }}>Submit</button>
        
        
        {
            todo.map((e)=>{
               if(e){ return <div key={e.id}>

                <h3>{e.id} {e.text}</h3>
                
                <button onClick={()=>{
                    dele(e.id)
                }}>Delete</button>
                
                </div>}
            })
        }


    </>)
}