import React from 'react'
import Portfolio from './My Portfolio/Portfolio'
import About from './My Portfolio/About' 
import Navebarr from './My Portfolio/Navebarr'
import Skill from './My Portfolio/Skill'
import Project from './My Portfolio/Project'
import Contact from './My Portfolio/Contact'
import CV from './My Portfolio/CV'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Navebarr />
      <Routes>
        <Route path='/' element={<Portfolio />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />}/>>
        <Route path='/cv' element={<CV />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
