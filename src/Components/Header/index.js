import React from 'react'
import './style.css'
import Name from '../Name'
import Info from '../Info'

const Header = () => {
  return (
    <div className="container container-top">
      <Name name="Stheffane Rodrigues Nunes" />
      <Info />
    </div>
  )
}

export default Header
