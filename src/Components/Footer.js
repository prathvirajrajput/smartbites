import React from 'react'

function Footer() {
  return (
    <div>
             <footer className="footerBG">
    <div className="container" style={{width:"100vw", paddingLeft:"5%",paddingTop:"4%"}}>
      <div className="row  mt-5 mb-n7">
        <div className="col-lg-4 col-sm-6 mb-7">
          <div className="footer-widget">
            <a className="footer-brand pt-3" href="index.html">
            <img src={process.env.PUBLIC_URL + '/images/smartbites.png'} alt="Example Image" style={{height:"100px",width:"100%"}} />             </a>
            
                <h5 style={{marginTop:"5%"}}>HEAD OFFICE</h5>
              
            <h6 style={{color:"#FBB448"}}>2nd floor ,388 opposite of eye retina Hospital, Scheme 54 PU4 </h6>
            <h6 style={{color:"#FBB448"}}>Indore , Madhya Pradesh </h6>
            
            <br></br>
            
           
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-7">
         
        </div>
      
        {/* <div className="col-lg-2 col-sm-6 mb-7">
          <div className="footer-widget">
            <h4 className="title">Information</h4>
            <ul className="footer-menu">
            <li className="footer-menu-items"> <Link to="/SingleProduct" className="footer-menu-link"onClick={ScrollToTop}>About us</Link></li>
            <li className="footer-menu-items"> <Link to="/Contact" className="footer-menu-link" onClick={ScrollToTop}>Contact us </Link></li>
              <li className="footer-menu-items"> <Link to="/Login" className="footer-menu-link " onClick={ScrollToTop}>Login</Link></li>
        
            </ul>
          </div>
        </div> */}
        <div className="col-lg-2 col-sm-6 mb-7">
          <div className="footer-widget">
            <h3 className="title" style={{paddingLeft:"25%"}}>Information</h3>
            <ul className="footer-des">
              <li className="footer-des-list"><i className="las la-envelope-open" /> <span style={{color:"#FBB448"}}> Indore , Madhya Pradesh 452010</span>
              </li>
              <li className="footer-des-list"><i className="las la-envelope-open" /> <a href="info@logicalsofttech.com">info@logicalsofttech.com</a>
              </li>
              <li className="footer-des-list"><i className="las la-envelope-open" /> <a href="anjusinghdx51@gmail.com">anjusinghdx51@gmail.com</a>
              </li>
              <li className="footer-des-list"><i className="las la-phone-volume" /> <a href="tel:+11238889999">+91-8269829729</a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
    {/* <div className="copy-right bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>© <span id="currentYear" /> Made With <i className="las la-heart" /> By <a href="https://logicalsofttech.com/">logicalsofttech</a> All Rights
              Reserved </p>
          </div>
        </div>
      </div>
    </div> */}
  </footer>
    </div>
  )
}

export default Footer
