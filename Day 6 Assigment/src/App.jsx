import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
 
  return (
    <div className="App">
    <Timer st={5} et={10} speed={1.5} />
    </div>
  )
}

export default App
