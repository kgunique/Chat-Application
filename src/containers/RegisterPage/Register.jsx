import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from '../../components/UI/Card/Card'
import './style.css'
const Register = () => {

    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div>
            <Layout> </Layout>
            <div className="register_container">
                <Card>
                    <form>
                       <h3>Sign Up</h3>
                    <input 
                        type="text"
                        value={firstname}
                        name="firstname"
                        placeholder="Enter Your First name"
                        onChange={(e)=>{setFirstname(e.target.value)}}>
                    </input>
                    <input 
                        type="text"
                        value={lastname}
                        name="lastname"
                        placeholder="Enter Your Last name"
                        onChange={(e)=>{setLastname(e.target.value)}}>
                    </input>
                    <input 
                        type="email"
                        value={email}
                        name="email"
                        placeholder="Enter Your email"
                        onChange={(e)=>{setEmail(e.target.value)}}>
                    </input>
                    <input 
                        type="password"
                        value={password}
                        name="password"
                        placeholder="Enter Your password"
                        onChange={(e)=>{setPassword(e.target.value)}}>
                    </input>
                    <div><button>Submit</button></div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Register
