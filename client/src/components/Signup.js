import React from 'react'
import './signup.css'

const Signup = () => {
    return (
        <div className="__signup">
            <form id="form" class="form">
                <h2>Register</h2>
                <div class="form-control">
                    <label for="username">Username</label>
                    <input type="text" name="" id="username" placeholder="Enter username"/>
                    <small>Error msg</small>
                </div>
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="text" name="" id="email" placeholder="Enter email"/>
                    <small>Error msg</small>
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter password"/>
                    <small>Error msg</small>
                </div>
                <div class="form-control">
                    <label for="password2">Comfirm password</label>
                    <input type="text" name="" id="password2" placeholder="Enter passwordagain"/>
                    <small>Error msg</small>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup
