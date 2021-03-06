import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './dashboard.css'

const Dashboard = () => {
    const [text, setText] = useState('')
    const [post, setPost] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const token = localStorage.getItem('jwtToken')
            try {
                const res = await axios.get('/api/post', {
                    headers: {
                        "Authorization": token
                    }
                })
                setPost(res.data)
            }catch(err) {
                console.log(err)
            }
            
        }
        fetchData()
    }, [post])
    const onSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            text,
            mediaLink: '',
            mediaType: ''
        }
        try {
            const token = localStorage.getItem('jwtToken')
            const res = await axios.post('/api/post', newPost, {
                headers:{
                    "Authorization": token
                }
            })
            setText('')
        }catch (err) {
            console.log(err.response)
        }
    }
    return (
        <div className="dashboard">
            <div className="dashboard__input">
                <div className="text">
                    <form onSubmit={onSubmit}>
                        <input 
                            id="field"
                            type="text"  
                            required
                            placeholder="Enter text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <input id="submit" type="submit" />
                    </form>
                </div>
            </div>
            <div className="dashboard__output">
                {post.map((element) => {
                    return (
                        <div className="text">{element.text}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard
