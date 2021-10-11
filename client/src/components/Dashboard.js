import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './dashboard.css'

const Dashboard = () => {
    const [text, settext] = useState('')
    const [post, setPost] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = axios.get('/api/post')
            console.log(res.data)
        }
        fetchData()
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <div className="dashboard">
            <div className="dashboard__input">
                <div className="text">
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text"  
                            required
                            placeholder="Enter text"
                            value={text}
                            onChange={(e) => settext(e.target.value)}
                        />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <div className="dashboard__output">
            
            </div>
        </div>
    )
}

export default Dashboard
