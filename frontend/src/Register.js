import React, { useState } from 'react'

import {

  MDBBtn,

  MDBContainer,

  MDBRow,

  MDBCol,

  MDBCard,

  MDBCardBody,

  MDBInput,

  MDBCheckbox,

  MDBIcon

}

  from 'mdb-react-ui-kit';

import './Register.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import axios from 'axios';

import OTPInput, { ResendOTP } from "otp-input-react";




export default function Register() {

  
  const [myEmail, setEmail] = useState('');
  const [verifyMyEmail, setVerifyEmail] = useState(true);
  const [otpMessage, setOtpMessage] = useState(false)

  const [OTP, setOTP] = useState("");

  function handleInputChange(event) {

    setEmail(event.target.value);

  }



  function verifyEmail() {

    try {

      axios.post('http://localhost:5000/sendEmail', {
        myEmail: myEmail
      })

      console.log('Email Sent');
      setVerifyEmail(false);
      setOtpMessage(true);



    }

    catch (error) {

      console.log(error);

    }

  }

  return (

    <div>

      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>



        <MDBRow>



          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>



            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>

              The best offer <br />

              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>

            </h1>



            <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>

              Lorem ipsum dolor sit amet consectetur adipisicing elit.

              Eveniet, itaque accusantium odio, soluta, corrupti aliquam

              quibusdam tempora at cupiditate quis eum maiores libero

              veritatis? Dicta facilis sint aliquid ipsum atque?

            </p>



          </MDBCol>



          <MDBCol md='6' className='position-relative'>



            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>

            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>



            <MDBCard className='my-5 bg-glass'>

              <h3 style={{ textAlign: "center", paddingTop: "25px", fontWeight: "600", color: "#243656" }}>Sign Up</h3>



              <MDBCardBody className='p-5'>



                <MDBRow>

                  <MDBCol col='6'>

                    <MDBInput wrapperClass='mb-4' placeholder='Enter First Name' id='form1' type='text' />

                  </MDBCol>



                  <MDBCol col='6'>

                    <MDBInput wrapperClass='mb-4' placeholder='Enter Last name' id='form2' type='text' />

                  </MDBCol>

                </MDBRow>



                <MDBInput wrapperClass='mb-4' placeholder='Enter Email Address' id='form3' type='email' value={myEmail} onChange={handleInputChange} />

                {verifyMyEmail ? <Button variant="primary" onClick={verifyEmail}>Verify Email</Button> : null}
                {otpMessage ?
                  <div >
                    <span style={{ color: "red" }}>OTP sent to your Email Address</span>
                    <MDBInput wrapperClass='mb-4' placeholder='Enter OTP' id='form3' type='text' />
                    <OTPInput secure value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}/>
                    <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                  </div> : null}


                <MDBInput wrapperClass='mb-4 mt-4' placeholder='Enter Phone Number' id='form4' type='text' />



                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form4' type='password' />



                {/* <div className='d-flex justify-content-center mb-4'>

          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />

        </div> */}



                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>



                <div className="text-center">



                  <p className="mb-0">Already have an account?<Link to="/login" style={{ paddingLeft: "10px", fontWeight: "700", color: "#243656" }}>Login</Link></p>







                </div>



              </MDBCardBody>

            </MDBCard>



          </MDBCol>



        </MDBRow>



      </MDBContainer>



    </div>

  )

}



