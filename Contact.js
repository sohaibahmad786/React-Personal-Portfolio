import React from 'react'
import './Porfolio.css'
const Contact = () => {
  function data(){
        alert("Your message sent to Sohaib")
    }
  return (
     <div className='contactme'>
            <div>
                <h1>Contact us</h1>
            </div>
            <div>
                <p style={{marginBottom:"0px"}}>Enter Your Name</p>
                <input type='text' placeholder='Enter Your Name'></input>
            </div>
            <div>
               <p>Enter Your Email</p>
               <input type='email' placeholder='Enter Your Email'></input>
            </div>
            <div>
               <p>Enter Your Message</p>
               <textarea rows={8} cols={30} placeholder='Enter Your Message'></textarea>
            </div>
            <div className='sentbtn'>
                <button onClick={data} style={{backgroundColor:"white", color:"blue"}}>Sent</button>
            </div>
        </div>
  )
}

export default Contact