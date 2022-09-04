import React from 'react';

import {

  MDBBtn,

  MDBContainer,

  MDBRow,

  MDBCol,

  MDBInput

}

  from 'mdb-react-ui-kit';

import './Login.css';

import logo from './AFLLogoRed.png'

import { Link } from 'react-router-dom';



export default function Login() {



  return (

    <MDBContainer className="my-5 gradient-form">



      <MDBRow>



        <MDBCol col='6' className="mb-5">

          <div className="d-flex flex-column ms-5">



            <div className="text-center">

              <img src={logo}

                style={{ width: '160px', marginRight: "25px" }} alt="logo" />

              <h4 className="mt-1 mb-5 pb-1">Aquatic Farms</h4>

            </div>



            <h3 style={{ textAlign: "center", paddingBottom: "25px", fontWeight: "600", color: "#243656" }}>Please login to your account</h3>





            <MDBInput wrapperClass='mb-4' placeholder="Enter Email Address" id='email' type='email' />

            <MDBInput wrapperClass='mb-4' placeholder="Enter Password" id='form2' type='password' />





            <div className="text-center pt-1 mb-5 pb-1">

              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>

              <a className="text-muted" href="#!">Forgot password?</a>

            </div>



            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">

              <p className="mb-0">Don't have an account?<Link to="/register" style={{ paddingLeft: "10px", fontWeight: "700", color: "#243656" }}>Signup</Link></p>

              {/* <MDBBtn outline className='mx-2' color='danger'>

                Danger

              </MDBBtn> */}

            </div>



          </div>



        </MDBCol>



        <MDBCol col='6' className="mb-5">

          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">



            <div className="text-white px-3 py-4 p-md-5 mx-md-4">

              <h4 class="mb-4">We are more than just a company</h4>

              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud

                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

              </p>

            </div>



          </div>



        </MDBCol>



      </MDBRow>



    </MDBContainer>

  );

}
