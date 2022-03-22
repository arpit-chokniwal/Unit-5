import './App.css'
import { Todo } from './components/Todo'
import {TodoStatus} from './components/TodoStatus'
import { Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <div className="App">
    
    <Routes>
    
    <Route path="/" element={<Todo/>}/>
    
    <Route path="/todo/:id" element={<TodoStatus/>}/>
    </Routes>
    
    </div>
  )
}

export default App
