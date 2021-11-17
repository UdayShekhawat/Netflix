import React from 'react'
// import '../component/loginStyle.css'
import Logo from '../assets/netflix-logo-png-2562.png'
import { Link, Switch, Route } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Forgot from './Forgot'
import Reset from './Reset'
import Profile from '../component/Profile'
import Welcome from './Welcome'
import Routes from './Router/Routes'

const Login = () => {
    // const hideWelcomeMsg = () =>{
    //     document.getElementsByClassName('welcome_msg').hidden();
    // }
    return (
        <>
            <div className="container">
                <div className="container_color">
                    <header>
                        <nav>
                            <div className="logo">
                                <img src={Logo} alt="netflix-logo"  />
                            </div>
                            <div className="search">
                                <input type="search" name="search" id="search" placeholder="Movie, TV-serials, Web-series"/>
                                <button className="fas fa-search search-icon"></button>
                            </div>
                            <div className="nav-list">
                            <ul>
                                <li>
                                    <Link className="link" to='/signin'><button className="nav_signin_btn">Sign In</button></Link>
                                </li>
                                <li>
                                    <Link className="link" to="/signup"> <button className="nav_signup_btn">Sign Up</button></Link>
                                </li>

                            </ul>

                            </div>
                        </nav>
                    </header>
                    <section>
                    <Routes></Routes>

                        {/* <Routes></Routes> */}
                        {/* <div className="welcome_msg">
                            <h1>Welcome User</h1>
                            <h2>Here you will get Unlimited movies, TV shows and more.</h2>
                            <h3>Register your email id </h3>
                            <h4> and enjoy unlimited entertainment anywhere</h4>
                        </div> */}

                        {/* <Switch>
                            <Route path="/signin" component={SignIn} />
                            <Route path="/signup" component={SignUp} />
                            <Route path="/forgot" component={Forgot} />
                            <Route path="/reset" component={Reset} />
                            <Route path="/profile" component={Profile} />
                        </Switch> */}


                        {/* <form action="#" className="form_content" method="get">
                            
                                <div className="form_title">
                                    <p> Sign In</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" id="email" placeholder="Email" autoComplete="off"/>
                                    <span className="error">error</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
                                    <span className="error">error</span>
                                </div>
                                <div className="form-group btn-box ">
                                    <input type="submit" className="btn" value="Sign In" />
                                </div>
                                <div className="form-bottom">
                                    
                                    <label htmlFor="checkbox"> <input type="checkbox" name="checkbox" id="cbox" /> Remember Me </label>
                                    <p>Need help?</p>
                                </div>

                            
                        </form> */}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Login
