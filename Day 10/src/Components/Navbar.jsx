import { Route, Routes } from "react-router-dom";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";
import {NotFoundPage} from './NotFoundPage'


const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
];
export const Navbar = () => {
  
  return (
    <>
    
        <Routes>
            
        <Route path= {`/products/:id`} element={<ProductsDetailsPage/>}/>        
        <Route path= {`/products`} element={<ProductsPage/>}/>        
        <Route path= {`/pnf`} element={<NotFoundPage/>}/>


        </Routes>
    


    </>
  );
};
