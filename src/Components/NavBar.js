import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


function NavBar() {
  const ref = useRef(null);

  return (
    <div>

   <nav className="gtco-nav" role="navigation">
  <div className="gtco-container">
    <div className="row">
      <div className="col-sm-4 col-sm">
        <div id="gtco-logo"><Link to="/Home"  onClick={() => ref.current.complete()}>Smartbite</Link></div>
      </div>
      <div className="col-xs-8 text-right menu-1" style={{paddingRight:"3%"}}>
        <ul>
          <li><Link to="/Add"  onClick={() => ref.current.complete()}>Add Restaurants</Link></li>
          <li><Link to="/List"  onClick={() => ref.current.complete()}>Restaurants List</Link></li>
      
          {/* <li><a href="contact.html">Remove Restaurants</a></li> */}

        </ul>	
      </div>
    </div>
  </div>
</nav>

	
<LoadingBar color='	#FBB448' ref={ref} />



    </div>
  )
}

export default NavBar
