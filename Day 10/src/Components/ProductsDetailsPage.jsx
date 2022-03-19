import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export const ProductsDetailsPage = () => {
const {id} = useParams()
  console.log(id)
  const [product,setp] = useState({})
  const navigate = useNavigate()
  let a = null
  useEffect(()=>{
    all()
  },[])
  
  async function all(){
    
    let res = await fetch('http://localhost:3001/product')
    let data = await res.json()
    a = data.length

    if(+id>=0 && +id<=a){
      let ac= await fetch(`http://localhost:3001/product/${id}`)
      let abc = await ac.json()
      setp(abc)
    }else{
      navigate('/pnf')
    }
    
    
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={""} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">Product: {product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
      </div>
    </>
  );
};
