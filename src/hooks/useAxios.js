import { request } from "../request/request";
import { useState } from "react";
import { useEffect } from "react";
export const UseAxios = ({ method = null, body = null, url = null }) => {
  const [data, Setdata] = useState()
  const [loading, Setloading] = useState(true)
  const [error, Seterror] = useState()

  const Fetchdata = () => {
    request({ method, body, url }).then(response => {
      Setdata(response.data)
      Setloading(false)
    }).catch(error => Seterror(error))
  }
useEffect(()=>{
if(url && method){
  Fetchdata()
}
},[method,url,body])
return {data,loading,error}
}
// const {data,loading,error} = UseAxios({method:"GET",url:"/users"})