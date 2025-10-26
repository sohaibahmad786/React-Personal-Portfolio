import React from 'react'
import './Porfolio.css'
const Project = () => {
  return (
    <div className='Project'>
      <div class="project-box">
        <h3>React Dynamic Profile Card</h3>
        <p>This project displays a user profile with interactive animations using React. On click, the background color changes dynamically and content appears with a smooth transition. It helped me explore conditional rendering and event handling in real-time.I used `useState`, inline styles, and component-based structure to keep the code clean and scalable.</p>
      </div>
      <div class="project-box">
        <h3>Animated Landing Page</h3>
        <p>This single-page layout uses CSS keyframe animations and transitions to animate elements on load. The layout includes hero sections, buttons, and cards that move with translateY and opacity effects.Working on this improved my understanding of animation timing and responsiveness in CSS.</p>
      </div>
      <div class="project-box">
        <h3>Custom Click Effects (Vanilla JS)</h3>
        <p>I built a lightweight interactive UI where background colors change on click using JavaScript and DOM manipulation. No libraries were used — just pure JS for speed and understanding core browser behavior.This small experiment taught me how to handle user input directly and update styles efficiently.</p>
      </div>
    </div>
  )
}

export default Project