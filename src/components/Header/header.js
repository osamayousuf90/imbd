import React, { useState } from 'react'
import Logo from "./imgs/logo.png"


const Header = ({style , isBlack , changer , white}) => {
    



  return (
      <>
      <div className="header">
        <div className="logo_container">
          <img src={Logo} className="logo" alt="" />
        </div>
        
        <div className="profile">
        <i class="fa-solid fa-user"></i>
        </div>
        <div className="toggler_container">
        <button className='toggler_theme_changer' onClick={changer}>{ isBlack ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i> }</button>
        </div>
       </div>
      </>
  )
}

export default Header