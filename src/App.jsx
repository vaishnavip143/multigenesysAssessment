import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AddEditPage from './pages/AddEditPage';

function App() {
  

  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEditPage />} />
        <Route path="/edit/:id" element={<AddEditPage />} />
      </Routes>
    </BrowserRouter>
      
  
  )
}

export default App
