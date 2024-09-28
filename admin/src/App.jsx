import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Add from './pages/add/add'
import List from './pages/list/list'
import Order from './pages/orders/order'
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:5000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>

        </Routes>
      </div>
      
    </div>
  )
}

export default App
