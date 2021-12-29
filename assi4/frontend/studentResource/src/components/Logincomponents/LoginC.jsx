import Login from "./Login"
import Signup from "./Signup"
import {useState} from "react"
export default function LoginC(){
    const [login,setLogin] = useState(false)
    return(
        <>
        {login?<Login sl={setLogin}/>:<Signup sl={setLogin}/>}
        </>
    )
}