import React from 'react'
import folowers from "./folowers.module.scss"
import { Avatar,Button } from '@mui/material'
import { UseAxios } from '../../hooks/useAxios'
import { useState } from 'react'
import { useEffect } from 'react'

export const Folovers = () => {
 const {data,loading,error} = UseAxios({method:"GET", url:"/followers"})

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
