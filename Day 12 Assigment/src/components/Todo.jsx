import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { addTodo,deleteTodo } from '../Redux/action'
import axios from 'axios';

export const Todo = () =>{


    useEffect(()=>{
        let a = axios.get('http://localhost:3001/Todo').then((res )=> {
            res.data.map((e)=>{
                dispatch(addTodo(e))
            })
        })
    },[])


    const [data, setData ] = useState('')
    const [status, setStatus ] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector((s)=>s.Todo)
    

    const  postData = () => {
        const todo_data = { data,status };
        axios.post('http://localhost:3001/Todo', todo_data).then(response =>dispatch(addTodo(response.data)))        
    }
    const deletet = (i) =>{
        axios.delete(`http://localhost:3001/Todo/${i}`).then(response =>dispatch(deleteTodo(i)))    
    }


    return(<>
        <h1>Todo</h1>
        
        <input placeholder="Todo's" type="text"  onChange={(e)=>{setData(e.target.value)}} value={data}/>
        <input placeholder="Stattus" type="text"  onChange={(e)=>{setStatus(e.target.value)}} value={status}/>
       
        <button onClick={()=>{           
            postData()
            setStatus('')
            setData('')
        }}>Submit</button>


        {
            todos.map((e,i)=>{
                console.log(e)
                return(<div key={i}>
                    <h4 ><Link to={`/todo/${i}`}>{i+1}</Link>. {e.data}</h4>
                    
                    <button onClick={()=>deletet(e.id)} >Delete</button>
                    </div>)
            })
        }
        
        </>)
}