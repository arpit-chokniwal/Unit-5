import { Login } from "./LoginComp/Login"
import { Todos } from "./TodoComp/Todo"
import { useSelector } from 'react-redux'

export const MainFun= () =>{
    const {auth} = useSelector((s)=>s.auth)

    return(<>
        <Login/>
        <br/><br/>
        {
            auth?<Todos/>:<h2>Login First</h2>
        }
    </>)
}