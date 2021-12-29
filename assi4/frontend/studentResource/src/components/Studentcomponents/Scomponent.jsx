import SNav from "./Snav"
import Shome from "./Sdash"
import Studentdsa from "./Sddsa"
import Studentlecture from "./Slecture"
import {Routes,Route} from "react-router-dom"
export default function StudentD(){
    return(
        <>
            <SNav />
            <Routes>
                <Route path="/" element={<Shome />}></Route>
                <Route path="/lectures" element={<Studentdsa />}></Route>
                <Route path="/contests" element={<Studentlecture />}></Route>
            </Routes>
        </>
    )
}