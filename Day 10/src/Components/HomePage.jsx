import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [d,setd] = useState([])
  useEffect(()=>{
    ac()
  },[])
  async function ac(){
    let res = await fetch('http://localhost:3001/product')
    let data = await res.json()
    console.log(data)
    setd(data)

  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {d.map((el) => {
        return<>
        <h4>ID: {el.id} </h4>
          <h4>Name: {el.name} </h4>
          <h4>Price: {el.price} </h4>
          </>
        })}
      </div>
    </>
  );
};
