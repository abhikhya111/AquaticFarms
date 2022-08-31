import React from 'react'
import logo from './AFLLogoRed.png';

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
                    <div class="ht-right">
                        
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-lg-12 col-md-12" style={{textAlign:"left"}}>
                            <div class="logo">
                            

                                <a href="#">
                                
                                  <h1 style={{color:"#9F3B47",fontWeight:"700"}}><img src={logo} style={{marginBottom: "30px", marginRight:"20px"}} width="100px"/><span >Aquatic Farms Limited</span></h1>
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
            <div class="nav-item">
                <div class="container">
                    
                    <nav class="nav-menu mobile-menu">
                        <ul style={{backgroundColor:"radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,  hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,}}"}}>
                            <li class="active"><a href="#">Home</a></li>
                            <li ><a href="#">Shop</a></li>
                            <li><a href="#">Collection</a>
                                <ul class="dropdown">
                                    <li><a href="#">Men's</a></li>
                                    <li><a href="#">Women's</a></li>
                                    <li><a href="#">Kid's</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
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
                            <li>
                            <a href="#" class="login-panel"><i class="fa fa-user" style={{marginRight:"10px"}}></i>Login</a>

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
