import "./App.css"
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Lecture from "./components/Lecture"
import Nav from "./components/Nav"
import Student from "./components/Students"
import Contest from "./components/Contests"
export default function App(){
  return(
    <>
    <div className="App">
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/lectures" element={<Lecture/>}></Route>
    <Route path="/students" element={<Student/>}></Route>
    <Route path="/contest" element={<Contest/>}></Route>
    </Routes>
      </div>
    </>
  )
}