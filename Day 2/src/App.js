import logo from './logo.svg';
import './App.css';

function App() {  
  const os = [
    "Android","Blackcerry","iPhone","Windows Phone"
  ]
  const man = ["Samaung","HTC","Microsoft","Apple"]
  return (
    <div>
    <div>
    <h1>Mobile Operating System</h1>
    <Itrate a={os}/>    
    </div>
    <div>
    <h1>Mobile Manufacturers</h1>
    <Itrate a={man}/>
    </div>
    </div>
    
  );
}
function Itrate({a}){
  return (
    <ul>
    {a.map((e)=>{
      return ( <li>{e}</li> )
    })}
    </ul>
  )
}

export default App;
