import React from 'react'
import Logo from "./imgs/logo.png"

const Header = () => {
  return (
      <>
      <div className="header">
        <div className="logo">
          <img src={Logo} className="logo" alt="" />
        </div>
        
        <div className="profile">
        <i class="fa-solid fa-user"></i>
        </div>
       </div>
      </>
  )
}

export default Header