import { authCheck } from "../../Redux/isAuth/action"
import  { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const Login = () =>{
    const dispatch = useDispatch()
    const {auth} = useSelector((s)=>s.auth)
    const navigate = useNavigate()
    console.log(auth)

    function req(){
        const data = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        axios.post('https://reqres.in/api/login',data).then((res)=>{
            if(res.status === 200){
                dispatch(authCheck(true))
                navigate('/')
            }else{
                dispatch(authCheck(false))
            }
        })
    }

    function show(){
        if(!auth){
            return 'Login'
        }
        return 'LogOut'
    }

    return (<>
        
        <button onClick={()=>{
            req()
        }}>{show()}</button>
        
        </>)
}