export default function Login({sl}){
    return(
        <div style={{display:"flex" ,flexDirection:"column",width:"15%",margin:"auto"}}>
            <label>User Email</label>
            <input type="text" placeholder="Email"></input>
            <label>User Password</label>
            <input type="text" placeholder="Password"></input>
            <br/>
            <button>Login</button>
            <br/>
            <br/>
            <p onClick={()=>{sl(false)}}>Sign Up.</p>
        </div>
    )
}