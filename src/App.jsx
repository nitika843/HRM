// import React from 'react'
// import './App.css'
// import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Component/Registration'
import Sing from "./Component/Singin/Sing";
import Clander from './Component/Clander/Clander';



function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={< Sing/>} />
     <Route exact path="registration" element={< Registration/>} />
     <Route exact path="clander" element={<Clander/>} />
      </Routes>
     </BrowserRouter>
      {/* <Registration /> */}
    </>
  )
}

export default App
