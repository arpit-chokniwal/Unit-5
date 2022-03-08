import React from "react";


function GroceryInput({val}){
return(
    <>
    <input type="text" placeholder="INPUT" id="input"/>
    <button id="btn"  onClick={()=>val(document.getElementById("input").value)}>Submit</button>
    </>
)
}
export default GroceryInput