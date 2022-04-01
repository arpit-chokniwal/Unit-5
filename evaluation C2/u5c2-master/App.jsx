import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [t,  sett] = useState(false)
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>sett(!t)}>
        {/* Show text Add House or Show Rentals based on state */}
       {t?'Show Rentals':'Add House'}
              </button>
      {/* Show component based on state */}
        {t?<AddHouse/>:<Rentals/>}
      
    </div>
  );
}

export default App;
