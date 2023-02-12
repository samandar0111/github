import React, { useEffect, useState } from 'react'
import Logo from "../../img/githubLogo.png"
import { Avatar,Container, Stack} from '@mui/material'
import header from "./header.module.scss"
import qongiroq from "../../img/natification.png"
import plus from "../../img/plus.png"
import avv from "../../img/avv.png"
import { Link } from "react-router-dom"

export const Header = () => {
const [fixed,setfixed] = useState(false)
useEffect(()=>{
  window.addEventListener("scroll",()=>{
  if(scrollY > 70){
    setfixed(true)
  }else{
    setfixed(false)
  }
  })
})
  return (
  <div >
    <div className={fixed? header.fixx : header.back}>
  
      <div className={header.box}>
      <Avatar alt='logo' src={Logo}/>
      <form>
      <input className={header.input} type="text" placeholder='Search or jump to...' />
      </form>
      <nav>
        <ul className={header.navbar}>
          <li>Pull request</li>
          <li>Issues</li>
          <li>Codespaces</li>
          <li>Marketplase</li>
          <li>Explore</li>
        </ul>
      </nav>
      </div>
      <div className={header.box2}>
       
    
      <button className={header.qongiroq}><Avatar  sx={{ width: 24, height: 24 }} src={qongiroq}/></button>
      <button  className={header.qongiroq}><Avatar src={plus}/></button>
      <button  className={header.avv}><Avatar src='https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg'/><img src={avv} alt="" /></button> 
       </div>
    </div>
    <div className={fixed ? header.fixed:""}>
    <div className={header.bottom}>
    <ul className={header.links}>
      <li ><Link to="/" className={header.link}>Overview</Link></li>
      <li ><Link to="/repostories" className={header.link}>Repositories</Link></li>
      <li ><Link className={header.link}>Projects</Link></li>
      <li ><Link className={header.link}>Packages</Link></li>
      <li ><Link className={header.link}>Stars</Link></li>
    </ul>
     
    </div>
</div>
    </div>
  )
}
