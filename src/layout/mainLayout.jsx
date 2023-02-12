import React from 'react'
import { Header,Footer } from '../components'
import { Outlet } from 'react-router-dom'
import { Links } from '../components'
import { Stack } from '@mui/material'
import layout from "./layout.module.scss"
export const MainLayout = () => {
  return (<>
   <header>{<Header/>}</header>
   <main><Stack
direction="row"
  maxWidth="1200px"
  margin="auto"
  gap="100px"
    position="relative"
   >
    <div className={layout.links}>{<Links/>}</div>
    <div className={layout.outlet}>{<Outlet/>}</div>
    </Stack></main>
   <footer>{<Footer/>}</footer>
   </>
  )
}
