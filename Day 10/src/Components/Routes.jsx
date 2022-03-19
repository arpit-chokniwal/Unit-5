import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Routes = () => {
  const navigate = useNavigate()
  return (
    <>
    <button onClick={()=>navigate('/')}>Go to Home Page</button>
    <button onClick={()=>navigate('/products')}> Go to product Page</button>
    <Navbar/>
    
    </>
  );
};
