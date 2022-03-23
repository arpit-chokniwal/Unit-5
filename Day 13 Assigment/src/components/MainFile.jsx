import { Login } from "./LoginComp/Login"
import { Todos } from "./TodoComp/Todo"
import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router"

export const MainFun= () =>{
    const {auth} = useSelector((s)=>s.auth)

    return(<>
        <Routes>
        
        <Route path="/" element={<Todos/>} />
        <Route path="/login" element={<Login/>}/>

        </Routes>
    </>)
}