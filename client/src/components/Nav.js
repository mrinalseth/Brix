import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__options">
                <p 
                    className="option signup"
                    onClick={() => {
                        window.location = '/signup'
                    }}
                >Sign up</p>
                <p 
                    className="option signin"
                    onClick={() => {
                        window.location = '/signin'
                    }}
                >Login</p>
            </div>
        </div>
    )
}

export default Nav
