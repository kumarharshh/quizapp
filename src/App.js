import React from 'react'
import Quiz from './components/Quiz'
import Home from './components/Home';
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() 
{
  return (
    <div><BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/quiz" element={<Quiz/>} />
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App