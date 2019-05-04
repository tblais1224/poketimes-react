import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 5000)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">HOME</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        )
}

//"supercharging" Navbar to use props same as rest of the routes
export default withRouter(Navbar);