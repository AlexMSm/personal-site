import React from 'react'
import ASLogo from '../../../assets/images/AS-logo-white.png'
import './index.scss'
import { useEffect, useRef } from 'react'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={ASLogo} alt="AS intials" />
    </div>
  )
}

export default Logo
