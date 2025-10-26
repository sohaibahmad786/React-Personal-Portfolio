import React from 'react'


import { Link } from 'react-router-dom'


const Navebarr = () => {
  return (
    <div>
      <div className='navebar'>
        <div className='Beginner'>
          <h2 style={{ color: "rgb(68, 255, 0)" }}>Beginner</h2>
        </div>
        <div className='information'>
          <p><Link to={'/'} style={{ textDecoration: "none", color: "yellow" }}>Home</Link></p>
          <p><Link to={'/about'} style={{ textDecoration: "none", color: "yellow" }}>About</Link></p>
          <p><Link to={'/skill'} style={{ textDecoration: "none", color: "yellow" }}>Skill</Link></p>
          <p><Link to={'/contact'} style={{ textDecoration: "none", color: "yellow" }}>Contact</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Navebarr