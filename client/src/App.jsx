import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Service from './pages/Service'
import Map from './pages/Map'
import About_Us from './pages/About_Us'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-Us" element={<About_Us />} />
      <Route path="/Sign-In" element={<SignIn />} />
      <Route path="/Sign-Up" element={<SignUp />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}
