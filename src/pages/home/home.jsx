import React, { useEffect } from 'react'

import home from "../home/home.module.scss"
import { Link } from 'react-router-dom'
import table from "../../img/table.png"
import{ Button }from '@mui/material'
import { UseAxios } from '../../hooks/useAxios'
export const Home = () => {
const {data:repos,loading:repos_loading,error:repos_error} = UseAxios({method:"GET",url:"/repos"})
let arr = []
if(repos){
  for(let i = 0;i < 6; i++){
      arr.push(repos[i])
  }
  
}
  return (<div className={home.bits}>
    <span className={home.title}>Popular repositories</span>
   <div className={home.list}
   >
     {repos? arr.map(el=>{
      return    <div key={el.id} className={home.element}>
       <div>
       <a className={home.name} href={el.html_url}>{el.name}</a>       
       <span className={home.coll}>{el.private ? "private" : "public"}</span>
       </div>
       <span className={el.language}></span>
       <span className={home.coll}>{el.language}</span>
      </div>
    
     }) : ""}
   
   
     
     
    </div>
    <img className={home.image} src={table} alt="" />
    <Button color='primary' variant='contained'>Show more activity</Button>
    <span className={home.text}>Seeing something unexpected? Take a look at the <a href="#">GitHub profile guide.</a></span>
   </div>
  )
}
