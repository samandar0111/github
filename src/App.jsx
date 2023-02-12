
import './App.css'
import { Route,Routes} from "react-router-dom"
import { MainLayout,FirstLayout } from './layout'
import { Home,Repositories,Folovers,Folowing } from './pages'

function App() {


  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
       <Route index element={<Home/>}/> 
       <Route path='repostories' element={<Repositories/>}/>
        <Route path='folowers' element={<Folovers/>}/>
        <Route path='folowing' element={<Folowing/>}/>
        
      </Route>
      <Route path='*' element="page not found"/>
    </Routes>
  )
}

export default App
