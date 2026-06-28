import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Coat from './pages/Coat';
import Form from './pages/Form';
import Girl from './components/Girl';
import Women from './components/Women';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { useDispatch, useSelector } from 'react-redux';
import GetProducts from './pages/Getproduct';
// import {incrementdresszero,decrementanarkalithree,incrementcholifour}from "./redux/counterslice"

import Upload from './pages/Upload';
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import Formvalidate from './pages/Formvalidate';
import Singlepagecrud from './pages/Singlepagecrud';
function App() {

  // const date=useSelector((state)=>state.counter)
  // const dispatch=useDispatch()
  // const inc=()=>dispatch(incrementdresszero(5))

  return (
    <div>
      {/* <h6>dress - {date.dress0}</h6>
      <button onClick={inc}> increment </button> */}

      <BrowserRouter>
        <Navbar hi=" '' TIMELESS STYLE, ENDLESS ELEGANCE '' " />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <About />

            </ProtectedRoute>
          } />
          <Route path='/coat' element={<Coat />} />
          <Route path='/women' element={<Women />} />
          <Route path='/girl' element={<Girl />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/products' element={<GetProducts />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/formvalidate' element={<Formvalidate />} />
          <Route path='/singlepagecrud' element={<Singlepagecrud />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      {/* <About/> */}
      {/* <Coat/>    */}
      {/* <Women/>  */}
      {/* <Girl/> */}
      {/* <Home/>  */}
      {/* <Form/>   */}
      {/* <Contact/> */}
      {/* <Upload/> */}
      {/* <Edit/> */}
      {/* <Register/> */}

    </div>
  );
}
export default App;
