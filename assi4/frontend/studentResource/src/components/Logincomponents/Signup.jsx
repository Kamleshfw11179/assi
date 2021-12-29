export default function Signup({sl}){
    return(
        <div style={{display:"flex" ,flexDirection:"column",width:"15%",margin:"auto"}}>
            <label>User Name</label>
            <input type="text" placeholder="Name"></input>
            <label>User Email</label>
            <input type="text" placeholder="Email"></input>
            <label>User Password</label>
            <input type="text" placeholder="Password"></input>
            <br/>
            <button>Signup</button>
            <br/>
            <br/>
            <p onClick={()=>{sl(true)}}>Already have a account.</p>
        </div>
    )
}