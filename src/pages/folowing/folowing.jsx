import React from 'react'
import folowers from "../folowers/folowers.module.scss"
import { UseAxios } from '../../hooks/useAxios'
import { Avatar,Button } from '@mui/material'

export const Folowing = () => {
  const {data,loading,error} = UseAxios({method:"GET", url:"/following"})

  return (
    <div className={folowers.box}>
      {loading ? <div className={folowers.loading}>Loading...</div> : ""}
    {data? data.map(el=>{
      return   <div>
   
      <div className={folowers.card}>
      
        
        
        <div><Avatar sx={{width:52, height: 52}} src={el.avatar_url}/>
        <a href={el.html_url}>{el.login}  </a>
        </div>
         <Button style={{height: 30,fontSize : 10}} size='small' variant='contained'>unfollow</Button>

      </div>
      <hr className={folowers.xrr}/>
      </div>
    }): ""}
 
    </div>
  )
}
