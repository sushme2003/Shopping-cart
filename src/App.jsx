import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/home'
import Cart from './components/cart'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 const[cases,setcases]=useState([]);
  return (
    <div>
      <BrowserRouter>
      <Header cases={cases}/>
      <Routes>
        <Route  path="/" element={<Home cases={cases} setcases={setcases}/>}/>
        <Route  path="/cart" element={<Cart cases={cases} setcases={setcases}/>}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
