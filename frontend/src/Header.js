import React from 'react'

import logo from './AFLLogoRed.png';

import {Link} from 'react-router-dom';



export default function Header() {

  return (

    <div>

        <header class="header-section">

            <div class="header-top">

                <div class="container">

                    <div class="ht-left">

                        <div class="mail-service">

                            <i class=" fa fa-envelope"></i>

                            therichposts@gmail.com

                        </div>

                        <div class="phone-service">

                            <i class=" fa fa-phone"></i>

                            +00 00.000.000

                        </div>

                    </div>

                    <div class="ht-right" style={{paddingTop:"15px"}}>

                        <Link style={{paddingTop:"15px", color:"#354F7E",fontWeight:"600"  }} to="/login">Login</Link><Link to="/register" style={{paddingTop:"15px", color:"#354F7E",fontWeight:"600" }}> | Register</Link>

                    </div>

                </div>

            </div>

            <div class="container">

                <div class="inner-header">

                    <div class="row">

                        <div class="col-lg-12 col-md-12" style={{textAlign:"left"}}>

                            <div class="logo">

                            



                                <a href="#">

                                

                                  <h1 style={{color:"#354F7E",fontWeight:"700"}}><img src={logo} style={{marginBottom: "30px", marginRight:"20px"}} width="100px"/><span >Aquatic Farms Limited</span></h1>

                                </a>

                            </div>

                        </div>

                      

                        <div style={{display:"none"}} class="col-lg-2 text-right col-md-2">

                            <ul class="nav-right">

                                <li class="heart-icon">

                                    <a href="#">

                                        <i class="icon_heart_alt"></i>

                                        <span>1</span>

                                    </a>

                                </li>

                                <li class="cart-icon">

                                    <a href="#">

                                        <i class="icon_bag_alt"></i>

                                        <span>3</span>

                                    </a>

                                    <div class="cart-hover">

                                        <div class="select-items">

                                            <table>

                                                <tbody>

                                                    <tr>

                                                        <td class="si-pic"><img src="assets/img/select-product-1.jpg" alt="" /></td>

                                                        <td class="si-text">

                                                            <div class="product-selected">

                                                                <p>$60.00 x 1</p>

                                                                <h6>Kabino Bedside Table</h6>

                                                            </div>

                                                        </td>

                                                        <td class="si-close">

                                                            <i class="ti-close"></i>

                                                        </td>

                                                    </tr>

                                                    <tr>

                                                        <td class="si-pic"><img src="assets/img/select-product-2.jpg" alt="" /></td>

                                                        <td class="si-text">

                                                            <div class="product-selected">

                                                                <p>$60.00 x 1</p>

                                                                <h6>Kabino Bedside Table</h6>

                                                            </div>

                                                        </td>

                                                        <td class="si-close">

                                                            <i class="ti-close"></i>

                                                        </td>

                                                    </tr>

                                                </tbody>

                                            </table>

                                        </div>

                                        <div class="select-total">

                                            <span>total:</span>

                                            <h5>$120.00</h5>

                                        </div>

                                        <div class="select-button">

                                            <a href="#" class="primary-btn view-card">VIEW CARD</a>

                                            <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>

                                        </div>

                                    </div>

                                </li>

                                <li class="cart-price">$150.00</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

            <div class="nav-item" style={{backgroundColor:"#354F7E"}} >

                <div class="container">

                    

                    <nav class="nav-menu mobile-menu">

                        <ul style={{backgroundColor:"#354F7E"}}>

                            <li class="active"><Link to="/">Home</Link></li>

                            <li ><Link to="/aboutUs">About Us</Link></li>

                            <li><Link to="/ourServices">Our Services</Link></li>

                            <li><a href="#">Our Team</a></li>

                            <li><a href="#">Contact Us</a></li>

                            <li><a href="#">Pages</a>

                                <ul class="dropdown">

                                    <li><a href="#">Blog Details</a></li>

                                    <li><a href="#">Shopping Cart</a></li>

                                    <li><a href="#">Checkout</a></li>

                                    <li><a href="#">Faq</a></li>

                                    <li><a href="#">Register</a></li>

                                    <li><a href="#">Login</a></li>

                                </ul>

                            </li>
                        </ul>

                    </nav>

                    <div id="mobile-menu-wrap"></div>

                </div>

            </div>

        </header>

    </div>

  )

}