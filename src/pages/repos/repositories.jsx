import React from 'react'
import { ButtonGroup,Stack,Button } from '@mui/material'
import repos from "./repos.module.scss"
import { UseAxios } from '../../hooks/useAxios';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Checkbox } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import { display } from '@mui/system';
export const Repositories = () => {

const {data,loading,error} = UseAxios({method:"GET",url:"/repos"})
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (  <div
 className={repos.box}
  >
    <Stack direction="row" gap="10px"  alignItems="center">
      <form className={repos.form}>
        <input type="text"  placeholder='Find repository...'/>
      </form>
      <Stack  gap="5px" direction="row" >
      <Button style={{height:30, fontSize:12}} variant='contained' color='secondary'>Type <ArrowDropDownIcon/></Button>
      <Button  style={{height:30, fontSize:12}} variant='contained' color='secondary'>Language<ArrowDropDownIcon/></Button>
      <Button  style={{height:30, fontSize:12}} variant='contained' color='secondary'>Sort<ArrowDropDownIcon/>  </Button>
      </Stack>
      
      <Button  style={{height:30, fontSize:12}} variant='contained' color='info'>New</Button>  
    
      
</Stack>
{loading? <div className={repos.loading}>loading...</div> : ""}
{error? <div className={repos.loading}>error...</div>:""}
{data? data.map((el)=>{

  return <div key={el.id}><hr className={repos.xrr} />
    <div className={repos.card}>
      <div className={repos.card1}>
        <div>
          <a href={el.html_url} className={repos.card_title}>{el.name}</a>
          <span className={repos.card_public}>{el.private? "private" : "public"}</span>
        </div>
        <Stack direction="row" style={{alignItems: "center", marginTop: 15}} >
          <span className={el.language}></span>
          <span className={repos.card2_java}>{el.language? el.language:"-----"}</span>
          <span className={repos.card2_java}>upload</span>
        </Stack>
      </div>

      <div className={repos.card2}>
        <div className={repos.btn}>

   <Stack direction="row" >
      <Checkbox style={{padding: 0}} {...label} icon={<Button style={{height:30, fontSize:12 ,margin: 0, borderTopRightRadius:0,borderBottomRightRadius:0}} variant='contained' color='secondary'><StarBorderIcon style={{width: 20, height: 20, marginRight: 10}} />star</Button>} checkedIcon={<Button  style={{height:30, fontSize:12,borderTopRightRadius:0,borderBottomRightRadius:0}} variant='contained' color='secondary'><StarIcon style={{width: 20, height: 20, marginRight: 10}}color='warning'/> starred</Button>} />
      
   
    <Button variant='contained'style={{height:30,borderTopLeftRadius:0,borderBottomLeftRadius:0}}>
 <Checkbox  color='secondary' style={{padding: 5}} icon={<ArrowDropDownIcon/>} checkedIcon={<ArrowDropUp color='inherit'/>}/></Button> 
 </Stack>
        </div>
        <span className={repos.hrr}></span>
      </div>
    </div>
    </div>
}): ""}
  



      </div>
  )
}
