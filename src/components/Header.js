import React from "react";

function Header() {
  const images = require.context("./../assets", true);

  return (
    <div>
      <div className="header_page">
        <div className="container">
          <div className="header_image">
            <img src={images("./logo.png")} alt="banner"></img>
          </div>
          <div className="big-box">
            <div className="box-wrapper1">
              <div className="header_text">
                <h1 className="h1">Upstate Cord Blood Bank</h1>
                <h5>The Region’s Only Public Cord Blood Donation Center!</h5>
              </div>
              <div className="baby-image">
                <video className="baby-image1" controls>
                  <source src="baby1.mp4" type="video/mp4" />
                  <source src="baby1.mp4" type="video/ogg" />
                </video>
              </div>
            </div>
            <div className="box-wrapper2">
              <form className="form">
                <h3>Get Started</h3>
                <input
                  type={"text"}
                  placeholder="Name"
                  className="input"
                ></input>
                <br />
                <input
                  type={"email"}
                  placeholder="Email"
                  className="input"
                ></input>
                <br />
                <input
                  type={"number"}
                  placeholder="Number"
                  className="input"
                ></input>
                <br />
                <input
                  type={"text"}
                  placeholder="Messages"
                  className="input-adrs"
                ></input>
                <br />
                <input
                  type={"submit"}
                  value="GET STARTED"
                  className="btn1"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logopage">
          <div className="logo logo1">
            <img src={images("./logo-1.png")} alt="banner" />
          </div>
          <div className="logo logo2">
            <img src={images("./logo-2.png")} alt="banner" />
          </div>
          <div className="logo logo3">
            <img src={images("./logo-3.png")} alt="banner" />
          </div>
          <div className="logo logo4">
            <img src={images("./logo-4.png")} alt="banner" />
          </div>
          <div className="logo logo5">
            <img src={images("./logo-5.png")} alt="banner" />
          </div>
        </div>
        <div className="cord-blood-bank-parent">
          <h2 className="cord-blood-bank">What Is Cord Blood Banking?</h2>
          <p className="cord-blood-bank">
            After a baby is born, the umbilical cord is cut and usually
            discarded as medical waste along with the placenta. Cord blood
            banking is a way to preserve your baby’s umbilical cord blood, which
            is collected by knowledgeable healthcare providers after delivery.
            The cord blood is then stored in the state-of-the-art, Upstate Cord
            Blood Bank in Syracuse. As a public bank, you have the option to
            donate to patients seeking cord blood for life-saving medical
            treatments.
          </p>
          <button className="btn2">MORE ABOUT CORD BLOOD BANKING</button>
        </div>
      </div>
      <div className="circle-parent">
        <div className="circle-child">
          <h5>
            Upstate Cord Blood Bank is the Region’s Only Public Cord Blood
            Donation Center!
          </h5>
        </div>
      </div>
      <div className="why-donate-parent">
        <div className="why-donate-child">
          <div className="donate-inner1">
            <img src={images("./img2.png")} alt="banner"></img>
          </div>
          <div className="donate-inner2">
            <h2>Why Donate Cord Blood?</h2>
            <p>
              According to the National Marrow Donor Program, approximately
              12,000 people are diagnosed with life-threatening diseases every
              year, and thousands of them will die waiting for treatment. A
              transplant from donated cord blood could be their best, and
              possibly their only, hope of a cure. It is a painless, risk-free
              procedure that takes about 10 minutes after you deliver and could
              provide a life-saving treatment for someone in need of a
              transplant.
            </p>
          </div>
          <div className="donate-inner3">
            <p>
              Interested in learning more about how you and your baby can save
              lives with cord blood? We would love to talk with you about how to
              make that possible. If you are an expectant mother looking to
              donate, please call the Upstate Cord Blood Bank at (315) 492-2600.
            </p>
          </div>
        </div>
        <button className="btn3">DONATION PROCESS</button>
      </div>
    </div>
  );
}

export default Header;
