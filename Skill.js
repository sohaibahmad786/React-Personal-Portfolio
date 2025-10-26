import React from 'react'
import './Porfolio.css'
const Skill = () => {
  return (
    <div className='Skills'>
      <div class="skill-box">
        <h2>Frontend Development</h2>
        <p>I specialize in building clean and responsive UIs using HTML5, CSS3, and modern JavaScript (ES6+). Pixel-perfect design is my priority.Responsive layouts and browser compatibility are always part of my workflow.</p>
      </div>
      <div class="skill-box">
        <h2>React JS</h2>
        <p>I build scalable single-page applications (SPAs) using React. I have strong knowledge of components, props, hooks, and JSX.I also manage state effectively using useState and useEffect, and work with React Router for navigation.</p>
      </div>
      <div class="skill-box">
        <h2>UI/UX & Design</h2>
        <p>I pay special attention to user experience. I use Figma for design reference and always follow modern UI patterns.I believe good design improves usability and increases engagement on websites.</p>
      </div>
      <div class="skill-box">
        <h2>Version Control & Tools</h2>
        <p>I use Git & GitHub to track my code changes and collaborate on projects. I'm comfortable with VS Code and browser dev tools.These tools make my development faster, more efficient, and organized.</p>
      </div>
    </div>

  )
}

export default Skill