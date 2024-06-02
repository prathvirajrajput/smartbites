import React from 'react';

function ProCounter() {
  

  return (
    
      <div style={{paddingBottom:"30%"}}>
	<div id="gtco-counter" className="gtco-section">
  <div className="gtco-container" id='CAnimation'>
    <div className="row">
      <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
        <h2 className="cursive-font primary-color">About Us</h2>
        <p>The fabric of Smartbite was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you a sandwich experience you can feel good about.  </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
        <div className="feature-center" id='Animation1'>
          <span className="counter js-counter" >8.5</span>
          <span className="counter-label">Avg. Rating</span>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
        <div className="feature-center"id='Animation2'>
          <span className="counter js-counter" >100+</span>
          <span className="counter-label">Food Types</span>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
        <div className="feature-center"id='Animation3'>
          <span className="counter js-counter">200+</span>
          <span className="counter-label">Restaurants</span>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
        <div className="feature-center" id='Animation4'>
          <span className="counter js-counter">1999</span>
          <span className="counter-label">Year Started</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    
  )
}

export default ProCounter
