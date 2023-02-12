import { Outlet } from 'react-router-dom'
import { Links } from '../components'
import React from 'react'

export const FirstLayout = () => {
  return (
    <>
    <div>{Links}</div>
  <div>{<Outlet/>}</div>
    </>
  )
}
