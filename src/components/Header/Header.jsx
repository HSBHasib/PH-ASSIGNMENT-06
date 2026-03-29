import React from 'react'
import Navber from './Navber/Navber'
import Banner from './Banner/Banner'
import Ratings from './Ratings/Ratings'

const Header = ({selectProduct}) => {
  return (
    <div>
      <Navber selectProduct={selectProduct} />
      <Banner />
      <Ratings />
    </div>
  )
}

export default Header
