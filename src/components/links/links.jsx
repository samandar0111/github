import React from 'react'
import { Avatar } from '@mui/material'
import { UseAxios } from '../../hooks/useAxios'
import { Link } from 'react-router-dom'
import{ Button } from '@mui/material'
import{ Stack }from '@mui/material'
import link from "../links/links.module.scss"





export const Links = () => {
const {data:folovers,loading:followers_loading,error:followers_error} = UseAxios({method:"GET",url:"/followers"})
const {data:folowing_data,loading:folowing_loading,error:folowing_error} = UseAxios({method:"GET",url:"/following"})


  return (
    <Stack 
    color="secondary"
    direction="column"
    spacing={1}
    >
      <Avatar  sx={{ width: 300, height: 300, zIndex: 3 }} src='https://avatars.githubusercontent.com/u/115681737?v=4'/>
      <span className={link.username}>Samandar0111</span>
      <Button sx={{width: 300}}  variant='contained'>Edit profile</Button>
      <div>
        <Stack
        
       direction="row"
       alignItems="flex-start"
      >
       <Link to="/folowers"><Button color='secondary'> {folovers? folovers.length: ""} followers</Button></Link>
      <Link to="/folowing"><Button color='secondary'> {folowing_data? folowing_data.length: ""}  following</Button></Link>
        </Stack>

      </div>
    </Stack>
  )
}
