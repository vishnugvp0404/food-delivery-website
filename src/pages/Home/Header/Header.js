import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menu,setMenu] = useState("")


  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":"" }>View Menu</a>
        </div>
    </div>
  )
}

export default Header
