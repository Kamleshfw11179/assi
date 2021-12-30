import "./App.css"
import Input from "./components/input"
import Country from "./components/country"
import {Routes,Route} from "react-router-dom"
export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />}></Route>
        <Route path="/:country" element={<Country />}></Route>
      </Routes>
      </div>
  )
}