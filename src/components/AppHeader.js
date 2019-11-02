// Lien Ho Hoang - 2019/11/02

import React from 'react'
import { NavLink } from 'react-router-dom'
const AppHeader = () => {
  return (
    <div>
      <h1>React CRUD List</h1>
      <NavLink to='/item'>Add item</NavLink>
    </div>
  )
}

export default AppHeader


