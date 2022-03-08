import React  from "react";
import { useState } from "react";
import GrocryList from "./GroceryList"
import GroceryInput from "./GroceryInput";

function Grocery(){
  const [r,seta] = useState([])
  function neww(a){
    seta([...r,a])
  }
  function Fun(e,i){
    e.splice(i,1)
    seta([...e])
    
  }
  return (
  <>
  <GroceryInput val = {neww}/>
  <GrocryList  val = {r} valr = {Fun}/>
  </>
)
}
export default Grocery