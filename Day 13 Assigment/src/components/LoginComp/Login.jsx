import { authCheck } from "../../Redux/isAuth/action"
import  { useDispatch, useSelector } from 'react-redux'
import axios from "axios"


export const Login = () =>{
    const dispatch = useDispatch()
    const {auth} = useSelector((s)=>s.auth)
    console.log(auth)

    function req(){
        const data = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        axios.post('https://reqres.in/api/login',data).then((res)=>{
            console.log(res)
            if(res.status === 200){
                dispatch(authCheck(true))
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