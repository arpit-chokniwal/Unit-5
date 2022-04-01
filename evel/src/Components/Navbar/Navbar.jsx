import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button className="/" onClick={()=>{
          <Link to={'/'}/>
        }}>Home</button>
        <button className="history" onClick={()=>{
          <Link to={'/history'}/>
        }}>history</button>
        <button className="mystery" onClick={()=>{
          <Link to={'/mystery'}/>
        }}>mystery</button>
        <button className="mythology" onClick={()=>{
          <Link to={'/mythology'}/>
        }}>mythology</button>
        <button className="technology" onClick={()=>{
          <Link to={'/technology'}/>
        }}>technology</button>
        

      </div>
    </>
  );
};
