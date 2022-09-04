import React from 'react'
import Header from '../Header'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import Sust1 from './sust1.jpeg'
import Sust2 from './sust2.png'
import Sust3 from './sust3.png'
import Sust4 from './sust4.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AboutUs() {
    return (
        <div>
            <Header />
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>About Us</h3>
                            <div className='underline mx-auto'></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                            <Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-c-light border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Vision, Mission and goals</h3>
                            <div className='underline mx-auto'></div>

                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className='col-md-4'>
                        <Card style={{ }}>
                            <Card.Img variant="top" height="300px" width="200px" src={Sust1}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4'>
                        <Card style={{ }}>
                            <Card.Img variant="top" height="300px" width="200px" src={Sust1}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                            </Card.Body>
                            </Card>
                        </div>
                        
                        <div className='col-md-4'>
                        <Card style={{ }}>
                            <Card.Img variant="top" height="300px" width="200px" src={Sust1}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                            </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
