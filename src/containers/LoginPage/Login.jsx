import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from '../../components/UI/Card/Card'
import './style.css'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const formsubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <Layout></Layout>
            <div className="login_container">
            <Card>
                <form>
                    <input 
                        type="email"
                        value={email}
                        name="username"
                        placeholder="Enter Your username"
                        onChange={(e)=>{setEmail(e.target.value)}}>
                    </input>
                    <input 
                        type="password"
                        value={password}
                        name="password"
                        placeholder="Enter Your password"
                        onChange={(e)=>{setPassword(e.target.value)}}>
                    </input>
                    <div><button onClick={formsubmit}>Submit</button></div>
                </form>
            </Card>   
            </div>
        </div>
    )
}

export default Login
