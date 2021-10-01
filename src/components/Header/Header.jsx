import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
const Header = () => {
    return (
       <header className="header">
           <div style={{display:'flex'}}>
               <div className="logo">
                  <NavLink exact to={'./'}>KG Message</NavLink>
               </div>
               <ul className="leftmenu">
                   <li>
                       <NavLink exact to ={'./login'}>Login</NavLink>
                   </li>
                   <li>
                       <NavLink exact to ={'./signup'}>SignUp</NavLink>
                   </li>
               </ul>
           </div>
           <div style={{margin:'20px 0',color:'white',fontWeight:'bold'}}>Hi Karan</div>
           <ul className="menu">
               <li>
                   <Link to ={'#'} >Logout</Link>
               </li>
           </ul>
       </header>
    )
}

export default Header
