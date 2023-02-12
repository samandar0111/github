import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { thema } from './mui-cutomization/current'
import {BrowserRouter} from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<ThemeProvider theme={thema}>
  <CssBaseline/>
    <App />
</ThemeProvider>
</BrowserRouter>
)
