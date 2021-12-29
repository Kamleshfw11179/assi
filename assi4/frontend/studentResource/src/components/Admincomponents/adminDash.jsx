import {Routes,Route } from "react-router-dom"
import Nav from "./Nav";
import Home from "./Home"
import Lecture from "./Lecture"
import Student from "./Students"
import Contest from "./Contests";
export default function AdminD(){
    return(
        <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/lectures" element={<Lecture />}></Route>
            <Route path="/students" element={<Student />}></Route>
            <Route path="/contests" element={<Contest />}></Route>
        </Routes> 
        </>
    )
}