// import React from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Registration from './Component/Registration'
// import ClientsCard from './Component/common/ClientsCard'
import Registration from './src/Component/Registration'
import ClientsCard from './src/Component/common/ClientsCard'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/a" element={<><ClientsCard /><ClientsCard /><ClientsCard /><ClientsCard /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
