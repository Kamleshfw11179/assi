import "./App.css"
import AdminD from "./components/Admincomponents/adminDash"
import StudentD from "./components/Studentcomponents/Scomponent"
import LoginC from "./components/Logincomponents/LoginC"
export default function App(){
  return(
    <>
    <div className="App">
    <AdminD />
    <StudentD />
    <LoginC />
      </div>
    </>
  )
}