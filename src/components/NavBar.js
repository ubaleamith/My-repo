import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) =>
{
  console.log("authenticated--",props.authenticated);
return(
<nav className="nav-wrapper blue darken-3">
<div className="Container">
<h4 className="brand-logo" style={{fontWeight:"bold",paddingRight:'50px'}}>Fork</h4>
<ul className="right">
{props.authenticated?(
  <div>
<li><Link to="/Home">Home</Link></li>
<li><Link to="/UploadVideo">Upload Video</Link></li>
<li><Link to="/VideoList">Video List</Link></li>
<li><Link to="/logout">logout</Link></li>
</div>
):
(
  <li><Link to="/"></Link></li>
)}
</ul>
</div>
</nav>
);

}
export default NavBar;
