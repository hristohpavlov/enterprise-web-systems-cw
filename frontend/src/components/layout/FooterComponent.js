import './FooterComponent.scss'

export function  FooterComponent(){
    return(
    <footer className="cards-footer-bg-fix">
        <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          />
        </div>
      </div>
    </div>
        <div className="container-fluid padding-footer footer-bg-fix">
			      <div className="row text-center padding-footer">
				     <div className="col-md-4">
					     <a href="index.html"><img src="images/logo-white.png" width="170" height="58"></img></a>
						 <hr></hr>
						 <p>555-555-5555</p>
						 <p>email@myemail.com</p>
						 <p>100 Street Name</p>
						 <p>City,State,0000</p>
					 </div>
					 <div className="col-md-4">
					    <hr></hr>
						<h5>Our Hours</h5>
						<hr></hr>
						<p>Monday: 9am-5pm</p>
						<p>Saturday: 10am-4pm</p>
						<p>Sunday: Closed.</p>
					 </div>
					 <div className="col-md-4">
					    <hr className="light"></hr>
						<h5>Service Area</h5>
						<hr className="light"></hr>
						<p>City,State,0000</p>
						<p>City,State,0000</p>
						<p>City,State,0000</p>
						<p>City,State,0000</p>
					 </div>
					 <div className="col-12 footer-bg-fix" style={{marginBottom:'-31px'}} >
					  <hr className="light-100"></hr>
					  <h6 style={{padding:'0'}}>Made by Hristo Pavlov slipknot.com</h6>
					 </div>
				  </div>
				</div>
    </footer>
    )
}