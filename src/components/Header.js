import React, { useState } from 'react'

const Header = () => {
  const [ click, setClick ] = useState(true)
  const ToggleMenu = () => {
    setClick(!click)
  }
  return (
    <>
    <div className="header-container">
      <img className="header-logo" src="https://dl.dropboxusercontent.com/s/8v1qd58cagh6zww/loona-logo.png?dl=0" style={click ? {display:'block'}:{display:'none'}}/>
     <div className="menu-container" onClick={ToggleMenu}>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="navigation-container" style={click ? {display:'none'}:{display:'flex'}}>
    <div className="navigation-content-container">
      <div>Home</div>
      <div>Profile</div>
      <div>Album</div>
      <div>News</div>
      <div>BlockBerry Creative</div>
    </div>
    </div>
    </>
  )
}

export default Header
