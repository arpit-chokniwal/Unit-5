import React from "react";
import { Button } from "./Button";

function ShowBtn(){

    return (<>
        
        <Button backcolor={'#2590FF'} border={'0px'} color={'white'}   onClick={()=>{
            console.log(1234);
        }}  >Primary Button</Button>

                
        <Button backcolor={'transparent'} border={'1px solid gray'} color={'black'}   onClick={()=>{
            console.log(1234);
        }}  >Default Button</Button>


        <Button backcolor={'transparent'} border={'0.1px solid gray'} color={'black'}   onClick={()=>{
            console.log(1234);
        }}  >Dashed Button</Button>



        <Button backcolor={'transparent'} border={'0px solid gray'} color={'black'}   onClick={()=>{
            console.log(1234);
        }}  >Text Button</Button>


        

        <Button backcolor={'transparent'} border={'0px solid gray'} color={'#2590FF'}   onClick={()=>{
            console.log(1234);
        }}  >Link Button</Button>


        </>)
}
export default ShowBtn