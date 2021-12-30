import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
export default function Country(){
    const [countrys,setCountrys] = useState({});
    const {country} = useParams();
    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        try{
        let data = await axios.get(`http://localhost:3001/capitals/?country=${country}`)
        setCountrys(data.data[0])
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <h1 style={{fontWeight:200}}>Country Details</h1>
            <br />
            <br />
            <h3 style={{fontWeight:400}}>Country: {countrys.country} </h3>
            <h3 style={{fontWeight:400}}>Capital: {countrys.city}</h3>
        </div>
    )
}