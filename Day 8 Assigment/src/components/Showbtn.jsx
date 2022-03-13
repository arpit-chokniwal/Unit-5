import React from "react";
import { Button } from "./Button";

function ShowBtn(){

    return (<>
        
        <Button backcolor={'#2590FF'} border={'0px'} color={'white'}>Primary Button</Button>
                
        <Button backcolor={'transparent'} border={'1px solid gray'} color={'black'}>Default Button</Button>

        <Button backcolor={'transparent'} border={'1px dashed gray'} color={'black'}>Dashed Button</Button>

        <Button backcolor={'transparent'} border={'0px solid gray'} color={'black'}>Text Button</Button>

        <Button backcolor={'transparent'} border={'0px solid gray'} color={'#2590FF'}>Link Button</Button>


        </>)
}
export default ShowBtn