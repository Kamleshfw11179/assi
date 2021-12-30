import { useState,useEffect } from "react"
import styles from "./input.module.css"
import axios from "axios"
import {Link} from "react-router-dom"
export default function Input(){
    const [query,setQuery] = useState("")
    const [data,setData] = useState([])
    useEffect(()=>{
        getDatad(100)
    },[query])

    async function getData(){
      try{
          if(query){
          let data = await axios.get("http://localhost:3001/countries")
          let data1 = data.data;
          data1.forEach(element => {
              if(element.id==query[0].toUpperCase()){
                  setData(element.countries)
              }
          })
        };
      }catch(err){
          console.log(err)
      }
    }

    async function getDatad(time){
        setTimeout(()=>{
            getData()
        },time)
    }

    return(
        <div style={{marginTop:"50px"}}>
        <h1 style={{fontWeight:"100"}}>Countries Searcher</h1>
            <input key="input" style={{height:"20px",width:"200px",border:"none",borderBottom:"1px solid black"}} type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
            <div className={styles.dBox}>
            {data?data.map((e)=><p className={styles.name} key={e.country}><Link className={styles.link} to={`/${e.country}`}>{e.country}</Link></p>):""}
            </div>
        </div>
    )
}