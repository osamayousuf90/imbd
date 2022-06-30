import React, { useState } from 'react'
import Logo from "./imgs/logo.png"


const Header = ({style , changer , white}) => {
    



  return (
      <>
      <div className="header">
        <div className="logo">
          <img src={Logo} className="logo" alt="" />
        </div>
        
        <div className="profile">
        <i class="fa-solid fa-user"></i>
        </div>
         <button onClick={changer}>Dark</button>
       
       </div>
      </>
  )
}

export default Header