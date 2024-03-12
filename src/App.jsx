import { useState, useEffect } from 'react'
import NavBar from "./components/Nav"
import GetShips from "./pages/index"
import './App.css'

function App() {

  return (
    <>
  <NavBar />
    <GetShips />
    </>
  )
}

export default App
