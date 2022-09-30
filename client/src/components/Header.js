import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import {useNavigate, Link} from 'react-router-dom'
import bloodbank from '../bloodbank.json'
import *as infoService from '../services/info'

function Header() {
  const images = require.context("./../assets", true);

  const [details, setDetails] = useState({
    Name : "",
    Email : "",
    Number : "",
    Message : ""
  })

  const [error, setError] = useState({
    Name : "",
    Email : "",
    Number : "",
    Message : ""
  })

  const [total, setTotal]= useState(0)

  const navigate = useNavigate();

  const navigateToView= async ()=>{
    if(!(details.Name==="") && !(details.Email==="") && !(details.Number==="") && !(details.Message==="")){
      // infoService.saveCustomerData(details)

    var response= await infoService.getTotal(
       {mark1: 70,
      mark2 : 80}
      )
      console.log(response);
      setTotal(response.data.output)
     // navigate('/view', {state : details});
    }
    else{
    var newError = {...error};
    newError.Name= "Invalid Name";
    newError.Email= "Invalid email"
    newError.Number= "Invalid number"
    newError.Message= "Invalid message"
    setError(newError);
    }
  }

    // if(details.Name==="")
    // {
    // }
    // else if(details.Email===""){
    //   setError(newError)
    // }
    // else if(details.Number===""){
    //   setError(newError)
    // }
    // else if(details.Message===""){
    //   setError(newError)
    // }
    // else{
    //         navigate('/view', {state : details});
    // }
  

//&& !(details.Email ==="") && !(details.Number === "") && !(details.Message === "")
  const enterData=(e)=>{
     var boxName = e.target.name;
     var boxValue = e.target.value;
     var newError = {...error};
     var prevDetails= {...details};
    //  prevDetails[boxName] = boxValue;
    //  setDetails(prevDetails);

     if(boxValue===""){
      newError[boxName] ="Please enter the "+ boxName
      setError(newError)
     }else{
      newError[boxName] =""
      setError(newError)
      prevDetails[boxName] = boxValue;
      setDetails(prevDetails);
     }
  }



  return (
    <div>
      <div className="header_page">
        <Navbar/>
        <div className="container">
          <div className="row sec-row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="sec-1-col1">
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

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 sec-1-col2">
              <div className="sec-1-form">
               
                <h3 className="sec-1-col-h3">Get Started</h3>
                <input
                  type={"text"}
                  placeholder="Name"
                  className="input"
                  name="Name"
                  onChange={enterData}
                ></input>
                {error.Name!==""? <p>{error.Name}</p>:""}
                <br />
                <input
                  type={"email"}
                  placeholder="Email"
                  className="input"
                  name="Email"
                  onChange={enterData}
                ></input>
                {error.Email!==""? <p>{error.Email}</p>:""}
                <br />
                <input
                  type={"number"}
                  placeholder="Number"
                  className="input"
                  name="Number"
                  onChange={enterData}
                ></input>
                {error.Number!==""? <p>{error.Number}</p>:""}
                <br />
                <input
                  type={"text"}
                  placeholder="Messages"
                  className="input-adrs"
                  name="Message"
                  onChange={enterData}
                ></input>
                {error.Message!==""? <p>{error.Message}</p>:""}
                <br />
                <input
                  type={"submit"}
                  value="GET STARTED"
                  className="btn1"
                  onClick={navigateToView}
                ></input>
              {total}

              </div>
              </div>

        </div>
        </div>

        {/* <div className="container">
          <div className="big-box row sec-row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="baby-image">
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            </div>
          </div>
        </div> */}
      </div>
      <div className="container">
        <div className="logopage sec-row">
          <div className="logo1">
            <img className="logo" src={images("./logo-1.png")} alt="banner" />
          </div>
          <div className="logo2">
            <img className="logo" src={images("./logo-2.png")} alt="banner" />
          </div>
          <div className="logo3">
            <img className="logo" src={images("./logo-3.png")} alt="banner" />
          </div>
          <div className="logo4">
            <img className="logo" src={images("./logo-4.png")} alt="banner" />
          </div>
          <div className="logo5">
            <img className="logo" src={images("./logo-5.png")} alt="banner" />
          </div>
        </div>
        <div className="row sec-row">
        <div className="col-lg-12 col-md-12 col-sm-12 cord-blood-bank-parent">
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
        </div>
        </div>
        <div className="row section-7">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <button className="sec-7-btn">MORE ABOUT CORD BLOOD BANKING</button>
          </div>
        </div>

      </div>
      <div className="container">
      <div className="row circle-parent sec-row">
        <div className="col-lg-4 col-md-12 col-md-12 circle-child">
          <h5>
            Upstate Cord Blood Bank is the Region’s Only Public Cord Blood
            Donation Center!
          </h5>
        </div>
      </div>

      </div>
      <div className="section-4">
      <div className="container">
        <div className="row sec-row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="sec-4-col1">
              <img className="sec-4-img" src={images("./img2.png")} alt="banner"></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="sec-4-col2">
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
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="sec-4-col3">
            <p>
              Interested in learning more about how you and your baby can save
              lives with cord blood? We would love to talk with you about how to
              make that possible. If you are an expectant mother looking to
              donate, please call the Upstate Cord Blood Bank at (315) 492-2600.
            </p>

            </div>
          </div>
        </div>
        <div className="row section-7">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <button className="sec-7-btn">DONATION PROCESS</button>
          </div>
        </div>

      </div>
      </div>
      <div className=" section-5">
        <h2> Cord Blood Bank</h2>
        <p>
          Curabitur turpis ut varius tincidunt libero donec mi odio faucibus at
          scelerisque quis convallis in nisi in ac felis quis
        </p>
      </div>
      <div className="section-6">
      <div className="container">
        <div className="row sec-row">
          {bloodbank.map(blooditem=>
                      <div className="col-lg-4 col-md-12 col-sm-12 sec-6-col">
                      <Link to={"/bloodbank/" +blooditem.id}>
                        <img src={images(blooditem.img)} alt="banner"></img></Link>
                        <h6>{blooditem.title}</h6>
                        <p>{blooditem.content}</p>
                    </div>
          )}

          {/* <div className="col-lg-4 col-md-12 col-sm-12 sec-6-col">
            {bloodbank.map((blooditem)=>
                        <Link to={"/bloodbank/"+ blooditem.id}>
                        <img src={images(blooditem.img)} alt="banner"></img>
                        </Link>
            
            )}
            <h6>What are Stem Cells?</h6>
            <p>
              When your baby is born, the cutting of his or her umbilical cord
              signifies the beginning of a new life. Typically, your umbilical
              cord and placenta are discarded as medical waste
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sec-6-col">

            <Link to="/bloodbank/2">
            <img src={images("./img-4.png")} alt="banner"></img>
            </Link>
X            <h6> Dontating Parents</h6>
            <p>
              Mothers and families share inspiring stories and insights about
              their donation journey. Nolana and Jabare McKinstry talk about
              their decision to donate cord blood to the…
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sec-6-col">
            <Link to="/bloodbank/3">
            <img src={images("./img-5.png")} alt="banner"></img>
            </Link>
            <h6>Resources For Parents</h6>
            <p>
              A wealth of information about cord blood collection and usage in
              transplants can be found on various websites. However, to ensure
              you are provided the most…
            </p>
          </div> */}
        </div>
        <div className="row section-7">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <button className="sec-7-btn">LEARN MORE ABOUT</button>
          </div>
        </div>
      </div>


      </div>
      <div className="section-8">
        <div className="container">
        <div className="row sec-row">
          <div className="col-lg-4 col-md-12 col-sm-12 sec-8-col">
            <h2>About Upstate Cord Blood Bank</h2>
            <p>A 501(c)(3) Not-for-Profit Public Donation Center</p>
            <p>
              Upstate Cord Blood Bank is the only public cord bank in upstate.
              New York State. We are also among the 25 cord banks in the U.S
              that accept cord blood donations. You can find our
              state-of-the-art facility located on the same campus as Upstate
              Community Hospital
            </p>
            <button className="sec-8-btn1">(315) 492-2600, (855) 492-2600</button>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sec-8-col">
            <div className="sec-8-image">
              <img className="sec-8-img" src={images("./img-6.png")} alt="banner"></img>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sec-8-col ">
            <p>
              We conduct various testing and determine if the donated cord blood
              unit is appropriate for processing, cryopreservation, storage, and
              distribution. We also send cord blood units to medical researchers
              with the consent of the donor to be used in clinical trials.
              Future expansion will include collections from other CNY hospitals
              and an option for Family Banking.
            </p>
            <button className="sec-8-btn2">MORE ABOUT US</button>
          </div>
        </div>


        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Header;
