function GroceryList({val,valr}){
    return(
        <>
        {
            val.map((e,i)=>{
                return <>
                <h1>{e}</h1>
                <button onClick={()=>valr(val,i)}>Delete</button>
                </>
            })
        }
        </>
    )
}
export default GroceryList