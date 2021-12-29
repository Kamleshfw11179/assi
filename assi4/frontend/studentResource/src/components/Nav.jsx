import {Link} from "react-router-dom"
export default function Nav(){
    return(
        <div style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-evenly"}}>
        <h3>Logo</h3>
        <div style={{width:"60%" ,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
            <Link to="/">Home
            </Link>
            <Link to="/students">Students</Link>
            <Link to="/lectures">Lectures</Link>
            <Link to="/contests">Contests</Link>
        </div>
        </div>
    )
}