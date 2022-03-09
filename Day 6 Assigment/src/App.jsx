import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
 const [s,sets] = useState(0)
 const [e,sete] = useState(0)
 const [spe,setspe] = useState(1)
 const [display,setdisplay] = useState(false)
  return (
    <div className="App">
    <input type="number" placeholder='Start' onChange={(e)=>{sets(+e.target.value)}}/>
    <input type='number' placeholder='End' onChange={(e)=>{sete(+e.target.value)}}/>
    <input type='number' placeholder= 'Speed' onChange={(e)=>{setspe(+e.target.value)}}/>
    <button onClick={()=>{
     setdisplay(
      !display
     )
    }}>Submit</button>
    {display?<Timer st={s} et={e} speed={spe} />:null}
    
    </div>
  )
}

export default App
