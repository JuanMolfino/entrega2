import './App.css'
import {Routes,Route} from "react-router-dom"
import Error from './components/Error'
import Layout from './components/Layout'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Detalle from './components/Detalle'
import Productos from './components/Productos'

function App() {
  

  return (
    <>
    
        <Routes >
          <Route path='/' element={<Layout/>}>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route index element={<Home/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path="/productos/:id" element={<Detalle />} />
            <Route path='/*' element={<Error/>}/>
          </Route>
          
        </Routes>
      
    </>
  )
}

export default App
