import React from 'react'

function UserFB() {
  return (
    <div >
      <div id="gtco-subscribe" style={{height:"500px"}}>
  <div className="gtco-container" >
    <div className="row animate-box">
      <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
        <h2 className="cursive-font">Feedback</h2>
        <p>"We improve our services, based on your feedback, until they're the best."</p>
      </div>
    </div>
    <div className="row animate-box">
      <div className="col-md-8 col-md-offset-2">
        <form className="form-inline">
          <div className="col-md-6 col-sm-6">
            <div className="form-group" id='Animation1'>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="text" className='form-control' placeholder="Your Massage Here..." required />            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <button type="submit"  id='Animation3' className="btn btn-default btn-block">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default UserFB
