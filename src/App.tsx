import React from 'react'
import './App.css'
import Navbar from './components/bar/navbar'
import { Button } from './components/ui/button'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Button >View More</Button>
    </div>
  )
}
