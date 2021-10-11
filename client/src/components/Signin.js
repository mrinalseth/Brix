import React, { useState } from 'react'
import axios from 'axios'
import './signin.css'

const Signin = () => {
    const [email ,setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [user, setUser] = useState('')
    const onSubmit = async(e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        try {
            const res = await axios.post('/api/user/login', user)
            setUser(res.data.name)
            localStorage.setItem('jwtToken', res.data.token)
            window.location = '/dashboard'

        }catch (err) {
            console.log(err.response)
        }
    }
    return (
        <div className="__signin">
        {user}
        <form class="form" onSubmit={onSubmit}>
            <h2>Sign in</h2>
            <div className="form-control">
                <label for="email">Email</label>
                <input 
                    required
                    type="text" 
                    id="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-control">
                <label for="password">Password</label>
                <input 
                    required
                    type="password"
                    id="password" 
                    placeholder="Enter password"
                    value={password} 
                    onChange={(e) => {setpassword(e.target.value)}}/>
            </div>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Signin
