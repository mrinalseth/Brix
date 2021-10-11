import React, { useState } from 'react'
import axios from 'axios'
import './signup.css'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const onSubmit = async (e) => {
        if(password != password2){
            alert('Password must match')
            return
        }
        e.preventDefault()
        const newUser = {
            name,
            email,
            password
        }
        try {
            const res = await axios.post('/api/user/signup', newUser)
            window.location = '/signin'
        }catch(err){
            console.log(err.response)
        }
    }
    return (
        <div className="__signup">
            <form id="form" class="form" onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                <div class="form-control">
                    <label for="username">Username</label>
                    <input 
                        required
                        type="text" 
                        id="username" 
                        placeholder="Enter username"
                        value={name}    
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="form-control">
                    <label for="email">Email</label>
                    <input 
                        required
                        type="text" 
                        id="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input 
                        required
                        type="password" 
                        id="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}    
                    />
                </div>
                <div class="form-control">
                    <label for="password2">Comfirm password</label>
                    <input 
                        required
                        type="text" 
                        id="password2" 
                        placeholder="Enter passwordagain"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}    
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup
